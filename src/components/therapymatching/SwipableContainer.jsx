import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import { makeStyles } from '@mui/styles';
import Button from "@mui/material/Button";

// Define custom styles
const useStyles = makeStyles({
    cardContainer: {
        width: '60%',
        height: '80%',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: '20px',
      },
    card: {
        '&&': {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            transition: 'transform 0.5s ease-in-out', // Ensures smooth transition
            transform: 'translateX(100%)', // Initial position off-screen
        },
       
    },
    buttonContainer: {
        textAlign: 'center', // Center the buttons
    },
});

const SwipeableContainer = ({ children }) => {
    const classes = useStyles();
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState([true, true, true]);

    const handleSwipe = (idx) => {
        setVisibleCards(prevState => {
            for (let i = 0; i < prevState.length; i++) {
                if (i === idx || i === activeCardIndex) {
                    prevState[i] = true;
                } else {
                    prevState[i] = false;
                }
            }
            return prevState;
        })
        setActiveCardIndex(idx);
    };

    return (
        <div 
            className="flex flex-col justify-around items-center" 
            style={{height: '100%'}}
        >
            <div className={classes.cardContainer}>
                {React.Children.map(children, (child, index) => {
                    let transformValue;
                    if (index === activeCardIndex) {
                        transformValue = 'translateX(0)';
                    } else if (index < activeCardIndex) {
                        transformValue = `translateX(-100%)`;
                    } else {
                        transformValue = `translateX(100%)`;
                    }

                    return (
                        <Card
                            className={classes.card}
                            style={{
                                transform: transformValue,
                                zIndex: index === activeCardIndex ? 1 : 0,
                                visibility: visibleCards[index] ? 'visible' : 'hidden',
                            }}
                        >
                            {child}
                        </Card>
                    );
                })}
            </div>

            <div className={classes.buttonContainer}>
                <Button variant="contained" onClick={() => handleSwipe(0)}>
                    to1
                </Button>
                <Button variant="contained" onClick={() => handleSwipe(1)}>
                    to2
                </Button>
                <Button variant="contained" onClick={() => handleSwipe(2)}>
                    to3
                </Button>
            </div>
        </div>
    );
};
  

export default SwipeableContainer;
