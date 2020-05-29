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

/**  (value, value) => value */
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

/** (value) => value */
export const unarValue = {
  "!": (value: Token) => !value,

  $UPlus: (value: Token) => +value,
  $UMinus: (value: Token) => -value,

  log: (value: any) => {
    parser.pushLog(value);
    console.log(value);
    return value;
  },
};

const createVariable = (name: string) => {
  parser.variables.createVariable(name, false);
  return name;
};
const createConstVariable = (name: string) => {
  parser.variables.createVariable(name, true);
  return name;
};

/** (variableName) => value */
export const unarName = {
  // pre increment
  PrI: (name: string) => {
    // @ts-ignore
    const value = parser.variables.getVariable(name) + 1;
    parser.variables.setVariable(name, value);
    return value;
  },
  // pre decrement
  PrD: (name: string) => {
    // @ts-ignore
    const value = parser.variables.getVariable(name) - 1;
    parser.variables.setVariable(name, value);
    return value;
  },

  // post increment
  PoI: (name: string) => {
    const value = parser.variables.getVariable(name);
    // @ts-ignore
    parser.variables.setVariable(name, value + 1);
    return value;
  },
  // post decrement
  PoD: (name: string) => {
    const value = parser.variables.getVariable(name);
    // @ts-ignore
    parser.variables.setVariable(name, value - 1);
    return value;
  },

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

/** (value, variableName) => void */
export const assingments = {
  "=": setVariable,
  "+=": setVariablePlus,
  "-=": setVariableMinus,
  "*=": setVariableMultiply,
  "/=": setVariableDivide,
  "%=": setVariableModulus,
  "^=": setVariablePower,
};
