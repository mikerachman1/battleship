/* eslint-disable */
import { shipFactory, hit, isSunk } from "./ship";

test('calling hit with ship returns new ship hit count', () => {
  let carrier = shipFactory(5);
  expect(carrier.hits).toBe(0);
  carrier.hits = hit(carrier);
  expect(carrier.hits).toBe(1);
});

test('calling isSunk returns true for hits === length', () => {
  let submarine = shipFactory(3, 3);
  submarine.isSunk = isSunk(submarine);
  expect(submarine.isSunk).toBe(true);
});

test('calling isSunk returns false for hits < length', () => {
  let submarine = shipFactory(3, 1);
  submarine.isSunk = isSunk(submarine);
  expect(submarine.isSunk).toBe(false);
});