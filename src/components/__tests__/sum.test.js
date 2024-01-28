import { sum } from "../sum";
test("Sum function should calculate the sum of two numbers", () => {
  expect(sum(3, 4)).toBe(7);
});
test("1", () => {
  expect(sum(1, 3)).toBe(4);
});
