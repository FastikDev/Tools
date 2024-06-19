import { sum, mult } from "../calculator";

it("should be a sum", () => {
  const calcSUm = sum(5, 5);

  expect(calcSUm).toEqual(10);
});

it("should be a mult", () => {
  const calcMult = mult(5, 5);

  expect(calcMult).toEqual(25);
});
