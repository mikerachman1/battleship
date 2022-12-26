import { shipFactory, hit } from "./ship";

test('calling hit passing ship as param changes ships hit count', () => {
  const carrier = shipFactory(5);
  hit(carrier);
  expect(carrier.hits).toBe(1);
  hit(carrier);
  expect(carrier.hits).toBe(2);
});