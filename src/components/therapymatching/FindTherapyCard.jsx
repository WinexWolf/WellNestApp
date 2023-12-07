import React from 'react';
// import { makeStyles } from '@mui/styles';
import { makeStyles } from "mui-styles";
import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

// Define custom styles
const useStyles = makeStyles({
    background: {
        backgroundColor: 'rgba(129, 200, 251, 0.15)',
        borderRadius: '20px',
        marginTop: '40px',
        height: '90%',
    },

    flexContainer: {
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
    modelStyle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '20px',
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
    const [open, setOpen] = React.useState(false);

    // Set coins/sessions balance
    const setLocal = (balanceType, balance) => localStorage.setItem(balanceType, balance.toString());

    const getLocal = (balanceType) => {
        let balance = localStorage.getItem(balanceType);
        if (!balance || balance < 0) {
            balance = 0;
            setLocal(balanceType, balance)
        } else {
            balance = parseInt(balance, 10);
        }
        return balance;
    }

    const handleButtonClick = () => {
        var balance = getLocal('sessions_balance');
        if (balance > 0) {
            handleSwipe(1);
        } else {
            setOpen(true);
        }
    }
    return (
        <div className={classes.background}>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.modelStyle}>
                    <div style={{ textAlign: 'center' }}>
                        <div className={classes.smallContent}>
                            You have insufficient sessions balance.
                        </div>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "end",
                        paddingTop: '20px'
                    }}>
                        <Button
                            variant="contained"
                            style={{
                                backgroundColor: '#0087E8',
                            }}
                            onClick={() => setOpen(false)}
                        >
                            Ok
                        </Button>
                    </div>
                </Box>
            </Modal>
            <div className={classes.flexContainer}>
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
                    style={{ backgroundColor: "#0087E8" }}
                    onClick={() => {
                        handleButtonClick();
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