import { toPolish } from "scripts/ToPolish/toPolish";
import { testLexemas } from "interfaces/testLexemas";
import { Lexema } from "interfaces/Interface";

const {
  Num1,
  Num2,
  Num3,
  Plus,
  Minus,
  Multiply,
  Divide,
  Assign,
  AssignPlus,
  AssignMinus,
  AssignMultiply,
  AssignDivide,
  AssignPower,
  Semicolon,
  OpenCircleBracket,
  CloseCircleBracket,
  And,
  Or,
} = testLexemas;

const NumPlus: Lexema = { type: "Expression", body: [Num1, Plus, Num2] };
const NumMinus: Lexema = { type: "Expression", body: [Num1, Minus, Num2] };
const NumMultiply: Lexema = { type: "Expression", body: [Num1, Multiply, Num2] };
const NumDivide: Lexema = { type: "Expression", body: [Num1, Divide, Num2] };

test("Basic math operations", () => {
  expect(toPolish(NumPlus)).toStrictEqual([1, 2, "+"]);
  expect(toPolish(NumMinus)).toStrictEqual([1, 2, "-"]);
  expect(toPolish(NumMultiply)).toStrictEqual([1, 2, "*"]);
  expect(toPolish(NumDivide)).toStrictEqual([1, 2, "/"]);
});

const AssignEx: Lexema = { type: "Expression", body: [Num1, Assign, Num2] };
const AssignPlusEx: Lexema = { type: "Expression", body: [Num1, AssignPlus, Num2] };
const AssignMinusEx: Lexema = { type: "Expression", body: [Num1, AssignMinus, Num2] };
const AssignMultiplyEx: Lexema = { type: "Expression", body: [Num1, AssignMultiply, Num2] };
const AssignDivideEx: Lexema = { type: "Expression", body: [Num1, AssignDivide, Num2] };
const AssignPowerEx: Lexema = { type: "Expression", body: [Num1, AssignPower, Num2] };

test("Basic set operations", () => {
  expect(toPolish(AssignEx)).toStrictEqual([1, 2, "="]);
  expect(toPolish(AssignPlusEx)).toStrictEqual([1, 2, "+="]);
  expect(toPolish(AssignMinusEx)).toStrictEqual([1, 2, "-="]);
  expect(toPolish(AssignMultiplyEx)).toStrictEqual([1, 2, "*="]);
  expect(toPolish(AssignDivideEx)).toStrictEqual([1, 2, "/="]);
  expect(toPolish(AssignPowerEx)).toStrictEqual([1, 2, "^="]);
});

const Example1: Lexema = { type: "Expression", body: [Num1, Plus, Num2, Multiply, Num3] };
const Example2: Lexema = { type: "Expression", body: [Num1, Divide, Num2, Multiply, Num3] };
const Example3: Lexema = { type: "Expression", body: [Num3, Multiply, Num2, Plus, Num1] };

test("Complex math operations", () => {
  expect(toPolish(Example1)).toStrictEqual([1, 2, 3, "*", "+"]);
  expect(toPolish(Example2)).toStrictEqual([1, 2, "/", 3, "*"]);
  expect(toPolish(Example3)).toStrictEqual([3, 2, "*", 1, "+"]);
});

const Brackets: Lexema = {
  type: "Expression",
  body: [OpenCircleBracket, Num1, Plus, Num2, CloseCircleBracket, Multiply, Num3],
};

test("Brackets", () => {
  expect(toPolish(Brackets)).toStrictEqual([1, 2, "+", 3, "*"]);
});

const Example4: Lexema = {
  type: "Expression",
  body: [Num1, Plus, Num2, Multiply, Num3, Semicolon, Num1, Divide, Num2, Multiply, Num3],
};
const Example5: Lexema = {
  type: "Expression",
  body: [Num1, AssignMinus, Num2, Semicolon, Num3, AssignDivide, Num2],
};

test("Multiple operations", () => {
  expect(toPolish(Example4)).toStrictEqual([1, 2, 3, "*", "+", 1, 2, "/", 3, "*"]);
  expect(toPolish(Example5)).toStrictEqual([1, 2, "-=", 3, 2, "/="]);
});

const AndLogic: Lexema = {
  type: "Expression",
  body: [Num1, And, Num2],
};
const OrLogic: Lexema = {
  type: "Expression",
  body: [Num1, Or, Num2],
};

test("Logic", () => {
  expect(toPolish(AndLogic)).toStrictEqual([1, 2, "&&"]);
  expect(toPolish(OrLogic)).toStrictEqual([1, 2, "||"]);
});
