/* eslint-disable */

import { Computer } from "../computer";
import { Player } from "../player";

describe('the computer places ships randomly', () => {
  const computer = new Computer;
  
  test('ship is placed on board', () => {
    computer.randomPlacement();
    expect(computer.gameboard.ships.length).toBe(5);
  });
});

describe('the computer makes random attacks', () => {
  const computer = new Computer;
  const player = new Player;
  const attackCoords = computer.randomAttack(player);
  test('attack is logged on players board', () => {
    expect(player.gameboard.board[attackCoords[0]][attackCoords[1]]).toBe('-')
  })
});
