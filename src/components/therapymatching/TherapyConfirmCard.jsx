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

const TherapyConfirmCard = ({ handleSwipe, active, setBalance }) => {
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

    const getNextTherapist = () => {
        
        var matchedTherapist = getLocal('next_therapist');
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
    const handleConfirm = () => {
        setOpen(false);
        setLocal('therapist_is_matched', 1);
        var matchedTherapist = getLocal('next_therapist');
        var nextTherapist = (matchedTherapist + 1) % TherapistInfoModels.length;
        setLocal('next_therapist', nextTherapist);
        setLocal('sessions_balance', getLocal('sessions_balance') - 1)
        setBalance(getLocal('sessions_balance'));
        handleSwipe(4);
    };

    useEffect(() => {
        if (active) {
            setCurrentTherapist(getNextTherapist);
        }
        return () => {
        };
    }, [active, handleSwipe]);

    return (
        <div className = {classes.background}>
            <Modal
                open={open}
                onClose={handleConfirm}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.modelStyle}>
                    <div style={{textAlign: 'center'}}>
                        <div className={classes.smallContent}>
                            Your appointment with
                        </div>
                        <div 
                            className={classes.smallContent} 
                            style={{
                                paddingTop:'5px',
                                paddingBottom:'5px',
                                fontWeight: 'bold',
                            }}
                        >
                            {currentTherapist.Name}
                        </div>
                        <div className={classes.smallContent}>
                            has been confirmed for 
                        </div>
                        <div 
                            className={classes.smallContent}
                            style={{
                                paddingTop:'5px',
                                paddingBottom:'5px',
                                fontWeight: 'bold',
                            }}
                        >
                            {currentTherapist.Date}
                        </div>
                        <div className={classes.smallContent}>
                            at
                        </div>
                        <div
                            className={classes.smallContent} 
                            style={{
                                paddingTop:'5px',
                                paddingBottom:'5px',
                                fontWeight: 'bold',
                            }}
                        >
                            {currentTherapist.Time}
                        </div>
                    </div>
                    <div style={{
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:"end",
                        paddingTop: '20px'
                    }}>
                        <Button 
                            variant="contained" 
                            style={{
                                backgroundColor: '#0087E8',
                            }}
                            onClick={handleConfirm}
                        >
                            OK
                        </Button>
                    </div>
                </Box>
            </Modal>
            <div className = {classes.flexContainer}>
                <div className={classes.firstLine}>
                    Therapist Matched!
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
                            backgroundColor: '#FFB61D',
                            width: '100px',
                            marginRight: '20px'
                        }}
                        onClick={() => handleSwipe(2)}
                    >
                        Rematch
                    </Button>
                    <Button 
                        variant="contained" 
                        style={{
                            backgroundColor: '#0087E8',
                            width: '100px',
                            marginLeft: '20px'
                        }}
                        onClick={() => setOpen(true)}
                    >
                        Confirm
                    </Button>
                </div>
                <Button 
                    variant="contained" 
                    style={{
                        backgroundColor: '#E80000',
                        width: '100px',
                        marginTop: '10px'
                    }}
                    onClick={() => handleSwipe(0)}
                >
                    Cancel
                </Button>

            </div>
        </div>
    );
};

export default TherapyConfirmCard;