/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */

import { shipFactory } from './ship.js';

const gameBoardFactory = () => {
  const board = [...Array(10)].map(() => Array(10).fill(''));
  const misses = [];
  const hits = [];
  const results = [];
  const ships = [];

  const getShipName = (shipIndex) => {
    const shipNames = ['Carrier', 'Battleship', 'Destroyer', 'Submarine', 'Patrol Boat'];
    return shipNames[shipIndex];
  };

  const buildShip = (length) => shipFactory(length);

  const placePiece = (ship, startCoordinate, direction = 'h') => {
    board[startCoordinate[0]][startCoordinate[1]] = 'O';
    const shipLength = ship.length - 1;
    let shipLengthIncrementor = 0;
    const shipCoords = [startCoordinate];
    for (let i = 0; i < shipLength; i += 1) {
      shipLengthIncrementor += 1;
      let nextCoord = '';
      if (direction === 'h') {
        nextCoord = [startCoordinate[0], (startCoordinate[1] + shipLengthIncrementor)];
      } else if (direction === 'v') {
        nextCoord = [startCoordinate[0] + shipLengthIncrementor, startCoordinate[1]];
      }
      board[nextCoord[0]][nextCoord[1]] = 'O';
      shipCoords.push(nextCoord);
    }
    ships.push({ object: ship, coords: shipCoords });
    return shipCoords;
  };

  const receiveAttack = (attackCoordinate) => {
    if (board[attackCoordinate[0]][attackCoordinate[1]] !== 'O') {
      misses.push(attackCoordinate);
      board[attackCoordinate[0]][attackCoordinate[1]] = '-';
      results.push('-');
    } else if (board[attackCoordinate[0]][attackCoordinate[1]] === 'O') {
      ships.forEach((ship) => {
        ship.coords.forEach((coord) => {
          const coordString = JSON.stringify(coord);
          if (coordString.includes(JSON.stringify(attackCoordinate))) {
            ship.object.hit();
            ship.object.isSunk();
            board[attackCoordinate[0]][attackCoordinate[1]] = 'X';
            hits.push(attackCoordinate);
            results.push('X');
          }
        });
      });
    }
  };

  const allSunk = () => {
    if (ships.length === 0) { return false; }
    const sunkLog = [];
    ships.forEach((ship) => {
      sunkLog.push(ship.object.sunk);
    });
    return !sunkLog.includes(false);
  };

  return {
    board, misses, hits, results, ships, getShipName, buildShip, placePiece, receiveAttack, allSunk,
  };
};

export { gameBoardFactory };
