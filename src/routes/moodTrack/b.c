void forward_convolutional_layer(convolutional_layer l, network_state state)
{
    int out_h = convolutional_out_height(l);
    int out_w = convolutional_out_width(l);
    int i, j;
    fill_cpu(l.outputs * l.batch, 0, l.output, 1);
    if (l.xnor && (!l.align_bit_weights || state.train))
    {
        if (!l.align_bit_weights || state.train)
        {
            binarize_weights(l.weights, l.n, l.nweights, l.binary_weights);
            // printf("\n binarize_weights l.align_bit_weights = %p \n", l.align_bit_weights);
        }
        swap_binary(&l);
        binarize_cpu(state.input, l.c * l.h * l.w * l.batch, l.binary_input);
        state.input = l.binary_input;
    }
    int m = l.n / l.groups;
    int k = l.size * l.size * l.c / l.groups;
    int n = out_h * out_w;
    static int u = 0;
    u++;
    for (i = 0; i < l.batch; ++i)
    {
        for (j = 0; j < l.groups; ++j)
        {
            float *a = l.weights + j * l.nweights / l.groups;
            float *b = state.workspace;
            float *c = l.output + (i * l.groups + j) * n * m;
            // gemm(0,0,m,n,k,1,a,k,b,n,1,c,n);
            // gemm_nn_custom(m, n, k, 1, a, k, b, n, c, n);
            if (l.xnor && l.align_bit_weights && !state.train && l.stride_x == l.stride_y)
            {
                memset(b, 0, l.bit_align * l.size * l.size * l.c * sizeof(float));
                if (l.c % 32 == 0)
                {
                    // printf(" l.index = %d - new XNOR \n", l.index);
                    int ldb_align = l.lda_align;
                    size_t new_ldb = k + (ldb_align - k % ldb_align); // (k / 8 + 1) * 8;
                    // size_t t_intput_size = new_ldb * l.bit_align;// n;
                    // size_t t_bit_input_size = t_intput_size / 8;// +1;
                    int re_packed_input_size = l.c * l.w * l.h;
                    memset(state.workspace, 0, re_packed_input_size * sizeof(float));
                    const size_t new_c = l.c / 32;
                    size_t in_re_packed_input_size = new_c * l.w * l.h + 1;
                    memset(l.bin_re_packed_input, 0, in_re_packed_input_size * sizeof(uint32_t));
                    // float *re_packed_input = calloc(l.c * l.w * l.h, sizeof(float));
                    // uint32_t *bin_re_packed_input = calloc(new_c * l.w * l.h + 1, sizeof(uint32_t));
                    // float32x4 by channel (as in cuDNN)
                    repack_input(state.input, state.workspace, l.w, l.h, l.c);
                    // 32 x floats -> 1 x uint32_t
                    float_to_bit(state.workspace, (unsigned char *)l.bin_re_packed_input, l.c * l.w * l.h);
                    // free(re_packed_input);
                    // slow - convolution the packed inputs and weights: float x 32 by channel (as in cuDNN)
                    // convolution_repacked((uint32_t *)bin_re_packed_input, (uint32_t *)l.align_bit_weights, l.output,
                    //    l.w, l.h, l.c, l.n, l.size, l.pad, l.new_lda, l.mean_arr);
                    // // then exit from if()
                    // fma optimized version
                    // TODO: Write kernel for this
                    // im2col_cpu_custom((float *)l.bin_re_packed_input, new_c, l.h, l.w, l.size, l.stride, l.pad, state.workspace);
                    im2col_cpu((float *)l.bin_re_packed_input, new_c, l.h, l.w, l.size, l.stride, l.pad, b);
                    // free(bin_re_packed_input);
                    int new_k = l.size * l.size * l.c / 32;
                    // good for (l.c == 64)
                    // gemm_nn_bin_32bit_packed(m, n, new_k, 1,
                    //    l.align_bit_weights, l.new_lda/32,
                    //    b, n,
                    //    c, n, l.mean_arr);
                    // // then exit from if()
                    transpose_uint32((uint32_t *)state.workspace, (uint32_t *)l.t_bit_input, new_k, n, n, new_ldb);
                    // the main GEMM function
                    gemm_nn_custom_bin_mean_transposed(m, n, k, 1, (unsigned char *)l.align_bit_weights, new_ldb, (unsigned char *)l.t_bit_input, new_ldb, c, n, l.mean_arr);
                    // // alternative GEMM
                    // gemm_nn_bin_transposed_32bit_packed(m, n, new_k, 1,
                    //    l.align_bit_weights, l.new_lda/32,
                    //    t_bit_input, new_ldb / 32,
                    //    c, n, l.mean_arr);
                    // free(t_bit_input);
                }
                else
                { // else (l.c % 32 != 0)
                    //--------------------------------------------------------
                    // printf(" l.index = %d - old XNOR \n", l.index);
                    // im2col_cpu_custom_align(state.input, l.c, l.h, l.w, l.size, l.stride, l.pad, b, l.bit_align);
                    im2col_cpu_custom_bin(state.input, l.c, l.h, l.w, l.size, l.stride, l.pad, state.workspace, l.bit_align);
                    // size_t output_size = l.outputs;
                    // float *count_output = calloc(output_size, sizeof(float));
                    // size_t bit_output_size = output_size / 8 + 1;
                    // char *bit_output = calloc(bit_output_size, sizeof(char));
                    // size_t intput_size = n * k; // (out_h*out_w) X (l.size*l.size*l.c) : after im2col()
                    // size_t bit_input_size = intput_size / 8 + 1;
                    // char *bit_input = calloc(bit_input_size, sizeof(char));
                    // size_t weights_size = k * m; //l.size*l.size*l.c*l.n; // l.nweights
                    // size_t bit_weights_size = weights_size / 8 + 1;
                    // char *bit_weights = calloc(bit_weights_size, sizeof(char));
                    // float *mean_arr = calloc(l.n, sizeof(float));
                    // transpose B from NxK to KxN (x-axis (ldb = l.size*l.size*l.c) - should be multiple of 8 bits)
                    {
                        // size_t ldb_align = 256; // 256 bit for AVX2
                        int ldb_align = l.lda_align;
                        size_t new_ldb = k + (ldb_align - k % ldb_align);
                        size_t t_intput_size = binary_transpose_align_input(k, n, state.workspace, &l.t_bit_input, ldb_align, l.bit_align);
                        // 5x times faster than gemm()-float32
                        gemm_nn_custom_bin_mean_transposed(m, n, k, 1, (unsigned char *)l.align_bit_weights, new_ldb, (unsigned char *)l.t_bit_input, new_ldb, c, n, l.mean_arr);
                        // gemm_nn_custom_bin_mean_transposed(m, n, k, 1, bit_weights, k, t_bit_input, new_ldb, c, n, mean_arr);
                        // free(t_input);
                        // free(t_bit_input);
                        // }
                    }
                }
                add_bias(l.output, l.biases, l.batch, l.n, out_h * out_w);
                // activate_array(l.output, m*n*l.batch, l.activation);
                if (l.activation == SWISH)
                    activate_array_swish(l.output, l.outputs * l.batch, l.activation_input, l.output);
                else if (l.activation == MISH)
                    activate_array_mish(l.output, l.outputs * l.batch, l.activation_input, l.output);
                else if (l.activation == HARD_MISH)
                    activate_array_hard_mish(l.output, l.outputs * l.batch, l.activation_input, l.output);
                else if (l.activation == NORM_CHAN)
                    activate_array_normalize_channels(l.output, l.outputs * l.batch, l.batch, l.out_c, l.out_w * l.out_h, l.output);
                else if (l.activation == NORM_CHAN_SOFTMAX)
                    activate_array_normalize_channels_softmax(l.output, l.outputs * l.batch, l.batch, l.out_c, l.out_w * l.out_h, l.output, 0);
                else if (l.activation == NORM_CHAN_SOFTMAX_MAXVAL)
                    activate_array_normalize_channels_softmax(l.output, l.outputs * l.batch, l.batch, l.out_c, l.out_w * l.out_h, l.output, 1);
                else
                    activate_array_cpu_custom(l.output, m * n * l.batch, l.activation);
                return;
            }
            else
            {
                // printf(" l.index = %d - FP32 \n", l.index);
                float *im = state.input + (i * l.groups + j) * (l.c / l.groups) * l.h * l.w;
                if (l.size == 1 && l.stride == 1 && l.dilation == 1)
                {
                    b = im;
                }
                else
                {
                    // im2col_cpu(im, l.c / l.groups, l.h, l.w, l.size, l.stride, l.pad, b);
                    im2col_cpu_ext(im,                                     // input
                                   l.c / l.groups,                         // input channels
                                   l.h, l.w,                               // input size (h, w)
                                   l.size, l.size,                         // kernel size (h, w)
                                   l.pad * l.dilation, l.pad * l.dilation, // padding (h, w)
                                   l.stride_y, l.stride_x,                 // stride (h, w)
                                   l.dilation, l.dilation,                 // dilation (h, w)
                                   b);                                     // output
                }
                gemm(0, 0, m, n, k, 1, a, k, b, n, 1, c, n);
                // bit-count to float
            }
            // c += n*m;
            // state.input += l.c*l.h*l.w;
        }
    }
    if (l.batch_normalize)
    {
        forward_batchnorm_layer(l, state);
    }
    else
    {
        add_bias(l.output, l.biases, l.batch, l.n, out_h * out_w);
    }
    // activate_array(l.output, m*n*l.batch, l.activation);
    if (l.activation == SWISH)
        activate_array_swish(l.output, l.outputs * l.batch, l.activation_input, l.output);
    else if (l.activation == MISH)
        activate_array_mish(l.output, l.outputs * l.batch, l.activation_input, l.output);
    else if (l.activation == HARD_MISH)
        activate_array_hard_mish(l.output, l.outputs * l.batch, l.activation_input, l.output);
    else if (l.activation == NORM_CHAN)
        activate_array_normalize_channels(l.output, l.outputs * l.batch, l.batch, l.out_c, l.out_w * l.out_h, l.output);
    else if (l.activation == NORM_CHAN_SOFTMAX)
        activate_array_normalize_channels_softmax(l.output, l.outputs * l.batch, l.batch, l.out_c, l.out_w * l.out_h, l.output, 0);
    else if (l.activation == NORM_CHAN_SOFTMAX_MAXVAL)
        activate_array_normalize_channels_softmax(l.output, l.outputs * l.batch, l.batch, l.out_c, l.out_w * l.out_h, l.output, 1);
    else
        activate_array_cpu_custom(l.output, l.outputs * l.batch, l.activation);
    if (l.binary || l.xnor)
        swap_binary(&l);
    // visualize_convolutional_layer(l, "conv_visual", NULL);
    // wait_until_press_key_cv();
    if (l.assisted_excitation && state.train)
        assisted_excitation_forward(l, state);
    if (l.antialiasing)
    {
        network_state s = {0};
        s.train = state.train;
        s.workspace = state.workspace;
        s.net = state.net;
        s.input = l.output;
        forward_convolutional_layer(*(l.input_layer), s);
        // simple_copy_ongpu(l.outputs*l.batch, l.output, l.input_antialiasing);
        memcpy(l.output, l.input_layer->output, l.input_layer->outputs * l.input_layer->batch * sizeof(float));
    }
}



