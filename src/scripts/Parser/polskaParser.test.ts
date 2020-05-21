import { parsePolskaNotation } from "scripts/Parser/polskaParser";

test("Basic math operations", () => {
  expect(parsePolskaNotation([1, 2, "+"])).toBe(3);
  expect(parsePolskaNotation([3, 1, "-"])).toBe(2);
  expect(parsePolskaNotation([2, 3, "*"])).toBe(6);
  expect(parsePolskaNotation([9, 3, "/"])).toBe(3);
});

test("Complex equations", () => {
  expect(parsePolskaNotation([1, 2, "+", 4, "*", 3, "+"])).toBe(15);
  expect(parsePolskaNotation([7, 2, 3, "*", "-"])).toBe(1);
});

test("Throws error on invalid input", () => {
  expect(() => {
    parsePolskaNotation([1, 2]);
  }).toThrow();
  expect(() => {
    parsePolskaNotation(["+"]);
  }).toThrow();
  expect(() => {
    parsePolskaNotation([1, "+"]);
  }).toThrow();
  expect(() => {
    parsePolskaNotation([]);
  }).toThrow();
  expect(() => {
    // @ts-ignore
    parsePolskaNotation();
  }).toThrow();
});
