/* eslint-disable */

import { gameBoardFactory } from "../board";
import { shipFactory } from "../ship";

describe('gameBoardFactory can buiild ships', () => {
  const newBoard = gameBoardFactory();
  const newShip = newBoard.buildShip(5)

  test('ship is built', () => {
    expect(newShip.length).toBe(5);
  });
});

describe('placePiece function', () => {
  let newBoard = gameBoardFactory();
  const patrolBoat = shipFactory(2);
  const carrier = shipFactory(5);

  newBoard.placePiece(patrolBoat, [0,0], 'h');
  newBoard.placePiece(carrier, [3,3], 'v');

  test('placePiece puts small piece on board horizontally', () => {
    expect(newBoard.board[0][0]).toBe('O');
    expect(newBoard.board[0][1]).toBe('O');
  });

  test('placePiece puts large piece on board vertically', () => {
    expect(newBoard.board[3][3]).toBe('O');
    expect(newBoard.board[4][3]).toBe('O');
    expect(newBoard.board[7][3]).toBe('O');
    expect(newBoard.board[3][4]).toBe('');
    expect(newBoard.board[8][3]).toBe('');
  });

  test('placePiece adds ship and coords to ships array of gameboard', () => {
    expect(newBoard.ships[0]).toStrictEqual({ object: patrolBoat, coords: [[0,0],[0,1]]})
  });
});

describe('recieveAttack function', () => {
  let newBoard = gameBoardFactory();
  const carrier = shipFactory(5);
  newBoard.placePiece(carrier, [3,3], 'v');
  const carrier2 = shipFactory(5, 4);
  newBoard.placePiece(carrier2, [3,6], 'v');
  
  test('calling receiveAttack with a miss records the missed coords and marks board', () => {
    newBoard.receiveAttack([0, 0]);
    expect(newBoard.misses[0]).toStrictEqual([0, 0]);
    expect(newBoard.board[0][0]).toBe('-')
  });

  test('calling receiveAttack with a hit sends hit function to ship', () => {
    newBoard.receiveAttack([4, 3]);
    expect(carrier.hits).toBe(1);
    expect(newBoard.board[4][3]).toBe('X')
    expect(newBoard.hits).toStrictEqual([[4,3]])
  });

  test('recieveAttack calls isSunk on ships', () => {
    newBoard.receiveAttack([3, 6]);
    expect(carrier2.sunk).toBe(true);
  });
});

describe('allSunk function', () => {
  let newBoard = gameBoardFactory();
  const carrier = shipFactory(5, 4);
  newBoard.placePiece(carrier, [3,3], 'v');

  test('allSunk function returns false if not all ships are sunk', () => {
    expect(newBoard.allSunk()).toBe(false);
  });

  test('allSunk function returns true if all ships are sunk', () => {
    newBoard.receiveAttack([3,3]);
    expect(newBoard.allSunk()).toBe(true);
  });
});