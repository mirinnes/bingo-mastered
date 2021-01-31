import React, { useContext, useState } from 'react';
/* import Confetti from '../components/Confetti';*/
import GridItem from '../components/GridItem';
import bingoContext from '../context/bingoContext';
import Play from './Play.js';

import './Bingo.scss';

function Bingo() {
  const { card, getWinner } = useContext(bingoContext);
  const [isWinner, setIsWinner] = useState(getWinner());
  const [display, setdisplay] = useState(false);

  /*global startConfetti*/
  if (isWinner) startConfetti();

  const handleOnClickCenter = () => {
    setdisplay(!display);
  };

  return (
    <>
      <Play display={display} onClickLayout={handleOnClickCenter} />

      <div className='grid-container'>
        {card.map((cellContent, i) => {
          if (i === 0) {
            return (
              <div key={i} className='item-box' id='center'>
                <GridItem
                  id='itemCenter'
                  cellText={cellContent.cellText}
                  onClickCenter={handleOnClickCenter}
                />
              </div>
            );
          } else {
            let idItem = 'item' + i;
            return (
              <div key={i} className='item-box' id={idItem}>
                <GridItem
                  id={idItem}
                  cellText={cellContent.cellText}
                  setIsWinner={setIsWinner}
                />
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default Bingo;
