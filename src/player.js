import { gameBoardFactory } from "./board.js";

class Player {
  constructor() {
    this.gameboard = gameBoardFactory();

    this.attack = (opponent, attackCoords) => { opponent.gameboard.receiveAttack(attackCoords); };
  }

  checkShipPlacement(ship, startCoordinate, direction) {
    const gameBoard = this.gameboard.board;
    if (startCoordinate[0] > 9 || startCoordinate[1] > 9 || gameBoard[startCoordinate[0]][startCoordinate[1]] !== '') { return false; }
    const shipLength = ship.length - 1;
    let shipLengthIncrementor = 0;
    for (let i = 0; i < shipLength; i += 1) {
      shipLengthIncrementor += 1;
      let nextCoord = '';
      if (direction === 'h') {
        nextCoord = [startCoordinate[0], (startCoordinate[1] + shipLengthIncrementor)];
      } else if (direction === 'v') {
        nextCoord = [startCoordinate[0] + shipLengthIncrementor, startCoordinate[1]];
      }
      if (nextCoord[0] > 9 || nextCoord[1] > 9 || gameBoard[nextCoord[0]][nextCoord[1]] !== '') { return false; }
    }
    return true;
  }
}

export { Player };
