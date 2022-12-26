/* eslint-disable */
import { shipFactory, hit } from "./ship";

test('calling hit with ship returns new ship hit count', () => {
  let carrier = shipFactory(5);
  expect(carrier.hits).toBe(0);
  carrier.hits = hit(carrier);
  expect(carrier.hits).toBe(1);
});