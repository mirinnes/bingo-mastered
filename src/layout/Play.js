import React, { useContext, useState } from 'react';
import BingoAnimation from '../components/BingoAnimation';
import bingoContext from '../context/bingoContext';

import './Play.scss';

export const Play = ({ display, onClickLayout }) => {
  const { getRandomPhrase } = useContext(bingoContext);
  const [displayText, setdisplayText] = useState(false);
  const handleOnClickCenter = () => {
    onClickLayout();
    setdisplayText(!displayText);
  };

  let phrase = getRandomPhrase();
  return (
    <div className={`overlay ${display ? 'display' : ''}`}>
      <div className='overlay-container'>
        <h1 onClick={() => handleOnClickCenter()}>{phrase}</h1>

        <BingoAnimation />
      </div>
    </div>
  );
};

export default Play;
