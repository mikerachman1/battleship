// '' for empty space, O for ship, X for ship hit, - for missed hit

const gameBoardFactory = () => {
  let board = [...Array(10)].map(e => Array(10).fill(''));
  
  
  return { board };
};



export { gameBoardFactory };
