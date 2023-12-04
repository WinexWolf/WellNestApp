import React from 'react';
//import { makeStyles } from '@mui/styles';
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

    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '90%',
    },

    firstLine: {
        color: '#232323',
        fontSize: '30px',
        paddingBottom: '20px',
    },

    secondLine: {
        color: '#232323',
        fontSize: '16px',
    },

    thirdLine: {
        color: '#232323',
        fontSize: '12px',
    }
});

const GoogleConfirmCard = ({ handleSwipe,}) => {
    const classes = useStyles();
    return (
        <div className = {classes.background}>
            <div className = {classes.flexContainer}>
                <div className={classes.firstLine}>
                    Connect to Google Workspace?
                </div>
                <div 
                    className={classes.secondLine}
                    style ={{paddingBottom: '50px'}}
                >
                    WellNest recommends to connect to your  Google workspace to match you with a more suitable therapist based on your profile.
                </div>
                <div 
                    className={classes.buttonContainer} 
                    style={{paddingBottom: '100px'}}
                >
                    <Button 
                        variant="contained" 
                        style={{
                            backgroundColor: '#E80000',
                            width: '100px',
                            marginRight: '20px'
                        }}
                        onClick={() => handleSwipe(2)}
                    >
                        Cancel
                    </Button>
                    <Button 
                        variant="contained" 
                        style={{
                            backgroundColor: '#0087E8',
                            width: '100px',
                            marginLeft: '20px'
                        }}
                        onClick={() => handleSwipe(2)}
                    >
                        Confirm
                    </Button>
                </div>
                <div 
                    className={classes.secondLine}
                    style={{fontWeight: 'bold', paddingBottom: '10px'}}
                >
                    Terms and Conditions
                </div>

                <div className={classes.thirdLine}>
                    By connecting to the Google Workspace, WellNest can access your calendar, email, and documents. Your data will never be used to improve WellNest or share with any third party! 
                </div>
            </div>
        </div>
    );
};

export default GoogleConfirmCard;