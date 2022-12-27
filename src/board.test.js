/* eslint-disable */

import { gameBoardFactory } from "./board";

test('gameBoardFactory creates 10x10 game grid array', () => {
  let board = gameBoardFactory().board;
  expect(board.length).toBe(10);
  expect(board[0].length).toBe(10);
  expect(board[9].length).toBe(10);
  expect(board[0][0]).toBe('');
});

test('placePiece puts piece on board', () => {

});

