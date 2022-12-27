// '' for empty space, O for ship, X for ship hit, - for missed hit

const gameBoardFactory = () => {
  let board = [...Array(10)].map(e => Array(10).fill(''));
  
  const placePiece = (ship, startCoordinate, direction) => {
    const shipLength = ship.length - 1;
    board[startCoordinate[0]][startCoordinate[1]] = 'O';
    if (direction === 'h') {
      let shipLengthIncrementor = 0;
      for (let i = 0; i < shipLength; i++) {
        shipLengthIncrementor += 1
        board[startCoordinate[0]][startCoordinate[1] + shipLengthIncrementor] = 'O';
      }
    } else {
      let shipLengthIncrementor = 0;
      for (let i = 0; i < shipLength; i++) {
        shipLengthIncrementor += 1
        board[startCoordinate[0] + shipLengthIncrementor][startCoordinate[1]] = 'O';
      }
    }
  };

  return { board, placePiece };
};



export { gameBoardFactory };
