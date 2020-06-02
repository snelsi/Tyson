import {
  isOneLineComment,
  isMultiLineComment,
  isString,
  isNumber,
  isKeysymbol,
  isIdentifierOrKeyword,
} from "scripts/Lexemas";

const operations = [
  isOneLineComment,
  isMultiLineComment,
  isString,
  isNumber,
  isKeysymbol,
  isIdentifierOrKeyword,
];

export const isLexema = () => {
  for (let check of operations) {
    if (check()) {
      return true;
    }
  }

  return false;
};
