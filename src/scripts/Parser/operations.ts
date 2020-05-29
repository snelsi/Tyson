/* eslint-disable */
// @ts-nocheck
import { parser } from "scripts/store/parserStore";
import { Token } from "interfaces/Interface";

const fixStrings = (output: any) => {
  if (typeof output === "string") {
    return '"' + output + '"';
  }
  return output;
};

const Add = (num2: any, num1: any) => fixStrings(num1 + num2);
const Minus = (num2: any, num1: any) => num1 - num2;
const Multiply = (num2: number, num1: number) => num1 * num2;
const Divide = (num2: number, num1: number) => num1 / num2;
const Modul = (num2: number, num1: number) => num1 % num2;
const Power = (num2: number, num1: number) => num1 ** num2;

const And = (num2: number, num1: number) => num1 && num2;
const Or = (num2: number, num1: number) => num1 || num2;

const StrEqual = (num2: number, num1: number) => num1 === num2;
const StrNotEqual = (num2: number, num1: number) => num1 !== num2;

const Equal = (num2: number, num1: number) => num1 == num2;
const NotEqual = (num2: number, num1: number) => num1 != num2;

const Less = (num2: number, num1: number) => num1 < num2;
const LessThanEquals = (num2: number, num1: number) => num1 <= num2;
const More = (num2: number, num1: number) => num1 > num2;
const MoreThanEquals = (num2: number, num1: number) => num1 >= num2;

export const operations = {
  "+": Add,
  "-": Minus,
  "*": Multiply,
  "/": Divide,
  "%": Modul,
  "^": Power,

  "&&": And,
  "||": Or,

  "===": StrEqual,
  "!==": StrNotEqual,

  "==": Equal,
  "!=": NotEqual,

  "<": Less,
  "<=": LessThanEquals,
  ">": More,
  ">=": MoreThanEquals,
};

const Log = (expr: any) => {
  parser.pushLog(expr);
  console.log(expr);
};

export const unarOperations = {
  log: Log,

  "!": (lex: Token) => !lex,

  UPlus: (lex: Token) => +lex,
  UMinus: (lex: Token) => -lex,

  // pre increment
  PrI: (lex: string) => {
    // @ts-ignore
    const value = parser.variables.getVariable(lex) + 1;
    parser.variables.setVariable(lex, value);
    return value;
  },
  // pre decrement
  PrD: (lex: string) => {
    // @ts-ignore
    const value = parser.variables.getVariable(lex) - 1;
    parser.variables.setVariable(lex, value);
    return value;
  },

  // post increment
  PoI: (lex: string) => {
    const value = parser.variables.getVariable(lex);
    // @ts-ignore
    parser.variables.setVariable(lex, value + 1);
    return value;
  },
  // post decrement
  PoD: (lex: string) => {
    const value = parser.variables.getVariable(lex);
    // @ts-ignore
    parser.variables.setVariable(lex, value - 1);
    return value;
  },
};

const createVariable = (name: string) => parser.variables.createVariable(name, false);
const createConstVariable = (name: string) => parser.variables.createVariable(name, true);

export const declarations = {
  var: createVariable,
  let: createVariable,
  const: createConstVariable,
};

const setVariable = (value: any, name: string) => parser.variables.setVariable(name, value);
const setVariablePlus = (value: any, name: string) => {
  const cur = parser.variables.getVariable(name);
  parser.variables.setVariable(name, cur + value);
};
const setVariableMinus = (value: any, name: string) => {
  const cur = parser.variables.getVariable(name);
  parser.variables.setVariable(name, cur - value);
};
const setVariableMultiply = (value: any, name: string) => {
  const cur = parser.variables.getVariable(name);
  parser.variables.setVariable(name, cur * value);
};
const setVariableDivide = (value: any, name: string) => {
  const cur = parser.variables.getVariable(name);
  parser.variables.setVariable(name, cur / value);
};
const setVariableModulus = (value: any, name: string) => {
  const cur = parser.variables.getVariable(name);
  parser.variables.setVariable(name, cur % value);
};
const setVariablePower = (value: any, name: string) => {
  const cur = parser.variables.getVariable(name);
  parser.variables.setVariable(name, cur ** value);
};

export const assingments = {
  "=": setVariable,
  "+=": setVariablePlus,
  "-=": setVariableMinus,
  "*=": setVariableMultiply,
  "/=": setVariableDivide,
  "%=": setVariableModulus,
  "^=": setVariablePower,
};
