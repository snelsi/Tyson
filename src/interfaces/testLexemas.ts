import { BaseLexema } from "interfaces/Interface";

export const testLexemas: { [name: string]: BaseLexema } = {
  Num1: {
    type: "number",
    body: "1",
  },
  Num2: {
    type: "number",
    body: "2",
  },
  Num3: {
    type: "number",
    body: "3",
  },
  Plus: {
    type: "operator",
    body: "+",
  },
  Minus: {
    type: "operator",
    body: "-",
  },
  Multiply: {
    type: "operator",
    body: "*",
  },
  Divide: {
    type: "operator",
    body: "/",
  },
  Assign: {
    type: "operator",
    body: "=",
  },
  AssignPlus: {
    type: "operator",
    body: "+=",
  },
  AssignMinus: {
    type: "operator",
    body: "-=",
  },
  AssignMultiply: {
    type: "operator",
    body: "*=",
  },
  AssignDivide: {
    type: "operator",
    body: "/=",
  },
  AssignPower: {
    type: "operator",
    body: "^=",
  },
  Semicolon: {
    type: "keysymbol",
    body: ";",
  },
  OpenCircleBracket: {
    type: "keysymbol",
    body: "(",
  },
  CloseCircleBracket: {
    type: "keysymbol",
    body: ")",
  },
  OpenBracket: {
    type: "keysymbol",
    body: "{",
  },
  CloseBracket: {
    type: "keysymbol",
    body: "}",
  },
  If: {
    type: "keyword",
    body: "if",
  },
  Else: {
    type: "keyword",
    body: "else",
  },
  And: {
    type: "keyword",
    body: "&&",
  },
  Or: {
    type: "keyword",
    body: "||",
  },
};
