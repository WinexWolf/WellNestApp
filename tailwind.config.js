/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    corePlugins: {
        preflight: false,
    },
    theme: {
        extend: {
            fontSize: {
                '40px': '40px',
                '30px': '30px',
                '24px': '24px',
                '16px': '16px',
                '14px': '14px',
            },
            colors: {
                calmBlue: '#81C8FB',
            }
        },
    },
    plugins: [],
};
