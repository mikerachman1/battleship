/* eslint-disable no-unused-expressions */
const displayShips = (ships, name) => {
  ships.forEach((ship) => {
    ship.coords.forEach((shipCoord) => {
      const row = shipCoord[0];
      const col = shipCoord[1];
      const coordBox = document.querySelector(`.${name}-grid :nth-child(${row + 1}) :nth-child(${col + 1})`);
      coordBox.classList.add('ship');
    });
  });
};

const displayPlayerShip = (shipCoords) => {
  shipCoords.forEach((coord) => {
    const row = coord[0];
    const col = coord[1];
    const coordBox = document.querySelector(`.player-grid :nth-child(${row + 1}) :nth-child(${col + 1})`);
    coordBox.classList.add('ship');
    coordBox.classList.remove('hover');
  });
};

const updateInfoBox = (text) => {
  const infoBoxText = document.querySelector('.info-text');
  infoBoxText.textContent = text;
};

const addNewGameButton = () => {
  const newGameButton = document.createElement('button');
  newGameButton.innerHTML = 'Start New Game';
  newGameButton.className = 'new-game';
  document.querySelector('.info-box').appendChild(newGameButton);
  newGameButton.addEventListener('click', () => { window.location.reload(); });
};

const toggleRotateShip = () => {
  const rotateDirectionText = document.querySelector('.rotate-direction');
  (rotateDirectionText.textContent === 'Horizontal') ? rotateDirectionText.textContent = 'Vertical' : rotateDirectionText.textContent = 'Horizontal';
};

const getDirectionValue = () => {
  let direction;
  const rotateDirectionText = document.querySelector('.rotate-direction');
  rotateDirectionText.textContent === 'Horizontal' ? direction = 'h' : direction = 'v';
  return direction;
};

const addRotateShipListener = () => {
  const rotateButton = document.querySelector('.rotate-ship');
  rotateButton.addEventListener('click', () => { toggleRotateShip(); });
};

const calcHoverShip = (length, grid, row, col, rowNum, colNum) => {
  const elements = [col];
  const direction = getDirectionValue();
  if (direction === 'h') {
    for (let i = 1; i < length; i += 1) {
      if (colNum + i < 10) { elements.push(row.childNodes[colNum + i]); }
    }
  } else {
    for (let i = 1; i < length; i += 1) {
      if (rowNum + i < 10) { elements.push(grid.childNodes[rowNum + i].childNodes[colNum]); }
    }
  }
  return elements;
};

const enableGridHover = (grid, shipLength) => {
  grid.childNodes.forEach((row, i) => {
    row.childNodes.forEach((col, j) => {
      col.addEventListener('mouseover', () => {
        const elements = calcHoverShip(shipLength, grid, row, col, i, j);
        elements.forEach((el) => {
          el.classList.add('hover');
        });
      });
      col.addEventListener('mouseleave', () => {
        const elements = calcHoverShip(shipLength, grid, row, col, i, j);
        elements.forEach((el) => {
          el.classList.remove('hover');
        });
      });
    });
  });
};

const resetPlayerBoard = () => {
  const board = document.querySelector('.player-board');
  const finalBoard = board.cloneNode(true);
  board.parentNode.replaceChild(finalBoard, board);
};

const placePlayerShip = (player, shipLength) => {
  const grid = document.querySelector('.player-grid');
  const ship = player.gameboard.buildShip(shipLength);

  updateInfoBox('Click on your board to place your ship');
  enableGridHover(grid, shipLength);

  return new Promise((resolve) => {
    grid.childNodes.forEach((row, i) => {
      row.childNodes.forEach((col, j) => {
        col.addEventListener('click', () => {
          const direction = getDirectionValue();
          if (player.checkShipPlacement(ship, [i, j], direction)) {
            const shipCoords = player.gameboard.placePiece(ship, [i, j], direction);
            displayPlayerShip(shipCoords);
            resetPlayerBoard();
            resolve();
          }
        });
      });
    });
  });
};

