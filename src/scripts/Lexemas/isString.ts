import { lexemas } from "scripts/store";

const stringRegExp = /(^"((\\")|[^"\n])*)|(^'((\\')|[^'\n])*)/;

export const isString = () => {
  const input = lexemas.rest;
  const column = lexemas.column;
  const row = lexemas.row;

  const str = input.match(stringRegExp);

  if (str?.length > 0) {
    const word = `${str[0]}${input[str[0].length]}`;

    if (word[0] !== word[word.length - 1]) {
      lexemas.lexemas.push({
        row,
        column,
        type: "error",
        details: `missing closing quote after [${row}, ${column}]`,
        body: word,
      });

      throw new Error(`missing closing quote after [${row}, ${column}]`);
    } else {
      lexemas.lexemas.push({
        row,
        column,
        type: "string",
        details: "array of characters",
        body: word,
      });

      lexemas.rest = input.slice(word.length);
      lexemas.column += word.length;

      return true;
    }
  }

  return false;
};
