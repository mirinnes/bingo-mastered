import React from 'react';
import { useState } from 'react';
import './Grid.scss';

function GridItem() {
  const initialState = { x: 0, y: 0 };
  const [displaySquare, setdisplaySquare] = useState(false);
  const [squarePos, setsquarePos] = useState(initialState);

  const handleOnClickContainer = (e) => {
    setdisplaySquare(!displaySquare);
    setsquarePos({
      x: e.pageX - e.target.offsetLeft - 25,
      y: e.pageY - e.target.offsetTop - 25,
    });
  };
  return (
    <div className='container' onClick={(e) => handleOnClickContainer(e)}>
      <div
        className={`square ${displaySquare ? '' : 'not-display'}`}
        style={{ left: squarePos.x, top: squarePos.y }}
      ></div>
    </div>
  );
}

export default GridItem;
