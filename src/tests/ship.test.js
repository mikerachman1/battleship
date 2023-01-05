/* eslint-disable */
import { shipFactory } from "../ship";

describe('ship can take hit', () => {
  let carrier = shipFactory(5);

  test('calling hit with ship returns new ship hit count', () => {
    expect(carrier.hits).toBe(0);
    carrier.hit();
    expect(carrier.hits).toBe(1);
  });
});

describe('ships have isSunk function', () => {
  let submarine = shipFactory(3, 3);
  let destroyer = shipFactory(3, 1);

  test('calling isSunk returns true for hits === length', () => {
    submarine.isSunk()
    expect(submarine.sunk).toBe(true);
  });

  test('calling isSunk returns false for hits < length', () => {
    destroyer.isSunk()
    expect(destroyer.sunk).toBe(false);
  });
});