import React from 'react';
import BingoContext from './bingoContext';
import {
  initializeCard,
  cardTextGenerationCells,
  winnerCombinations,
  removeWinnerRow,
  doesUserWon,
} from './bingoFunctions';

export const BingoState = ({ children }) => {
  // Bingo Card Construction
  const centerInx = { x: 2, y: 2 };
  let card = initializeCard(centerInx);
  let cardContent = cardTextGenerationCells(card, centerInx);

  // Bingo state context
  const state = {
    card: cardContent,
    isWinner: false,
  };

  // Bingo winner data
  const winnerComb = winnerCombinations(cardContent, centerInx);
  console.log('las combinaciones para ganar son', winnerComb);

  // Bingo events handlers
  const handleOnClickCell = (cellText) => {
    const inx = card.findIndex((cell) => cell.cellText === cellText);
    state.card[inx].matched = !state.card[inx].matched;
    console.log('The card state is', state.card);
  };

  const updateWinner = () => {
    let winnerRow = undefined;
    let isWinner;
    winnerComb.forEach((element) => {
      let aux = doesUserWon(element);
      if (aux) {
        winnerRow = element;
        isWinner = true;
      }
    });
    if (isWinner) {
      state.isWinner = true;
      isWinner = !isWinner;
    } else {
      state.isWinner = false;
    }
    removeWinnerRow(winnerRow, winnerComb);
  };

  const getWinner = () => {
    return state.isWinner;
  };
  return (
    <BingoContext.Provider
      value={{ card: state.card, isWinner: state.isWinner, handleOnClickCell }}
    >
      {children}
    </BingoContext.Provider>
  );
};