const getPlayerShips = async (player) => {
  addRotateShipListener();
  await placePlayerShip(player, 5);
  await placePlayerShip(player, 4);
  await placePlayerShip(player, 3);
  await placePlayerShip(player, 3);
  await placePlayerShip(player, 2);
  document.querySelector('.rotate-container').remove();
  updateInfoBox('Click a cell on the Enemies board to attack!');
};

// eslint-disable-next-line max-len
const checkEndGame = (player, computer) => (player.gameboard.allSunk() || computer.gameboard.allSunk());

const determineWinner = (player) => {
  if (player.gameboard.allSunk()) { return 'You Lost!!!'; }
  return 'You Won!!!';
};

const updateGameGrid = (gameboard, name, coords) => {
  const gameboardCell = gameboard[coords[0]][coords[1]];
  const gridCell = document.querySelector(`.${name}-grid :nth-child(${coords[0] + 1}) :nth-child(${coords[1] + 1})`);
  if (gameboardCell === 'X') { gridCell.innerHTML = 'X'; }
  if (gameboardCell === '-') { gridCell.innerHTML = 'O'; }
  gridCell.style.pointerEvents = 'none';
  return gridCell.innerHTML;
};

const displayEnemyShipIfSunk = (computerShips) => {
  computerShips.forEach((ship) => {
    if (ship.object.sunk) {
      ship.coords.forEach((shipCoord) => {
        const row = shipCoord[0];
        const col = shipCoord[1];
        const coordBox = document.querySelector(`.computer-grid :nth-child(${row + 1}) :nth-child(${col + 1})`);
        coordBox.classList.add('ship');
      });
    }
  });
};

const makeCellsNotClickable = () => {
  const computerGridCells = document.querySelectorAll('.computer-grid .col');
  for (let i = 0; i < computerGridCells.length; i += 1) {
    computerGridCells[i].style.pointerEvents = 'none';
  }
};

const findShipIndex = (player, searchCoords) => {
  let index;
  const playerShips = player.gameboard.ships;
  playerShips.forEach((ship, i) => {
    ship.coords.forEach((coord) => {
      const coordString = JSON.stringify(coord);
      if (coordString.includes(JSON.stringify(searchCoords))) {
        index = i;
      }
    });
  });
  return index;
};

const updateEnemyAttackInfo = (player, computerAttackCoords, compAttackResult) => {
  if (compAttackResult === 'X') {
    const shipIndex = findShipIndex(player, computerAttackCoords);
    if (player.gameboard.ships[shipIndex].object.sunk) {
      updateInfoBox(`The enemy sunk your ${player.gameboard.getShipName(shipIndex)}!`);
    } else {
      updateInfoBox(`The enemy hit your ${player.gameboard.getShipName(shipIndex)}!`);
    }
  } else { updateInfoBox('The enemy missed their shot!'); }
};

const playRound = (cell, player, computer) => {
  const row = cell.parentNode;
  const rowIndex = Array.from(row.parentNode.children).indexOf(row);
  const colIndex = Array.from(cell.parentNode.children).indexOf(cell);
  const playerCoords = [rowIndex, colIndex];

  player.attack(computer, [rowIndex, colIndex]);
  updateGameGrid(computer.gameboard.board, 'computer', playerCoords);
  displayEnemyShipIfSunk(computer.gameboard.ships);

  const computerCoords = computer.randomAttack(player);
  const compAttackResult = updateGameGrid(player.gameboard.board, 'player', computerCoords);
  updateEnemyAttackInfo(player, computerCoords, compAttackResult);

  if (checkEndGame(player, computer)) {
    updateInfoBox(determineWinner(player));
    displayShips(computer.gameboard.ships, 'computer');
    makeCellsNotClickable();
    addNewGameButton();
  }
};

const addListnersToComputerBoard = (player, computer) => {
  const references = [];
  const computerGridCells = document.querySelectorAll('.computer-grid .col');
  computerGridCells.forEach((cell) => {
    const myReference = () => playRound(cell, player, computer);
    cell.addEventListener('click', myReference);
    references.push(myReference);
    cell.addEventListener('mouseover', () => { cell.classList.add('hover'); });
    cell.addEventListener('mouseleave', () => { cell.classList.remove('hover'); });
  });
  return references;
};

export { displayShips, updateInfoBox, addListnersToComputerBoard, getPlayerShips };
