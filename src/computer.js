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

  checkValidAttack(opponent, attackCoords) {
    const hitsAndMisses = opponent.gameboard.hits.concat(opponent.gameboard.misses);
    return !JSON.stringify(hitsAndMisses).includes(JSON.stringify(attackCoords));
  }

  // randomAttack(opponent) {
  //   let randomCoords = [this.randomInt(10), this.randomInt(10)];
  //   // check if attack is valid by seeing if it is in misses or hits arrays
  //   while ()
  // }
}

export { Computer };

// const computer = new Computer;
// const p1 = new Player;
// p1.gameboard.placePiece(p1.gameboard.buildShip(2), [0, 0], 'h');
// computer.attack(p1, [0,0]);
// computer.attack(p1, [0,1]);

// console.log(computer.checkValidAttack(p1, [0,0]));
// console.log(computer.checkValidAttack(p1, [0,1]));
// console.log(computer.checkValidAttack(p1, [1,0]));
// console.log(computer.checkValidAttack(p1, [5,3]));