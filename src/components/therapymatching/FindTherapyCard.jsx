import React from 'react';
// import { makeStyles } from '@mui/styles';
import { makeStyles } from "mui-styles";
import Button from "@mui/material/Button";

// Define custom styles
const useStyles = makeStyles({
    background: {
        backgroundColor: 'rgba(129, 200, 251, 0.15)',
        borderRadius: '20px',
        marginTop: '40px',
        height: '90%',
    },

    flexContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '90%',
        padding: '20px',
    },
    firstLine: {
        color: '#232323',
        fontSize: '30px',
        paddingBottom: '50px',
    },
    secondLine: {
        color: '#232323',
        fontSize: '16px',
        paddingBottom: '50px',
    },
    findHelp: {
        color: '#FFFFFF',
        fontSize: '40px',
        fontWeight: 'bold',
    },
    roundButton: {
        '&&': {
            position: 'relative',
            overflow: 'visible',
            width: '80%',
            maxWidth: '300px',
            aspectRatio: '1/1',
            borderRadius: '50%',
            fontSize: 'large',
            backgroundColor: '#0087E8',
            boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.25)',
        }
    },
    rippleCircle: {
        position: 'absolute',
        top: 0,
        left: 0,
        borderRadius: '50%',
        border: '1px solid #0087E8',
        animation: '$ripple 1.5s infinite ease-out',
        // The initial size covers the entire button
        width: '100%',
        height: '100%',
        // Scales from the border of the button
        transformOrigin: 'center',
        boxSizing: 'border-box',
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(1)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(1.25)',
            opacity: 0,
        },
    },
})

const FindTherapyCard = ({ handleSwipe }) => {
    const classes = useStyles();
    return (
        <div className = {classes.background}>
            <div className = {classes.flexContainer}>
                <div className={classes.firstLine}>
                    Find Your Therapist Today!
                </div>
                <div className={classes.secondLine}>
                    Click “Find Help” to get matched with a therapist we recommend!
                </div>
                <Button 
                    className={classes.roundButton}
                    variant="contained" 
                    color="primary"
                    onClick={() => {
                        handleSwipe(1);
                    }}
                >
                    <span className={classes.rippleCircle}></span>
                    <div className={classes.findHelp}>
                        Find Help
                    </div>
                </Button>
            </div>
        </div>
    );
};

export default FindTherapyCard;