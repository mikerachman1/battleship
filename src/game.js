import { Computer } from "./computer.js";
import { addListnersToComputerBoard, displayShips, updateInfoBox } from "./domInteraction.js";
import { Player } from "./player.js";

const gameLoop = () => {
  const player = new Player();
  const computer = new Computer();

  const play = () => {
    computer.randomPlacement();
    // to be replaced by user actually placing ships through UI
    player.gameboard.placePiece(player.gameboard.buildShip(5), [0, 0], 'h');
    player.gameboard.placePiece(player.gameboard.buildShip(4), [0, 9], 'v');
    player.gameboard.placePiece(player.gameboard.buildShip(3), [3, 0], 'v');
    player.gameboard.placePiece(player.gameboard.buildShip(3), [3, 3], 'v');
    player.gameboard.placePiece(player.gameboard.buildShip(2), [7, 5], 'h');

    displayShips(player.gameboard.ships, 'player');
    updateInfoBox('Click a cell on the Enemies board to attack!')
    addListnersToComputerBoard(player, computer);
  };
  return { player, computer, play };
};

export { gameLoop };

// const newgame = gameLoop();
// newgame.play();