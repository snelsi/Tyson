import { TestLexema } from "interfaces/Interface";

export const testLexemas: { [name: string]: TestLexema } = {
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
  Set: {
    type: "operator",
    body: "=",
  },
  SetPlus: {
    type: "operator",
    body: "+=",
  },
  SetMinus: {
    type: "operator",
    body: "-=",
  },
  SetMultiply: {
    type: "operator",
    body: "*=",
  },
  SetDivide: {
    type: "operator",
    body: "/=",
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
