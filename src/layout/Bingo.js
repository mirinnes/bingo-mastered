import React, { useContext, useState } from 'react';
/* import Confetti from '../components/Confetti';*/
import GridItem from '../components/GridItem';
import bingoContext from '../context/bingoContext';
import './Bingo.scss';

function Bingo() {
  const { card, getWinner } = useContext(bingoContext);
  const [isWinner, setIsWinner] = useState(getWinner());
  console.log('Renderiza Bingo');

  /*global startConfetti*/
  if (isWinner) startConfetti();
  return (
    <>
      <div className='grid-container'>
        {card.map((cellContent, i) => {
          if (i === 0) {
            return (
              <div key={i} className='item-box' id='center'>
                <GridItem id='itemCenter' cellText={cellContent.cellText} />
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
