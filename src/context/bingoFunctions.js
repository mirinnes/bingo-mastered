import { cellTexts, arr } from './bingoData';

export const initializeCard = ({ x, y }) => {
  let cardInit = [
    {
      row: x,
      col: y,
      isCenter: true,
      cellText: 'Press Me!',
    },
  ];
  return cardInit;
};

export const cardTextGenerationCells = (card, { x, y }) => {
  let i = 0;
  let j = 0;
  // Random indexes for phrase order
  arr.forEach((randomInx) => {
    if (j === 5) {
      i++;
      j = 0;
    }
    // Check if it is NOT the center cell
    if ((i === x && j !== y) || (i !== x && j !== y) || (i !== x && j === y)) {
      let itemContent = {
        row: i,
        col: j,
        isCenter: false,
        matched: false,
        cellText: cellTexts[randomInx],
      };
      card.push(itemContent);
      j++;
    } else {
      // When it is the center cell it should move one cell forward
      j++;
      let itemContent = {
        row: i,
        col: j,
        isCenter: false,
        matched: false,
        cellText: cellTexts[randomInx],
      };
      card.push(itemContent);
      j++;
    }
  });
  return card;
};

// Winner
export const winnerCombinations = (card, { x, y }) => {
  // Bingo diagonals
  let diagonalsLeft = card
    .filter((e) => e.col === e.row && e.col + e.row !== x + y)
    .flat();
  let diagonalsRight = card
    .filter((e) => e.col + e.row === 4 && e.col !== e.row)
    .flat();
  // Bingo columns
  let col1 = card.filter((e) => e.col === 0).flat();
  let col2 = card.filter((e) => e.col === 1).flat();
  let col3 = card.filter((e) => e.col === 2 && e.row !== 2).flat();
  let col4 = card.filter((e) => e.col === 3).flat();
  let col5 = card.filter((e) => e.col === 4).flat();
  // Bingo rows
  let row1 = card.filter((e) => e.row === 0).flat();
  let row2 = card.filter((e) => e.row === 1).flat();
  let row3 = card.filter((e) => e.row === 2 && e.col !== 2).flat();
  let row4 = card.filter((e) => e.row === 3).flat();
  let row5 = card.filter((e) => e.row === 4).flat();
  // Bingo Winner:
  return [
    diagonalsRight,
    diagonalsLeft,
    row1,
    row2,
    row3,
    row4,
    row5,
    col1,
    col2,
    col3,
    col4,
    col5,
  ];
};

export const removeWinnerRow = (item, array) => {
  let i = array.indexOf(item);
  if (i !== -1) {
    array.splice(i, 1);
  }
};

export const doesUserWon = (arr) => {
  let userWon;
  let result = arr.filter((item) => item.matched !== true);
  if (result.length) {
    userWon = false;
  } else {
    userWon = true;
  }
  return userWon;
};
