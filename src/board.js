// '' for empty space, O for ship, X for ship hit, - for missed hit
import { shipFactory, hit, isSunk } from "./ship.js";

const gameBoardFactory = () => {
  const board = [...Array(10)].map(() => Array(10).fill(''));
  const misses = [];
  const ships = [];

  const placePiece = (ship, startCoordinate, direction) => {
    const errorMsg = 'Error, this placement conflicts with another piece';
    if (board[startCoordinate[0]][startCoordinate[1]] !== '') { return errorMsg; }
    board[startCoordinate[0]][startCoordinate[1]] = 'O';
    const shipLength = ship.length - 1;
    let shipLengthIncrementor = 0;
    const shipCoords = [startCoordinate];
    for (let i = 0; i < shipLength; i++) {
      shipLengthIncrementor += 1;
      let nextCoord = '';
      if (direction === 'h') {
        nextCoord = [startCoordinate[0], (startCoordinate[1] + shipLengthIncrementor)];
      } else if (direction === 'v') {
        nextCoord = [startCoordinate[0] + shipLengthIncrementor, startCoordinate[1]];
      }
      if (board[nextCoord[0]][nextCoord[1]] !== '') { return errorMsg; }
      board[nextCoord[0]][nextCoord[1]] = 'O';
      shipCoords.push(nextCoord);
    }
    ships.push({ object: ship, coords: shipCoords });
  };

  const receiveAttack = (attackCoordinate) => {
    if (board[attackCoordinate[0]][attackCoordinate[1]] !== 'O') {
      misses.push(attackCoordinate);
      board[attackCoordinate[0]][attackCoordinate[1]] = '-';
    } else if (board[attackCoordinate[0]][attackCoordinate[1]] === 'O') {
      ships.forEach((ship) => {
        ship.coords.forEach((coord) => {
          if (coord.includes(attackCoordinate[0]) && coord.includes(attackCoordinate[1])) {
            ship.object.hits = hit(ship.object);
            board[attackCoordinate[0]][attackCoordinate[1]] = 'X';
          }
        });
      });
    }
  };

  return { board, misses, ships, placePiece, receiveAttack };
};

export { gameBoardFactory };

// let newBoard = gameBoardFactory();
// const carrier = shipFactory(5);
// newBoard.placePiece(carrier, [3,3], 'v');
// newBoard.receiveAttack([4, 3]);