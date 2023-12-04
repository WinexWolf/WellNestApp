import Button from "@mui/material/Button";

const MatchingWelcomePage = () => {
    return (
        <div className="flex flex-col justify-between items-center">
            <div>
                <img
                    src={'/images/play/challenge.png'}
                    alt={'Therapy Matching Image'}
                    // className="pt-24 pb-24"
                    // style={{
                    //     width: '70%',
                    //     height: 'auto',
                    //     maxHeight: '400px',
                    //     display: 'block',
                    //     margin: 'auto'
                    // }}

                    className="max-w-full w-[275px] h-[300px] pt-24 pb-12"
                />
            </div>
            <div>
                <div className="font-semibold text-40px text-center pb-8">
                    Therapy Matching
                </div>
            </div>
            <div className="w-5/6">
                <div className="text-16px text-center pb-8">
                    With WellNest, finding the right therapist just got easier! Connect with the right mental health professional for your needs with the Therapy Matching
                </div>
            </div>
            <div>
                <Button variant="contained" style={{ backgroundColor: "#0087E8" }} href="/therapy_matching/main">CONTINUE</Button>
            </div>
        </div >
    );
};

export default MatchingWelcomePage;