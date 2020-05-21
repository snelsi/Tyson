import { TestLexema } from "interfaces/Interface";

export const testLexemas = {
  Num1: {
    type: "number",
    body: "1",
  } as TestLexema,
  Num2: {
    type: "number",
    body: "2",
  } as TestLexema,
  Num3: {
    type: "number",
    body: "3",
  } as TestLexema,
  Plus: {
    type: "operator",
    body: "+",
  } as TestLexema,
  Minus: {
    type: "operator",
    body: "-",
  } as TestLexema,
  Multiply: {
    type: "operator",
    body: "*",
  } as TestLexema,
  Divide: {
    type: "operator",
    body: "/",
  } as TestLexema,
  Set: {
    type: "operator",
    body: "=",
  } as TestLexema,
  SetPlus: {
    type: "operator",
    body: "+=",
  } as TestLexema,
  SetMinus: {
    type: "operator",
    body: "-=",
  } as TestLexema,
  SetMultiply: {
    type: "operator",
    body: "*=",
  } as TestLexema,
  SetDivide: {
    type: "operator",
    body: "/=",
  } as TestLexema,
  Semicolon: {
    type: "keysymbol",
    body: ";",
  } as TestLexema,
  OpenCircleBracket: {
    type: "keysymbol",
    body: "(",
  } as TestLexema,
  CloseCircleBracket: {
    type: "keysymbol",
    body: ")",
  } as TestLexema,
  OpenBracket: {
    type: "keysymbol",
    body: "{",
  } as TestLexema,
  CloseBracket: {
    type: "keysymbol",
    body: "}",
  } as TestLexema,
  If: {
    type: "keyword",
    body: "if",
  } as TestLexema,
  Else: {
    type: "keyword",
    body: "else",
  } as TestLexema,
  And: {
    type: "keyword",
    body: "&&",
  } as TestLexema,
  Or: {
    type: "keyword",
    body: "||",
  } as TestLexema,
};
