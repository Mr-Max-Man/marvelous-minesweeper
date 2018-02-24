// To play Minesweeper, we will create instances of MineSweeperGame in command line.
// For example:
// In the command line, navigate to the lib directory and run `node`
// Run `.load game.js` to load the contents of this file.
// Then create a Game instance and run commands like so:
// let game = new Game(3, 3, 3);
// game.playMove(0, 1);
// game.playMove(1, 2);
// When done run `.exit`

import{ Board } from './board';

class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  playMove(rowIndex, columnIndex){
    this._board.flipTile(rowIndex, columnIndex);
    console.log(this._board.hasSafeTiles());
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('The good news: you figured out where the bomb was!');
      console.log('The bad news: you unwittingly stepped on it, causing it to detonate.');
      console.log('G a m e  O v e r');
      this._board.print();
    } else if (this._board.hasSafeTiles()) {
      console.log('The good news: you figured out where all the bombs are!');
      console.log('The bad news: you cleared the entire minefield, and now must to create a new one.');
      console.log('G a m e  W i n ! ! !');
    } else {
      console.log('Current Board:');
      this._board.print();
    }
  };
}
