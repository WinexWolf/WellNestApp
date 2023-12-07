import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { makeStyles } from "mui-styles";

const useStyles = makeStyles((theme) => ({
  customButton: {
    backgroundColor: '#0087E8',
    color: 'white',
    '&:disabled': {
      backgroundColor: theme.palette.action.disabledBackground,
      color: theme.palette.action.disabled,
    },
    width: '100%',
    zIndex: 20,
  },
  tooltip: {
    fontSize: '14px',
    width: '80%',
    textAlign: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0, // Make the overlay invisible
    cursor: 'pointer',
  },
}));

const boxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: 3,
  bgcolor: 'white',
  paddingTop: 2,
  paddingBottom: 1,
  paddingLeft: 2,
  paddingRight: 2
};

export default function RewardCard({ item, price, setCoins }) {
  const classes = useStyles();
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [modalText, setModalText] = useState('Empty Text - This should never be printed on modal!');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    const coins = getBalance('coins');
    if (coins < price) {
      // Not enough coins
      setIsTooltipOpen(true);
      // Automatically close the tooltip after 1000 milliseconds (1 second)
      setTimeout(() => {
        setIsTooltipOpen(false);
      }, 2000);
    } else {
      // Success redeem
      const newCoinsBalance = coins - price;
      setBalance('coins', newCoinsBalance);
      setCoins(newCoinsBalance);

      const newSessionsBalance = getBalance('sessions_balance') + 1;
      setBalance('sessions_balance', newSessionsBalance);
      setModalText(getSuccessRedeemMsg(newSessionsBalance));
      setIsModalOpen(true);
    }



    // setIsTooltipOpen(true);
    // // Automatically close the tooltip after 1000 milliseconds (1 second)
    // setTimeout(() => {
    //   setIsTooltipOpen(false);
    // }, 2000);
  };

  const handleTooltipClose = () => {
    setIsTooltipOpen(false);
  };

  // Get coins/sessions balance
  const getBalance = (balanceType) => {
    let balance = localStorage.getItem(balanceType);
    if (!balance) {
      balance = 0;
    } else {
      balance = parseInt(balance, 10);
    }
    return balance;
  }

  // Set coins/sessions balance
  const setBalance = (balanceType, balance) => localStorage.setItem(balanceType, balance.toString());

  // Get redeem message text
  const getSuccessRedeemMsg = (sessionsBalance) => `Great! You got one more therapy session for free!\nYour current balance: ${sessionsBalance} sessions to be used`;
  const getFailureRedeemMsg = (item) => `Oops! Coins not enough for ${item}. Try to earn more coins!`;

  const handleModalOpen = () => {
    const coins = getBalance('coins');
    if (coins < price) {
      // Not enough coins
      setModalText(getFailureRedeemMsg(item));
    } else {
      // Success redeem
      const newCoinsBalance = coins - price;
      setBalance('coins', newCoinsBalance);
      setCoins(newCoinsBalance);

      const newSessionsBalance = getBalance('sessions_balance') + 1;
      setBalance('sessions_balance', newSessionsBalance);
      setModalText(getSuccessRedeemMsg(newSessionsBalance));
    }
    setIsModalOpen(true);
  };

  const handleModalClose = () => setIsModalOpen(false);

  const isRedeemDisabled = getBalance('coins') < price;

  return (
    <Card sx={{ marginBottom: 3, borderRadius: 2 }} className="pl-2 pr-2 w-11/12">
      <CardContent className="flex justify-center items-center">
        <div>
          <div className="text-16px text-center mr-4">
            <span className="font-semibold">{item}</span> only for <span className="font-semibold">{price} coins </span>
          </div>
        </div>


        <div style={{ position: 'relative', display: 'inline-block' }}>
          <Button
            variant="contained"
            className={`${classes.customButton} justify-center w-36`}
            disabled={isRedeemDisabled}
            onClick={handleModalOpen}
          >
            REDEEM
          </Button>

          <Tooltip
            title={getFailureRedeemMsg(item)}
            open={isTooltipOpen}
            onClose={handleTooltipClose}
            classes={{ tooltip: classes.tooltip }}
          >
            <div
              className={classes.overlay}
              onClick={handleButtonClick}
              // role="button"
              tabIndex={0}
              aria-label="Show Tooltip"
            ></div>
          </Tooltip>
        </div>
        <Modal
          open={isModalOpen}
          onClose={handleModalClose}
          aria-describedby="redeem-status-modal-text"
        >
          <Box sx={boxStyle} className="flex flex-col w-60">
            <Typography id="redeem-status-modal-text">
              {modalText}
            </Typography>
            <div className="grid justify-items-end">
              <Button onClick={handleModalClose}>
                OK
              </Button>
            </div>
          </Box>
        </Modal>
      </CardContent>
    </Card >
  );
}