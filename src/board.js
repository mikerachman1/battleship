const gameBoardFactory = () => {
  let board = [...Array(10)].map(e => Array(10));
  return board;
}

export { gameBoardFactory };
