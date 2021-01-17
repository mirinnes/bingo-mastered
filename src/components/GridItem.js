import React, { useState, useContext } from 'react';
import bingoContext from '../context/bingoContext';
import './GridItem.scss';

const makeRipple = (e, matched) => {
  // - modularizar - //
  if (!matched) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';

    e.target.appendChild(ripples);
    // - - - //
  }
};

function GridItem({ cellText, id, isMatched }) {
  const [matched, setMatched] = useState(false);
  const { handleOnClickCell } = useContext(bingoContext);

  const handleOnClickContainer = (e) => {
    handleOnClickCell(cellText);
    setMatched(!matched);
    makeRipple(e, matched);
  };
  return (
    <button
      id={id}
      className={`container ${id === 'itemCenter' ? 'center' : ''} ${
        matched ? 'matched' : ''
      }`}
      onClick={id === 'itemCenter' ? null : (e) => handleOnClickContainer(e)}
    >
      {cellText}
    </button>
  );
}

export default GridItem;
