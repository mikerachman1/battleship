import { Player } from "./player.js";

class Computer extends Player {
  constructor() {
    super();

    this.randomInt = (maxVal) => Math.floor(Math.random() * maxVal);
  }

  randomPlacement(shipLength) {
    let randomCoords = [this.randomInt(10), this.randomInt(10)];
    let direction = this.randomInt(2) ? 'h' : 'v';
    const ship = this.gameboard.buildShip(shipLength);
    while (this.checkShipPlacement(ship, randomCoords, direction) === false) {
      randomCoords = [this.randomInt(10), this.randomInt(10)];
      direction = this.randomInt(2) ? 'h' : 'v';
    }
    this.gameboard.placePiece(ship, randomCoords, direction);
  }

  checkHitsAndMisses(attackCoords) {
    const hits = this.gameboard.hits;
    const misses = this.gameboard.misses;
    // use JSON stringify to search arrays for attackCoords
  }

  randomAttack(opponent) {
    let randomCoords = [this.randomInt(10), this.randomInt(10)];
    // check if attack is valid by seeing if it is in misses or hits arrays
    while ()
  }
}

export { Computer };

// const computer = new Computer;
// computer.randomPlacement(5);
// computer.randomPlacement(5);
// computer.randomPlacement(5);
// computer.randomPlacement(5);
// computer.randomPlacement(5);
// computer.randomPlacement(5);