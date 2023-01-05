/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import { Player } from './player.js';

class Computer extends Player {
  constructor() {
    super();
    this.hitsAndMisses = (opponent) => opponent.gameboard.hits.concat(opponent.gameboard.misses);
    this.randomInt = (maxVal) => Math.floor(Math.random() * maxVal);
    this.checkValidAttack = (opponent, attackCoords) => {
      const hitsAndMisses = this.hitsAndMisses(opponent);
      return !JSON.stringify(hitsAndMisses).includes(JSON.stringify(attackCoords));
    };
  }

  randomPlacement() {
    this.pieces.forEach((piece) => {
      let randomCoords = [this.randomInt(10), this.randomInt(10)];
      let direction = this.randomInt(2) ? 'h' : 'v';
      const ship = this.gameboard.buildShip(piece);
      while (this.checkShipPlacement(ship, randomCoords, direction) === false) {
        randomCoords = [this.randomInt(10), this.randomInt(10)];
        direction = this.randomInt(2) ? 'h' : 'v';
      }
      this.gameboard.placePiece(ship, randomCoords, direction);
    });
  }

  randomAttack(opponent) {
    let randomCoords = [this.randomInt(10), this.randomInt(10)];
    while (this.checkValidAttack(opponent, randomCoords) === false) {
      randomCoords = [this.randomInt(10), this.randomInt(10)];
    }
    this.attack(opponent, randomCoords);
    return randomCoords;
  }

  adjacentAttack(opponent, previousHit) {
    const possibleNextAttacks = [];
    const onBoardAttacks = [];
    possibleNextAttacks.push([previousHit[0] + 1, previousHit[1]]);
    possibleNextAttacks.push([previousHit[0] - 1, previousHit[1]]);
    possibleNextAttacks.push([previousHit[0], previousHit[1] + 1]);
    possibleNextAttacks.push([previousHit[0], previousHit[1] - 1]);
    possibleNextAttacks.forEach((coord) => {
      if (coord[0] < 10 && coord[1] < 10) { onBoardAttacks.push(coord); }
    });
    const nextAttack = onBoardAttacks[this.randomInt(onBoardAttacks.length)];
    if (this.checkValidAttack(opponent, nextAttack) === true) {
      this.attack(opponent, nextAttack);
      return nextAttack;
    }
    return this.randomAttack(opponent);
  }
}

export { Computer };
