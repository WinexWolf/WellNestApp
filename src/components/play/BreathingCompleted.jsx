import React from 'react';
import Button from '@mui/material/Button';

const customButtonStyle = {
    fontSize: '14px',
    padding: '6px',
};

const customButtonStyleOpaque = {
    fontSize: '14px',
    padding: '6px',
    backgroundColor: '#81C8FB',
};

export default function BreathingCompleted({ coins }) {
    // Mark challenge 'Breathing Exercise' as completed
    let challenges = localStorage.getItem('challenges');
    if (!challenges) {
        console.log('Error: no challenges exist!');
    } else {
        challenges = JSON.parse(challenges);
        challenges[0].isCompleted = true;
        localStorage.setItem('challenges', JSON.stringify(challenges));
        // console.log(localStorage.getItem('challenges'))
    }

    // Update coins balance
    const updatedCoins = coins + 100;
    localStorage.setItem('coins', updatedCoins.toString());

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='text-center text-30px font-bold pt-8'>Congratulations!</div>
            <div className='flex flex-col justify-center items-center'>
                <img
                    src={'../../images/play/congrats.png'}
                    alt={`Congratulations`}
                    className="w-32 pt-10 pb-10"
                />
            </div>

            <div className='text-center text-16px w-60 pb-10'>
                You’ve just earned 100 coins for finishing the breathing exercise!
            </div>
            <Button
                variant="contained"
                className="justify-center w-44"
                style={customButtonStyle}
                href={'/rewards'}
            >
                REDEEM COINS
            </Button>
            <div className='pb-4'></div>
            <Button
                variant="contained"
                className="justify-center w-44"
                style={customButtonStyleOpaque}
                href={'/play/challenges'}
            >
                OTHER CHALLENGES
            </Button>
            <div className='pb-8'></div>
        </div>
    );
}