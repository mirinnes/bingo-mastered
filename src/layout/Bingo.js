import React, { useContext } from 'react';
import GridItem from '../components/GridItem';
import bingoContext from '../context/bingoContext';

import './Bingo.scss';

function Bingo() {
  const { card } = useContext(bingoContext);
  return (
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
              <GridItem id={idItem} cellText={cellContent.cellText} />
            </div>
          );
        }
      })}
    </div>
  );
}

export default Bingo;
