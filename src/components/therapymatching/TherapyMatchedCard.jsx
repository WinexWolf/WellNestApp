import React, {useEffect, useState} from 'react';
import { makeStyles } from '@mui/styles';
import Button from "@mui/material/Button";
import TherapistInfoModels from '../../models/TherapistInfoModels';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
// Define custom styles
const useStyles = makeStyles({
    background: {
        backgroundColor: 'rgba(129, 200, 251, 0.15)',
        borderRadius: '20px',
        marginTop: '10px',
        height: '97%',
    },

    flexContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100%',
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

    smallTitle: {
        color: '#232323',
        fontSize: '16px',
        fontWeight: 'bold',
    },

    smallContent: {
        color: '#232323',
        fontSize: '16px',
    },

    modelStyle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '20px',
    }
});

const TherapyMatchedCard = ({ handleSwipe, active}) => {

    const getLocal = (balanceType) => {
        let balance = localStorage.getItem(balanceType);
        if (!balance) {
            balance = 0;
            setLocal(balanceType, balance)
        } else {
            balance = parseInt(balance, 10);
        }
        return balance;
    }
    
      // Set coins/sessions balance
    const setLocal = (balanceType, balance) => localStorage.setItem(balanceType, balance.toString());

    const getCurrentTherapist = () => {
        var matchedTherapist = (
                getLocal('next_therapist') - 1 + TherapistInfoModels.length
            ) % TherapistInfoModels.length;
        if (!matchedTherapist) {
            matchedTherapist = 0;
        }
        return TherapistInfoModels[matchedTherapist];
    };
    const classes = useStyles();
    const [currentTherapist, setCurrentTherapist] = useState(
        TherapistInfoModels[0]
    );
    const [open, setOpen] = React.useState(false);
    const handleCancelMeeting = () => {
        setOpen(false);
        setLocal('therapist_is_matched', 0);
        handleSwipe(0);
    };
    const handleStay = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (active) {
            setCurrentTherapist(getCurrentTherapist);
        }
        return () => {
        };
    }, [active, handleSwipe]);

    return (
        <div className = {classes.background}>
            <Modal
                open={open}
                onClose={handleStay}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.modelStyle}>
                    <div style={{textAlign: 'center'}}>
                        <div className={classes.smallContent}>
                            Are you sure you want to cancel your appointment with
                        </div>
                        <div 
                            className={classes.smallContent} 
                            style={{
                                paddingTop:'5px',
                                paddingBottom:'5px',
                                fontWeight: 'bold',
                            }}
                        >
                            {currentTherapist.Name}?
                        </div>
                    </div>
                    <div style={{
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:"center",
                        paddingTop: '20px'
                    }}>
                        <Button 
                            variant="contained" 
                            style={{
                                backgroundColor: '#0087E8',
                                marginRight: '30px'
                            }}
                            onClick={handleStay}
                        >
                            Do not Cancel
                        </Button>
                        <Button 
                            variant="contained" 
                            style={{
                                backgroundColor: '#E80000',
                                marginLeft: '30px'
                            }}
                            onClick={handleCancelMeeting}
                        >
                            Yes, Cancel
                        </Button>

                    </div>
                </Box>
            </Modal>
            <div className = {classes.flexContainer}>
                <div className={classes.firstLine}>
                    Upcoming Therapy Session
                </div>
                <div style={{width: '100%'}}>
                    <img
                        src={currentTherapist.Src}
                        alt={currentTherapist.Name}
                        style={{ 
                            maxWidth: '50%',
                            maxHeight: '100%',
                            aspectRatio: '1/1'
                        }}
                    />
                </div>
                <div 
                    className={classes.smallTitle}
                    style ={{paddingTop: '20px'}}
                >
                    Name:
                </div>
                <div 
                    className={classes.smallContent}
                    style ={{paddingTop: '5px'}}
                >
                    {currentTherapist.Name}
                </div>
                <div 
                    className={classes.smallTitle}
                    style ={{paddingTop: '5px'}}
                >
                    Qualifications:
                </div>
                <div 
                    className={classes.smallContent}
                    style ={{paddingTop: '5px'}}
                >
                    {currentTherapist.Qualifications}
                </div>
                <div 
                    className={classes.smallTitle}
                    style ={{paddingTop: '20px'}}
                >
                    Date:
                </div>
                <div 
                    className={classes.smallContent}
                    style ={{paddingTop: '5px'}}
                >
                    {currentTherapist.Date}
                </div>
                <div 
                    className={classes.smallTitle}
                    style ={{paddingTop: '5px'}}
                >
                    Time:
                </div>
                <div 
                    className={classes.smallContent}
                    style ={{paddingTop: '5px'}}
                >
                    {currentTherapist.Time} (30 Minutes Session)
                </div>
                <div 
                    className={classes.buttonContainer} 
                    style={{paddingTop: '20px'}}
                >
                    <Button 
                        variant="contained" 
                        style={{
                            backgroundColor: '#E80000',
                            width: '100px',
                            marginRight: '20px'
                        }}
                        onClick={() => setOpen(true)}
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
                        onClick={() => {
                            window.open('https://cmu.zoom.us/j/99143300269?pwd=bklTWTQ3NGJNRVhubWVtMlhMUGxsQT09', "_blank", "noreferrer");
                        }}
                    >
                        Join
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TherapyMatchedCard;