//benchmarking
int main()
{
 
// Define constants for simplicity
#define MAX_GROUPS 1
#define MAX_BATCH 2
#define MAX_C 3
#define MAX_H 4
#define MAX_W 4
#define MAX_N 5
#define MAX_SIZE 3
#define MAX_STRIDE 1
#define MAX_PAD 1

    // Define convolutional_layer structure
    typedef struct
    {
        int index;
        int n;                   // Number of filters
        int c;                   // Number of input channels
        int h;                   // Input height
        int w;                   // Input width
        int size;                // Filter size (assuming square filters)
        int stride_x;            // Horizontal stride
        int stride_y;            // Vertical stride
        int pad;                 // Padding
        int batch;               // Batch size
        int groups;              // Number of groups
        int binary;              // Binary weights
        int xnor;                // XNOR-net
        int batch_normalize;     // Batch normalization
        int bit_align;           // Bit alignment (assuming it's an integer value)
        int lda_align;           // LDA alignment (assuming it's an integer value)
        int antialiasing;        // Antialiasing flag
        int assisted_excitation; // Assisted excitation flag
        int activation;          // Activation type (e.g., SWISH, MISH, etc.)

        float *weights;
        float *biases;
        float *output;
        float *input_antialiasing;
        float *mean_arr;
        float *align_bit_weights;
        float *t_bit_input;
        uint32_t *bin_re_packed_input;
        float *activation_input;
        // Add other necessary arrays and parameters based on your actual implementation

    } convolutional_layer;

    // Define network_state structure
    typedef struct
    {
        int train;        // Training flag
        float *input;     // Input data
        float *workspace; // Workspace for intermediate results
        float *net;       // Placeholder for the network
        // Add other necessary parameters based on your actual implementation

    } network_state;

    // Set up your convolutional_layer and network_state parameters
    convolutional_layer l;
    network_state state;

    // Warm-up run
    forward_convolutional_layer(l, state);

    // Benchmarking loop
    const int TOTAL_RUN = 1000; // Adjust the number of runs as needed

    // Measure start time
    unsigned long long start = rdtsc();

    for (int i = 0; i < TOTAL_RUN; ++i)
    {
        forward_convolutional_layer(l, state);
    }

    // Measure end time
    unsigned long long end = rdtsc();

    // Calculate elapsed cycles
    unsigned long long cycles = end - start;

    // Print benchmark results
    printf("Elapsed cycles: %llu\n", cycles);
    printf("Average cycles per run: %llu\n", cycles / TOTAL_RUN);

    // Calculate FLOPs and FLOPs per cycle (update with your actual calculations)
    double flops = 0.0; // Update this with your FLOP calculation
    double flopsPerCycle = flops / cycles;

    printf("FLOPs per cycle: %f\n", flopsPerCycle);

    return 0;
}