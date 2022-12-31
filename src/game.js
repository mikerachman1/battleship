import { Computer } from "./computer.js";
import { Player } from "./player.js";

const gameLoop = () => {
  const player = new Player();
  const computer = new Computer();

  const checkEndGame = () => (player.gameboard.allSunk() || computer.gameboard.allSunk());

  const changeTurn = (currentTurn) => (currentTurn ? 0 : 1);

  const play = () => {
    computer.randomPlacement();
    // to be replaced by user actually placing ships through UI
    player.gameboard.placePiece(player.gameboard.buildShip(5), [0, 0], 'h');
    player.gameboard.placePiece(player.gameboard.buildShip(4), [0, 9], 'v');
    player.gameboard.placePiece(player.gameboard.buildShip(3), [3, 0], 'v');
    player.gameboard.placePiece(player.gameboard.buildShip(3), [3, 3], 'v');
    player.gameboard.placePiece(player.gameboard.buildShip(2), [7, 5], 'h');
    // 0 = player, 1 = computer
    let turn = 1;
    while (checkEndGame() === false) {
      turn = changeTurn(turn);
      if (!turn) {
        // get user attack coords and attack
      } else {
        computer.randomAttack(player);
      }
    }
  };
  return { player, computer, play, checkEndGame, changeTurn };
};

export { gameLoop };

// const newgame = gameLoop();
// console.log(newgame.changeTurn(1))