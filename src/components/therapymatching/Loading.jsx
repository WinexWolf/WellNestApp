import React from 'react';
//import { makeStyles } from '@mui/styles';
import { makeStyles } from "mui-styles";

// Define custom styles
const useStyles = makeStyles({
    container: {
        width: '100%',  // Adjust these values as needed
        height: '100%', // Adjust these values as needed
        overflow: 'hidden', // Prevents image overflow if necessary
      },
    rotating: {
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'cover', // 'contain' or 'cover' based on your need
        animation: '$rotate 3s linear infinite',
    },
    '@keyframes rotate': {
        from: {
            transform: 'rotate(0deg)',
        },
        to: {
            transform: 'rotate(360deg)',
        },
    },
});



const Loading = () => {
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <img 
                src={'/images/tm/Loading.png'}
                alt={'Loading'}
                className={classes.rotating} 
            />
        </div>
    );
};
  
export default Loading;
