const shipFactory = (length, hits = 0, sunk = false) => {
  return { length, hits, sunk };
}

const carrier = shipFactory(5);

console.log(carrier)