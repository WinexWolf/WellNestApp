import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import Loading from './Loading';
import Button from "@mui/material/Button";

// Define custom styles
const useStyles = makeStyles({
    background: {
        backgroundColor: 'rgba(129, 200, 251, 0.15)',
        borderRadius: '20px',
        flexGrow: 0.5,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    },   
    flexContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '40px',
        height: '90%',
    }, 
    firstLine: {
        color: '#232323',
        fontSize: '30px',
        paddingBottom: '20px',
        paddingLeft: '3px',
        paddingRight: '3px',
    },
    secondLine: {
        color: '#232323',
        fontSize: '20px',
    },
});

const LoadingCard = ({ handleSwipe, active}) => {
    const classes = useStyles();
    useEffect(() => {
        let timer;
        // if (active) {
        //     timer = setTimeout(() => {
        //         handleSwipe(3); // Go to next card after 2 seconds
        //     }, 1500);
        // }
        return () => clearTimeout(timer); // Clean up the timer
    }, [active, handleSwipe]);
    return (
        <div className = {classes.flexContainer}>
            <div 
                style={{
                    flexGrow: 0.5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div 
                    style={{
                        maxWidth: '400px',
                        width: '70%',
                        aspectRatio: '1/1',
                    }}
                >
                    <Loading />
                </div>
                <div className={classes.secondLine} style={{paddingTop: '10px'}}>
                    Matching with Therapist...
                </div>
            </div>
            
            

            
            <div className={classes.background}>
                <div className={classes.firstLine}>
                Based on your schedule we’ll match you with the best therapist
                </div>
                <Button 
                    variant="contained" 
                    style={{backgroundColor: '#E80000', width: '100px'}}
                    onClick={() => handleSwipe(0)}
                >
                    Cancel
                </Button>
            </div>
        </div>
    );

};

export default LoadingCard;