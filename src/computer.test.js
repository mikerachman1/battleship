/* eslint-disable */

import { Computer } from "./computer";
import { Player } from "./player";

describe('the computer places ships randomly', () => {
  const computer = new Computer;
  
  test('ship is placed on board', () => {
    computer.randomPlacement(5);
    expect(computer.gameboard.ships.length).toBe(1);
  });
});

describe('the computer makes random attacks', () => {

});

