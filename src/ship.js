const shipFactory = (length, hits = 0, sunk = false) => ({ length, hits, sunk });

const hit = (ship) => ship.hits + 1;

const isSunk = (ship) => (ship.hits === ship.length);

export { shipFactory, hit, isSunk };
