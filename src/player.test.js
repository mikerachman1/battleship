/* eslint-disable */

import { Player } from "./player";

describe('when a player is created', () => {
  const player = new Player;

  test('the player has a gameboard', () => {
    expect(player.gameboard).toBeTruthy;
  });
});

describe('when a player attacks', () => {
  const player1 = new Player;
  const player2 = new Player;
  const smallShip = player2.gameboard.buildShip(2);
  player2.gameboard.placePiece(smallShip, [0, 0]);
  player1.attack(player2, [0, 0]);
  
  test('sends attack to opponents board', () => {
    expect(player2.gameboard.board[0][0]).toBe('X')
  });
});