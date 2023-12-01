import React from 'react';
import SwipeableContainer from '../../components/therapymatching/SwipableContainer'; // Adjust the path as per your file structure

const MatchingMainPage = () => {
  return (
    <SwipeableContainer>
      <div style={{ backgroundColor: 'lightblue', height: '100%'}}>Card 1</div>
      <div style={{ backgroundColor: 'lightgreen', height: '100%'}}>Card 2</div>
      <div style={{ backgroundColor: 'lightcoral', height: '100%'}}>Card 3</div>
      {/* Add more cards as needed */}
    </SwipeableContainer>
  );
};

export default MatchingMainPage;