/* eslint-disable */

import { gameLoop } from "../game";
import { shipFactory } from "../ship";


describe('game creates a player and a computer', () => {
  const newGame = gameLoop();

  it('has a player', () => {
    expect(newGame.player).toHaveProperty('gameboard');
  });

  it('has a computer', () => {
    expect(newGame.computer).toHaveProperty('gameboard');
  });
});

describe('game sets pieces on board', () => {
  const newGame = gameLoop();
  newGame.play();

  it('has computer pieces set', () => {
    expect(newGame.computer.gameboard.ships.length).toBe(5);
  });

  it('has players pieces set', () => {
    expect(newGame.player.gameboard.ships.length).toBe(5);
  });
})

describe('checkEndGame', () => {
  const newGame = gameLoop();
  
  it('returns false if ships arent all sunk', () => {
    expect(newGame.checkEndGame()).toBe(false);
  })

  it('returns true if all players ships are sunk', () => {
    const ship = shipFactory(3, 3, true);
    newGame.player.gameboard.placePiece(ship, [0, 0], 'h');
    expect(newGame.checkEndGame()).toBe(true);
  });
});

