import { Log } from "./Log";
import { Token } from "interfaces/Interface";

const getValue = (ident: string) => 0;
const setValue = (ident: string, newValue: any) => {};

export const unarOperations = {
  log: Log,

  var: (lex: Token) => lex,
  let: (lex: Token) => lex,
  const: (lex: Token) => lex,

  "!": (lex: Token) => !lex,

  // pre increment
  PrI: (lex: string) => {
    const value = getValue(lex) + 1;
    setValue(lex, value);
    return value;
  },
  // pre decrement
  PrD: (lex: string) => {
    const value = getValue(lex) - 1;
    setValue(lex, value);
    return value;
  },

  // post increment
  PoI: (lex: string) => {
    const value = getValue(lex);
    setValue(lex, value + 1);
    return value;
  },
  // post decrement
  PoD: (lex: string) => {
    const value = getValue(lex);
    setValue(lex, value - 1);
    return value;
  },
};
