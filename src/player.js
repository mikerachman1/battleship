import { gameBoardFactory } from "./board.js";

class Player {
  constructor() {
    this.gameboard = gameBoardFactory();

    this.attack = (opponent, attackCoords) => { opponent.gameboard.receiveAttack(attackCoords); };
  }
}

export { Player };
