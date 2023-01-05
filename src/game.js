/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable quotes */
import { Computer } from "./computer.js";
import { addListnersToComputerBoard, getPlayerShips, updateInfoBox } from "./domInteraction.js";
import { Player } from "./player.js";

const gameLoop = () => {
  const player = new Player();
  const computer = new Computer();

  const play = async () => {
    computer.randomPlacement();
    await getPlayerShips(player);
    updateInfoBox('Click a cell on the Enemies board to attack!');
    addListnersToComputerBoard(player, computer);
  };
  return { play };
};

export { gameLoop };
