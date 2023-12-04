import Button from "@mui/material/Button";

const PlayStart = () => {
    return (
        <div className="flex flex-col justify-between items-center">
            <div>
                <img
                    src={'images/play/play_to_earn_start.png'}
                    alt={'Play To Earn Start'}
                    className="max-w-full w-[275px] h-[300px] pt-24 pb-12"
                />
            </div>
            <div>
                <div className="font-semibold text-40px text-center pb-8">
                    Play to Earn
                </div>
            </div>
            <div className="w-5/6">
                <div className="text-16px text-center pb-8">
                    Get motivated, stay engaged, and unlock exciting perks with the Play to Earn
                </div>
            </div>
            <div>
                <Button variant="contained" style={{ backgroundColor: "#0087E8" }} href="/play/challenges">CONTINUE</Button>
            </div>
        </div >
    );
};

export default PlayStart;
