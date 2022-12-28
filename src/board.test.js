/* eslint-disable */

import { gameBoardFactory } from "./board";
import { shipFactory } from "./ship";

test('gameBoardFactory creates 10x10 game grid array', () => {
  let newBoard = gameBoardFactory();
  expect(newBoard.board.length).toBe(10);
  expect(newBoard.board[0].length).toBe(10);
  expect(newBoard.board[9].length).toBe(10);
  expect(newBoard.board[0][0]).toBe('');
});

test('placePiece puts small piece on board horizontally', () => {
  let newBoard = gameBoardFactory();
  const patrolBoat = shipFactory(2);
  newBoard.placePiece(patrolBoat, [0,0], 'h');
  expect(newBoard.board[0][0]).toBe('O');
  expect(newBoard.board[0][1]).toBe('O');
});

test('placePiece puts large piece on board vertically', () => {
  let newBoard = gameBoardFactory();
  const carrier = shipFactory(5);
  newBoard.placePiece(carrier, [3,3], 'v');
  expect(newBoard.board[3][3]).toBe('O');
  expect(newBoard.board[4][3]).toBe('O');
  expect(newBoard.board[7][3]).toBe('O');
  expect(newBoard.board[3][4]).toBe('');
  expect(newBoard.board[8][3]).toBe('');
});

test('placePiece returns message if there is placing conflict', () => {
  let newBoard = gameBoardFactory();
  const carrier = shipFactory(5);
  newBoard.placePiece(carrier, [3,3], 'v');
  const cruiser = shipFactory(5);
  expect(newBoard.placePiece(cruiser, [3,3], 'v')).toBe('Error, this placement conflicts with another piece')
});
