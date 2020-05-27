import { parsePolish } from "scripts/Parser/polishParser";

test("Basic math operations", () => {
  expect(parsePolish([1, 2, "+"])).toStrictEqual([3]);
  expect(parsePolish([3, 1, "-"])).toStrictEqual([2]);
  expect(parsePolish([2, 3, "*"])).toStrictEqual([6]);
  expect(parsePolish([9, 3, "/"])).toStrictEqual([3]);
});

test("Complex equations", () => {
  expect(parsePolish([1, 2, "+", 4, "*", 3, "+"])).toStrictEqual([15]);
  expect(parsePolish([7, 2, 3, "*", "-"])).toStrictEqual([1]);
});

test("Throws error on invalid input", () => {
  expect(() => {
    parsePolish(["+"]);
  }).toThrow();
  expect(() => {
    parsePolish([1, "+"]);
  }).toThrow();
  expect(() => {
    // @ts-ignore
    parsePolish();
  }).toThrow();
});
