import ChallengeCard from "../../components/play/ChallengeCard";

const originalChallenges = [
    {
        imgSrc: ["../images/play/breathing_exercise.png", "../images/play/breathing_exercise_completed.png"],
        imgAlt: "Breathing Exercise Image",
        title: "Breathing Exercise",
        coinCnt: 100,
        routeTarget: '/play/challenges/breathing',
        isCompleted: false
    },
    {
        imgSrc: ["../images/play/challenge.png", "../images/play/challenge_completed.png"],
        imgAlt: "Jigsaw Puzzle Image",
        title: "Jigsaw Puzzle",
        coinCnt: 200,
        routeTarget: '',
        isCompleted: true
    },
    {
        imgSrc: ["../images/play/challenge.png", "../images/play/challenge_completed.png"],
        imgAlt: "Wordle Image",
        title: "Wordle Game",
        coinCnt: 200,
        routeTarget: '',
        isCompleted: true
    },
    {
        imgSrc: ["../images/play/challenge.png", "../images/play/challenge_completed.png"],
        imgAlt: "Tetris Image",
        title: "Tetris Game",
        coinCnt: 200,
        routeTarget: '',
        isCompleted: true
    }
];


const PlayChallenges = () => {
    // Use local storage to keep track of challenges' state
    let challenges = localStorage.getItem('challenges');
    if (!challenges) {
        localStorage.setItem('challenges', JSON.stringify(originalChallenges));
    } else {
        challenges = JSON.parse(challenges);
    }

    return (
        <div>
            <div className="flex flex-col justify-between items-center">
                <div>
                    <div className="font-semibold text-40px text-center pt-4">
                        Play to Earn Coins!
                    </div>
                </div>
                <div>
                    <div className="text-16px pb-2 text-center">
                        Use your coins to redeem free therapy session from “Rewards”!
                    </div>
                </div>
            </div >

            <div className="flex flex-wrap justify-around items-center">
                {challenges && challenges.map((each) => (
                    <ChallengeCard
                        key={each.title}
                        imgSrc={each.imgSrc}
                        imgAlt={each.imgAlt}
                        title={each.title}
                        coinCnt={each.coinCnt}
                        isCompleted={each.isCompleted}
                        routeTarget={each.routeTarget}
                    />
                ))}
            </div >
        </div>
    );
};

export default PlayChallenges;
