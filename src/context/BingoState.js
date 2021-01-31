import React from 'react';
import BingoContext from './bingoContext';
import {
  initializeCard,
  cardTextGenerationCells,
  winnerCombinations,
  removeWinnerRow,
  doesUserWon,
  randomPhrase,
} from './bingoFunctions';

export const BingoState = ({ children }) => {
  // Bingo Card Construction
  const centerInx = { x: 2, y: 2 };
  let card = initializeCard(centerInx);
  let cardContent = cardTextGenerationCells(card, centerInx);

  // Bingo winner data
  // (winnerComb is created by copy of cardContent, the anchor to the memory is the same
  // i.e: represents the same object - what happens to cardContent' objects will affect winner's)
  let winnerComb = winnerCombinations(cardContent, centerInx);

  // Bingo state context
  const state = {
    card: cardContent,
    winner: winnerComb,
    isWinner: false,
  };

  // Bingo events handlers
  const handleOnClickCell = (cellText) => {
    let inx = state.card.findIndex((cell) => cell.cellText === cellText);
    state.card[inx].matched = !state.card[inx].matched;
    checkWinner();
  };

  const checkWinner = () => {
    let winnerRow = undefined;
    let isWinner;
    state.winner.forEach((arr) => {
      let userWon = doesUserWon(arr);
      if (userWon) {
        winnerRow = arr;
        isWinner = true;
      }
    });
    if (isWinner) {
      console.log('Is winner!');
      state.isWinner = true;
      state.winner = removeWinnerRow(winnerRow, state.winner);
      isWinner = !isWinner;
    } else {
      state.isWinner = false;
    }
  };

  const getWinner = () => {
    return state.isWinner;
  };

  const getRandomPhrase = () => {
    return randomPhrase();
  };

  return (
    <BingoContext.Provider
      value={{
        card: state.card,
        isWinner: state.isWinner,
        handleOnClickCell,
        getWinner,
        getRandomPhrase,
      }}
    >
      {children}
    </BingoContext.Provider>
  );
};
