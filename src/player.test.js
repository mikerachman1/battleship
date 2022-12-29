/* eslint-disable */

import { playerFactory } from "./player";

describe('when a player is created', () => {
  const player = playerFactory();

  test('the player has a gameboard', () => {
    expect(player.gameboard).toBeTruthy;
  });
});

describe('when a player attacks', () => {
  const player1 = playerFactory();
  const player2 = playerFactory();
  const smallShip = player2.gameboard.buildShip(2);
  player2.gameboard.placePiece(smallShip, [0, 0]);
  player1.attack(player2, [0, 0]);
  
  test('sends attack to opponents board', () => {
    expect(player2.gameboard.board[0][0]).toBe('X')
  });
});