import React, { useState, useContext } from 'react';
import bingoContext from '../context/bingoContext';
import './GridItem.scss';

const makeRipple = (e, matched) => {
  if (!matched) {
    if (navigator.userAgent.includes('Chrome')) {
      e.target.style.height = '85%';
      const containerX = e.target.offsetParent.getBoundingClientRect().left;
      const containerY = e.target.offsetParent.getBoundingClientRect().top;
      const buttonX = e.target.offsetLeft;
      const buttonY = e.target.offsetTop;
      let x = e.clientX - (containerX + buttonX);
      let y = e.clientY - (containerY + buttonY);

      let ripples = document.createElement('span');
      ripples.style.left = x + 'px';
      ripples.style.top = y + 'px';

      e.target.appendChild(ripples);
      // - - - //
    } else {
      e.target.style.height = '100px';
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;

      let ripples = document.createElement('span');
      ripples.style.left = x + 'px';
      ripples.style.top = y + 'px';
      e.target.appendChild(ripples);
      // - - - //
    }
  }
};

function GridItem({ cellText, id, isWinner, setIsWinner }) {
  const [matched, setMatched] = useState(false);
  const { handleOnClickCell, getWinner } = useContext(bingoContext);

  const handleOnClickContainer = (e) => {
    handleOnClickCell(cellText);
    setMatched(!matched);
    makeRipple(e, matched);
    setIsWinner(getWinner);
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
