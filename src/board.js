// '' for empty space, O for ship, X for ship hit, - for missed hit

const gameBoardFactory = () => {
  let board = [...Array(10)].map(e => Array(10).fill(''));
  let misses = [];

  const placePiece = (ship, startCoordinate, direction) => {
    if (board[startCoordinate[0]][startCoordinate[1]] !== '') { return 'Error, this placement conflicts with another piece'; }
    board[startCoordinate[0]][startCoordinate[1]] = 'O';
    const shipLength = ship.length - 1;
    let shipLengthIncrementor = 0;
    for (let i = 0; i < shipLength; i++) {
      shipLengthIncrementor += 1;
      if (direction === 'h') {
        if (board[startCoordinate[0]][startCoordinate[1] + shipLengthIncrementor] !== '') { return 'Error, this placement conflicts with another piece'; }
        board[startCoordinate[0]][startCoordinate[1] + shipLengthIncrementor] = 'O';
      }
      if (direction === 'v') {
        if (board[startCoordinate[0] + shipLengthIncrementor][startCoordinate[1]] !== '') { return 'Error, this placement conflicts with another piece'; }
        board[startCoordinate[0] + shipLengthIncrementor][startCoordinate[1]] = 'O';
      }
    }
  };

  const receiveAttack = (attackCoordinate) => {
    if (board[attackCoordinate[0]][attackCoordinate[1]] !== 'O') {
      misses.push(attackCoordinate);
      board[attackCoordinate[0]][attackCoordinate[1]] = '-';
    }
  };

  return { board, misses, placePiece, receiveAttack };
};

export { gameBoardFactory };
