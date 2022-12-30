import { Player } from "./player.js";

class Computer extends Player {
  constructor() {
    super();

    this.randomInt = (maxVal) => Math.floor(Math.random() * maxVal);
    this.checkValidAttack = (opponent, attackCoords) => {
      const hitsAndMisses = opponent.gameboard.hits.concat(opponent.gameboard.misses);
      return !JSON.stringify(hitsAndMisses).includes(JSON.stringify(attackCoords));
    };
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

  randomAttack(opponent) {
    let randomCoords = [this.randomInt(10), this.randomInt(10)];
    while (this.checkValidAttack(opponent, randomCoords) === false) {
      randomCoords = [this.randomInt(10), this.randomInt(10)];
    }
    this.attack(opponent, randomCoords);
    return randomCoords;
  }
}

export { Computer };
