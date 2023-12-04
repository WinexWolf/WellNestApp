import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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
  const [modalText, setModalText] = useState('Empty Text - This should never be printed on modal!');
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <Card sx={{ marginBottom: 3, borderRadius: 2 }} className="pl-2 pr-2">
      <CardContent className="flex justify-center items-center">
        <div>
          <div className="text-16px text-center mr-4">
            <span className="font-semibold">{item}</span> only for <span className="font-semibold">{price} coins </span>
          </div>
        </div>

        <Button
          variant="contained"
          className="justify-center w-36"
          style={{ backgroundColor: "#0087E8" }}
          onClick={handleModalOpen}>
          REDEEM
        </Button>
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
    </Card>
  );
}