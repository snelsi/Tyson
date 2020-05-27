import { keySymbols } from "scripts/keySymbols";
import { keyWords } from "scripts/keyWords";
import { BaseLexema } from "interfaces/Interface";

const enAlphabetSmall = "abcdefghijklmnopqrstuvwxyz";
const enAlphabetBig = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabet = enAlphabetSmall + enAlphabetBig;

const isDigit = (c: string) => /\d/.test(c);

/* eslint-disable complexity */
export const getLexemas = (input: string): BaseLexema[] => {
  const dictionary: BaseLexema[] = [];

  let row = 1;
  let column = 1;

  for (let i = 0; i < input.length; i++, column++) {
    const char = input[i];
    if (char === " " || char === "\t" || char === "\r") {
      // just a whitespace, skip
      continue;
    } else if (char === "\n") {
      // new row, reset column counter
      column = 0;
      row++;
    } else if (char === "/" && input[i + 1] === "/") {
      // one line comment
      let next = 2;
      let nextchar = input[i + next];
      while (i + next < input.length && nextchar !== "\n") {
        nextchar = input[i + ++next];
      }
      i += next;
      column = 0;
      row++;
    }
    // Double Quote String
    else if (char === '"' || char === "'") {
      let next = 1;
      let word = char;
      let nextchar = input[i + next];
      while (i + next < input.length && nextchar !== char && nextchar !== "\n") {
        word += String(nextchar);
        nextchar = input[i + ++next];
        if (nextchar === "\n") {
          row++;
        }
      }
      if (nextchar === char) {
        word += char;
        dictionary.push({
          row,
          column,
          type: "string",
          details: "array of charachters",
          body: word,
        });
      } else {
        dictionary.push({
          row,
          column,
          type: "error",
          body: word + nextchar,
          details: `missing closing quote after [${row}, ${column}]'`,
        });
      }
      i += next;
      column += next;
    } else if (isDigit(char)) {
      // Number
      let next = 1;
      let word = `${char}`;
      let nextchar = input[i + next];
      while (i + next < input.length && isDigit(nextchar)) {
        word += `${nextchar}`;
        nextchar = input[i + ++next];
      }
      if (nextchar === ".") {
        // Float
        do {
          word += `${nextchar}`;
          nextchar = input[i + ++next];
        } while (i + next < input.length && isDigit(nextchar));
        if (alphabet.includes(nextchar)) {
          dictionary.push({
            row,
            column,
            type: "error",
            body: word + nextchar,
            details: `unexpected letter '${nextchar}' after float '${word}' in [${row}, ${column}]'`,
          });
          break;
        }
        dictionary.push({
          row,
          column,
          type: "number",
          details: "float",
          body: word,
        });
      } else if (alphabet.includes(nextchar)) {
        dictionary.push({
          row,
          column,
          type: "error",
          body: word + nextchar,
          details: `unexpected letter '${nextchar}' after integer '${word}' in [${row}, ${column}]'`,
        });
        break;
      } else {
        dictionary.push({
          row,
          column,
          type: "number",
          details: "integer",
          body: word,
        });
      }
      i += next - 1;
      column += next - 1;
    } else if (char === "." && isDigit(input[i + 1])) {
      // Float
      let next = 1;
      let word = ".";
      let nextchar = input[i + next];
      while (i + next < input.length && isDigit(nextchar)) {
        word += `${nextchar}`;
        nextchar = input[i + ++next];
      }
      if (alphabet.includes(nextchar)) {
        dictionary.push({
          row,
          column,
          type: "error",
          body: word + nextchar,
          details: `unexpected letter '${nextchar}' after float '${word}' in [${row}, ${column}]'`,
        });
        break;
      }

      dictionary.push({
        row,
        column,
        type: "number",
        details: "integer",
        body: word,
      });

      i += next - 1;
      column += next - 1;
    } else if (char === "_" || alphabet.includes(char)) {
      // Identiticator
      // starts with letter or symbol '_'
      // can contain letters, numbers and symbol '_'

      let next = 1;
      let word = char;
      let nextchar = input[i + next];
      while (nextchar === "_" || alphabet.includes(nextchar) || isDigit(nextchar)) {
        word += nextchar;
        next++;
        nextchar = input[i + next];
      }
      let isKey = false;

      for (let token of keyWords) {
        if (word === token.word) {
          isKey = true;
          dictionary.push({
            row,
            column,
            type: "keyword",
            id: token.id,
            body: token.word,
            details: token.details,
          });
          break;
        }
      }
      if (!isKey) {
        dictionary.push({
          row,
          column,
          type: "identificator",
          body: word,
        });
      }
      column += next - 1;
      i += next - 1;
    } else {
      if (i + 1 < input.length) {
        let isShortCut = false;
        const word = char + input[i + 1];
        for (let keysymbol of keySymbols) {
          if (word === keysymbol.symbol) {
            isShortCut = true;
            dictionary.push({
              row,
              column,
              type: "keysymbol",
              id: keysymbol.id,
              body: keysymbol.symbol,
              details: keysymbol.details,
            });
            break;
          }
        }
        if (isShortCut) {
          i++;
          column++;
          continue;
        }
      }

      let isKey = false;
      for (let keysymbol of keySymbols) {
        if (char === keysymbol.symbol) {
          isKey = true;
          dictionary.push({
            row,
            column,
            type: "keysymbol",
            id: keysymbol.id,
            body: keysymbol.symbol,
            details: keysymbol.details,
          });
          break;
        }
      }
      if (!isKey) {
        dictionary.push({
          row,
          column,
          type: "error",
          body: char,
          details: `unexpected symbol '${char} in [${row}, ${column}]'`,
        });
        break;
      }
    }
  }
  return dictionary;
};
