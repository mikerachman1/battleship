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

describe('adjacent attack', () => {
  const computer = new Computer;
  const player = new Player;
  
  it('returns an adjacent attack coord', () => {
    const initialAttack = [3, 3];
    const possibleNextAttacks = [[2,3], [3,2], [3,4], [4,3]]
    const nextAttack = computer.adjacentAttack(player, initialAttack);
    const nextAttackString = JSON.stringify(nextAttack);
    const possibleNextAttacksString = JSON.stringify(possibleNextAttacks);
    expect(possibleNextAttacksString.includes(nextAttackString)).toBe(true);
  });

  it('does not include off board coords', () => {
    const initialAttack = [9, 9];
    const possibleNextAttacks = [[10,9], [9,10]];
    const nextAttack = computer.adjacentAttack(player, initialAttack);
    const possibleNextAttacksString = JSON.stringify(possibleNextAttacks);
    const nextAttackString = JSON.stringify(nextAttack)
    console.log(nextAttack)
    expect(possibleNextAttacksString.includes(nextAttackString)).toBe(false);
  })

  it('attacks adjacent players board', () => {
    const initialAttack = [3, 3];
    const nextAttack = computer.adjacentAttack(player, initialAttack);
    const playerHitsAndMisses = player.gameboard.hits.concat(player.gameboard.misses);
    const handMString = JSON.stringify(playerHitsAndMisses);
    expect(handMString.includes(JSON.stringify(nextAttack))).toBe(true)
  })
})

