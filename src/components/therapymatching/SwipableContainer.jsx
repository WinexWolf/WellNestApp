import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import { makeStyles } from '@mui/styles';
import Button from "@mui/material/Button";
import LoadingCard from './LoadingCard';
import TherapyConfirmCard from './TherapyConfirmCard';

// Define custom styles
const useStyles = makeStyles({
    cardContainer: {
        width: '90%',
        flexGrow: 1,
        position: 'relative',
        overflow: 'hidden'
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
    const [visibleCards, setVisibleCards] = useState([true, true, true, true, true]);

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
            style={{flexGrow: 1, width: '100%'}}
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
                    let clonedChild;

                    // Clone the child and wrap it inside the Card component
                    if (
                        child.type === LoadingCard ||
                        child.type === TherapyConfirmCard
                    ) {
                        // clonedChild = <LoadingCard handleSwipe={handleSwipe} active={index === activeCardIndex}/>;
                        clonedChild = React.cloneElement(child, { 
                            handleSwipe,
                            active: index === activeCardIndex
                        });
                    } else {
                        clonedChild = React.cloneElement(child, { handleSwipe });
                    }
                    // const clonedChild = React.cloneElement(child, { 
                    //     handleSwipe
                    // });

                    return (
                        <Card
                            className={classes.card}
                            style={{
                                transform: transformValue,
                                zIndex: index === activeCardIndex ? 1 : 0,
                                visibility: visibleCards[index] ? 'visible' : 'hidden',
                            }}
                        >
                            {clonedChild}
                        </Card>
                    );
                })}
            </div>

            {/* <div className={classes.buttonContainer}>
                <Button variant="contained" onClick={() => handleSwipe(0)}>
                    to1
                </Button>
                <Button variant="contained" onClick={() => handleSwipe(1)}>
                    to2
                </Button>
                <Button variant="contained" onClick={() => handleSwipe(2)}>
                    to3
                </Button>
                <Button variant="contained" onClick={() => handleSwipe(3)}>
                    to4
                </Button>
                <Button variant="contained" onClick={() => handleSwipe(4)}>
                    to5
                </Button>
            </div> */}
        </div>
    );
};
  

export default SwipeableContainer;
