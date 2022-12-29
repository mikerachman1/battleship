/* eslint-disable */

import { Player } from "./player";

describe('when a player is created', () => {
  const player = new Player;
  const ship1 = player.gameboard.buildShip(5)
  const ship2 = player.gameboard.buildShip(4);

  test('the player has a gameboard', () => {
    expect(player.gameboard).toBeTruthy;
  });

  test('checkShipPlacement returns true if valid placement', () => {
    expect(player.checkShipPlacement(ship1, [0, 0], 'v')).toBe(true);
  });

  test('checkShipPlacement returns false if not valid placement', () => {
    player.gameboard.placePiece(ship1, [0,0], 'v');
    expect(player.checkShipPlacement(ship2, [0,0], 'h')).toBe(false);
  })
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