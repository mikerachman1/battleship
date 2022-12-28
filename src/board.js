// '' for empty space, O for ship, X for ship hit, - for missed hit

const gameBoardFactory = () => {
  let board = [...Array(10)].map(e => Array(10).fill(''));
  
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

  return { board, placePiece };
};



export { gameBoardFactory };

// const placePiece = (ship, startCoordinate, direction) => {
//   board[startCoordinate[0]][startCoordinate[1]] = 'O';
//   const shipLength = ship.length - 1;
//   if (direction === 'h') {
//     let shipLengthIncrementor = 0;
//     for (let i = 0; i < shipLength; i++) {
//       shipLengthIncrementor += 1
//       board[startCoordinate[0]][startCoordinate[1] + shipLengthIncrementor] = 'O';
//     }
//   } else {
//     let shipLengthIncrementor = 0;
//     for (let i = 0; i < shipLength; i++) {
//       shipLengthIncrementor += 1
//       board[startCoordinate[0] + shipLengthIncrementor][startCoordinate[1]] = 'O';
//     }
//   }
//  };