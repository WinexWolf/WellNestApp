import React, { useState, useEffect } from 'react';
import SwipeableContainer from '../../components/therapymatching/SwipableContainer'; // Adjust the path as per your file structure
import { makeStyles } from '@mui/styles';
import FindTherapyCard from '../../components/therapymatching/FindTherapyCard';
import GoogleConfirmCard from '../../components/therapymatching/GoogleConfirmCard';
import LoadingCard from '../../components/therapymatching/LoadingCard';

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
    const getLocal = (balanceType) => {
        let balance = localStorage.getItem(balanceType);
        if (!balance) {
            balance = 0;
            setLocal('sessions_balance', balance)
        } else {
            balance = parseInt(balance, 10);
        }
        return balance;
    }
    
      // Set coins/sessions balance
    const setLocal = (balanceType, balance) => localStorage.setItem(balanceType, balance.toString());

    const [balance, setBalance] = useState(getLocal('sessions_balance'));

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
                    {balance} sessions remained
                </div>

            </div>
            <SwipeableContainer>
                <FindTherapyCard/>
                <GoogleConfirmCard/>
                <LoadingCard/>
                <div style={{height: '100%', width: '100%', backgroundColor: 'lightblue'}}>
                    card4
                </div>
                <div style={{height: '100%', width: '100%', backgroundColor: 'orange'}}>
                    card5
                </div>

            {/* Add more cards as needed */}
            </SwipeableContainer>
        
        </div>
    );
};

export default MatchingMainPage;