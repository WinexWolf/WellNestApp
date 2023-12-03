import React from 'react';
import SwipeableContainer from '../../components/therapymatching/SwipableContainer'; // Adjust the path as per your file structure
import { makeStyles } from '@mui/styles';
import FindTherapyCard from '../../components/therapymatching/FindTherapyCard';

const useStyles = makeStyles({
    flexContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '90%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },
    roundCornerBackGround: {
        backgroundColor: 'rgba(129, 200, 251, 0.15)',
        borderRadius: '20px',
        width: '90%',
        display: 'flex',
        flexDirection: 'column'
    },
    firstLine: {
        color: '#232323',
        fontSize: '24px'
    },
    secondLine: {
        color: '#232323',
        fontSize: '16px',
        fontWeight: 'bold'
    }
    
});

const MatchingMainPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.flexContainer}>
            <div 
                className={classes.roundCornerBackGround} 
                style={{
                    height:'60px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <div className={classes.firstLine}>
                    Current Balance:
                </div>
                <div className={classes.secondLine}>
                    5 sessions remained
                </div>

            </div>
            <SwipeableContainer>
                <FindTherapyCard/>
                <div style={{ backgroundColor: 'lightgreen', height: '100%'}}>
                    Card 2
                </div>
                <div style={{ backgroundColor: 'lightcoral', height: '100%'}}>
                    Card 3
                </div>
            {/* Add more cards as needed */}
            </SwipeableContainer>
        
        </div>
    );
};

export default MatchingMainPage;