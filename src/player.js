import { gameBoardFactory } from "./board.js";

const playerFactory = () => {
  const gameboard = gameBoardFactory();

  const attack = (opponent, attackCoords) => { opponent.gameboard.receiveAttack(attackCoords); };
 
  return { gameboard, attack }
};

export { playerFactory };
