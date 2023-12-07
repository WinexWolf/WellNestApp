import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import RewardCard from "../../components/rewards/RewardCard";
import TitleBar from '../moodTrack/titlebar';


const rewards = [
    {
        title: '30-minutes session',
        price: 100
    },
    {
        title: '60-minutes session',
        price: 300
    }
];

const getCoinsBalance = () => {
    let balance = localStorage.getItem('coins');
    if (!balance) {
        balance = 0;
        localStorage.setItem('coins', balance.toString());
    } else {
        balance = parseInt(balance, 10);
    }
    return balance;
}


const Rewards = () => {
    const [coins, setCoins] = useState(getCoinsBalance());

    return (
        <div>
            <TitleBar title='PLAY TO EARN' />
            <div className="flex flex-col justify-center items-center mt-14 mb-14">
                <Card sx={{ borderRadius: 5 }} className='w-11/12'>
                    <CardContent className="bg-calmBlue bg-opacity-20">
                        <div className="text-30px font-semibold text-center pb-2">
                            Current Coins
                        </div>
                        <div className="text-20px font-semibold text-center">
                            {coins} Coins
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex flex-col justify-center items-center">
                <Card sx={{ borderRadius: 5 }} className='w-11/12'>
                    <CardContent className="bg-calmBlue bg-opacity-20">
                        <div className="text-30px font-semibold text-center pt-4 pb-4">
                            Redeem Coins
                        </div>
                        <div className="text-16px text-center pb-8">
                            You can redeem your coins for free therapist sessions!
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            {rewards && rewards.map((each) => (
                                <RewardCard
                                    key={each.title}
                                    item={each.title}
                                    price={each.price}
                                    setCoins={setCoins}
                                />
                            ))}
                        </div >
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Rewards;
