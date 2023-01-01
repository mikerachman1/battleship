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

const getPlayerAttack = (cell) => {
  const row = cell.parentNode;
  const rowIndex = Array.from(row.parentNode.children).indexOf(row);
  const colIndex = Array.from(cell.parentNode.children).indexOf(cell);
  return [rowIndex, colIndex];
};

const addListnersToComputerBoard = () => {
  const computerGridCells = document.querySelectorAll('.computer-grid .col');
  computerGridCells.forEach((cell) => {
    cell.addEventListener('click', () => { getPlayerAttack(cell); });
  });
};

const updateGameGrid = (gameboard, name) => {
  gameboard.forEach((row) => {
    const rowIndex = gameboard.indexOf(row);
    row.forEach((col) => {
      const colIndex = row.indexOf(col);
      const gridCell = document.querySelector(`.${name}-grid :nth-child(${rowIndex + 1}) :nth-child(${colIndex + 1})`);
      if (col === 'X') { gridCell.innerHTML = 'X'; }
      if (col === '-') { gridCell.innerHTML = '/'; }
    });
  });
};

export { displayUserShips, updateInfoBox, addListnersToComputerBoard, updateGameGrid };
