// display both boards

// methods to render gameboards

// methods to take user input for attacking, let user click on enemy board
const displayUserShips = (playerShips) => {
  playerShips.forEach((ship) => {
    ship.coords.forEach((shipCoord) => {
      const row = shipCoord[0];
      const col = shipCoord[1];
      const coordBox = document.querySelector(`.player-grid :nth-child(${row + 1}) :nth-child(${col + 1})`);
      coordBox.classList.add('ship');
    });
  });
};

const updateInfoBox = (text) => {
  const infoBoxText = document.querySelector('.info-text');
  infoBoxText.textContent = text;
};

const checkEndGame = (player, computer) => (player.gameboard.allSunk() || computer.gameboard.allSunk());

const updateGameGrid = (gameboard, name, coords) => {
  const gameboardCell = gameboard[coords[0]][coords[1]];
  const gridCell = document.querySelector(`.${name}-grid :nth-child(${coords[0] + 1}) :nth-child(${coords[1] + 1})`);
  if (gameboardCell === 'X') { gridCell.innerHTML = 'X'; }
  if (gameboardCell === '-') { gridCell.innerHTML = '/'; }
};

const playRound = (cell, player, computer) => {
  const row = cell.parentNode;
  const rowIndex = Array.from(row.parentNode.children).indexOf(row);
  const colIndex = Array.from(cell.parentNode.children).indexOf(cell);
  const playerCoords = [rowIndex, colIndex];

  console.log(playerCoords)
  console.log(computer.gameboard.board[rowIndex][colIndex])
  
  player.attack(computer, [rowIndex, colIndex]);
  updateGameGrid(computer.gameboard.board, 'computer', playerCoords);

  const computerCoords = computer.randomAttack(player);
  updateGameGrid(player.gameboard.board, 'player', computerCoords);

  if (checkEndGame(player, computer)) { return updateInfoBox('GAME OVER'); }
};

const addListnersToComputerBoard = (player, computer) => {
  const computerGridCells = document.querySelectorAll('.computer-grid .col');
  computerGridCells.forEach((cell) => {
    cell.addEventListener('click', () => { playRound(cell, player, computer); });
  });
};

export { displayUserShips, updateInfoBox, addListnersToComputerBoard, updateGameGrid };
