import { toPolska } from "scripts/Parser/toPolska";
import { getAnchor, getGoTo } from "scripts/Parser/helpers";
import { testLexemas } from "interfaces/testLexemas";

const {
  Num1,
  Num2,
  Num3,
  Plus,
  Minus,
  Multiply,
  Divide,
  Set,
  SetPlus,
  SetMinus,
  SetMultiply,
  SetDivide,
  Semicolon,
  OpenBracket,
  CloseBracket,
  Else,
  Or,
  And,
  OpenCircleBracket,
  CloseCircleBracket,
  If,
} = testLexemas;

const Anchor1 = getAnchor(1);
const Anchor2 = getAnchor(2);
const Anchor3 = getAnchor(3);

const FCGoTo1 = getGoTo("conditional", 1);
const FCGoTo2 = getGoTo("conditional", 2);
const FCGoTo3 = getGoTo("conditional", 3);

const GoTo1 = getGoTo("unconditional", 1);
const GoTo2 = getGoTo("unconditional", 2);
const GoTo3 = getGoTo("unconditional", 3);

test("Basic math operations", () => {
  expect(toPolska([Num1, Plus, Num2])).toStrictEqual([Num1, Num2, Plus]);
  expect(toPolska([Num1, Minus, Num2])).toStrictEqual([Num1, Num2, Minus]);
  expect(toPolska([Num1, Multiply, Num2])).toStrictEqual([Num1, Num2, Multiply]);
  expect(toPolska([Num1, Divide, Num2])).toStrictEqual([Num1, Num2, Divide]);
});

test("Basic set operations", () => {
  expect(toPolska([Num1, Set, Num2])).toStrictEqual([Num1, Num2, Set]);
  expect(toPolska([Num1, SetPlus, Num2])).toStrictEqual([Num1, Num2, SetPlus]);
  expect(toPolska([Num1, SetMinus, Num2])).toStrictEqual([Num1, Num2, SetMinus]);
  expect(toPolska([Num1, SetMultiply, Num2])).toStrictEqual([Num1, Num2, SetMultiply]);
  expect(toPolska([Num1, SetDivide, Num2])).toStrictEqual([Num1, Num2, SetDivide]);
});

test("Complex math operations", () => {
  expect(toPolska([Num1, Plus, Num2, Multiply, Num3])).toStrictEqual([
    Num1,
    Num2,
    Num3,
    Multiply,
    Plus,
  ]);
  expect(toPolska([Num1, Divide, Num2, Multiply, Num3])).toStrictEqual([
    Num1,
    Num2,
    Divide,
    Num3,
    Multiply,
  ]);
  expect(toPolska([Num3, Multiply, Num2, Plus, Num1])).toStrictEqual([
    Num3,
    Num2,
    Multiply,
    Num1,
    Plus,
  ]);
});

test("Brackets", () => {
  expect(
    toPolska([OpenCircleBracket, Num1, Plus, Num2, CloseCircleBracket, Multiply, Num3]),
  ).toStrictEqual([Num1, Num2, Plus, Num3, Multiply]);
});

test("Multiple operations", () => {
  expect(
    toPolska([Num1, Plus, Num2, Multiply, Num3, Semicolon, Num1, Divide, Num2, Multiply, Num3]),
  ).toStrictEqual([Num1, Num2, Num3, Multiply, Plus, Num1, Num2, Divide, Num3, Multiply]);
  expect(toPolska([Num1, SetMinus, Num2, Semicolon, Num3, SetDivide, Num2])).toStrictEqual([
    Num1,
    Num2,
    SetMinus,
    Num3,
    Num2,
    SetDivide,
  ]);
});

test("Logic", () => {
  expect(toPolska([Num1, And, Num2])).toStrictEqual([Num1, Num2, And]);
});

test("Conditional If", () => {
  expect(
    // if (1;) 2; 3;
    // 1 FC1 2 #1 3
    toPolska([
      If,
      OpenCircleBracket,
      Num1,
      Semicolon,
      CloseCircleBracket,
      Num2,
      Semicolon,
      Num3,
      Semicolon,
    ]),
  ).toStrictEqual([Num1, FCGoTo1, Num2, Anchor1, Num3]);
  expect(
    // if (1) {2;} else if (2) {3;}
    // 1 FC1 2 UC2 #1 2 FC2 3 #2
    toPolska([
      If,
      OpenCircleBracket,
      Num1,
      CloseCircleBracket,
      OpenBracket,
      Num2,
      Semicolon,
      CloseBracket,
      Else,
      If,
      OpenCircleBracket,
      Num2,
      CloseCircleBracket,
      OpenBracket,
      Num3,
      Semicolon,
      CloseBracket,
    ]),
  ).toStrictEqual([Num1, FCGoTo1, Num2, GoTo2, Anchor1, Num2, FCGoTo3, Num3, Anchor2, Anchor3]);
  expect(
    // if (1) {2;} else if (2) {3;} else if (3) {1;}
    // 1 FC1 2 UC2 #1 2 FC3 3 UC2 #3 3 FC2 1 #2
    toPolska([
      If,
      OpenCircleBracket,
      Num1,
      CloseCircleBracket,
      OpenBracket,
      Num2,
      Semicolon,
      CloseBracket,
      Else,
      If,
      OpenCircleBracket,
      Num2,
      CloseCircleBracket,
      OpenBracket,
      Num3,
      Semicolon,
      CloseBracket,
    ]),
  ).toStrictEqual([Num1, FCGoTo1, Num2, GoTo2, Anchor1, Num2, FCGoTo3, Num3, Anchor2, Anchor3]);
});
