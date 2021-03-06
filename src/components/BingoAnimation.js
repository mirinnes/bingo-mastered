import React from 'react';
import './BingoAnimation.scss';
const BingoAnimation = () => {
  return (
    <svg
      width='400px'
      height='400px'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='350 50 1000 1000'
      className='container-animation'
    >
      <g id='structure'>
        <path
          class='cls-1'
          d='M1091.5,524c0,123.44-100.06,223.5-223.5,223.5S644.5,647.44,644.5,524,744.56,300.5,868,300.5l.5.5V207'
        />
        <path
          class='cls-1'
          d='M1119,524c0,138.62-112.38,251-251,251S617,662.62,617,524c0-108.23,68.5-200.46,164.52-235.7'
        />
        <path class='cls-1' d='M868,345A179,179,0,1,1,689,524' />
        <polyline
          class='cls-1'
          points='573.5 857.5 1162.5 857.5 1280.5 857.5 1218.5 812.5 1108.74 812.5'
        />
        <line class='cls-1' x1='511.5' y1='812.5' x2='455.5' y2='857.5' />
        <line class='cls-1' x1='868.5' y1='812.5' x2='511.5' y2='812.5' />
        <line class='cls-1' x1='608.5' y1='792.5' x2='674.5' y2='683.5' />
        <line class='cls-1' x1='1127.5' y1='792.5' x2='1061.5' y2='683.5' />
      </g>
      <g id='movement'>
        <path
          id='circle-0'
          class='cls-2'
          d='M1104.94,526.06C1104.94,656.92,998.86,763,868,763S631.06,656.92,631.06,526.06c0-123.42,94.37-224.8,214.88-235.92v0L846.47,190'
        />
        <circle id='circle-1' class='cls-2' cx='778.5' cy='606.5' r='43' />
        <circle id='circle-2' class='cls-2' cx='865.5' cy='649.5' r='43' />
        <circle id='circle-3' class='cls-2' cx='951.5' cy='606.5' r='43' />
        <circle id='circle-4' class='cls-2' cx='960.5' cy='515.5' r='43' />
        <circle id='circle-5' class='cls-2' cx='867.5' cy='554.5' r='43' />
        <circle id='circle-6' class='cls-2' cx='778.5' cy='511.5' r='43' />
      </g>
      <circle class='marker c1' r='9' fill='orange'></circle>
      <circle class='marker c2' r='9' fill='pink'></circle>
      <circle class='marker c3' r='9' fill='red'></circle>
      <circle class='marker c4' r='9' fill='blue'></circle>
    </svg>
  );
};

export default BingoAnimation;
