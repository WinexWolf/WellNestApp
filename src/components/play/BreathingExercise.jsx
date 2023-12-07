import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import BreathingInProgress from './BreathingInPorgress';
import BreathingCompleted from './BreathingCompleted';
import TitleBar from '../../routes/moodTrack/titlebar';

export default function BreathingExercise() {
    // Breathing stage
    const [stage, setStage] = useState('breathe_in');

    useEffect(() => {
        // Switch to next stage of breathing exercise after 1.5 second
        const switchStageTimeout = setTimeout(() => {
            if (stage === 'breathe_in') {
                setStage('breathe_out');
            } else if (stage === 'breathe_out') {
                setStage('exercise_completed');
            }
        }, 1500);

        return () => {
            clearTimeout(switchStageTimeout);
        };
    }, [stage]);

    // Display current stage of breathing exercise
    let content;
    switch (stage) {
        case 'breathe_in':
        case 'breathe_out':
            content = <BreathingInProgress stage={stage} />
            break;
        case 'exercise_completed':
            // Get current coins balance
            let coins = localStorage.getItem('coins');
            if (!coins) {
                coins = 0;
                localStorage.setItem('coins', coins.toString());
            } else {
                coins = parseInt(coins, 10);
            }

            content = <BreathingCompleted coins={coins} />
            break;
        default:
            content = null;
    }

    return (
        <div>
            <TitleBar title='PLAY TO EARN' />
            <div className="flex flex-col justify-center items-center mt-10">
                <Card sx={{ borderRadius: 5 }} className='w-11/12'>
                    <CardContent className="bg-calmBlue bg-opacity-20">
                        <div className="text-30px font-semibold text-center p-5">
                            Breathing Exercise
                        </div>
                        {content}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}