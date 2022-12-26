const shipFactory = (length, hits = 0, sunk = false) => {
  return { length, hits, sunk };
};

const hit = (ship) => {
  ship.hits += 1
};

// const carrier = shipFactory(5);

// console.log(carrier.length)

export {shipFactory, hit}