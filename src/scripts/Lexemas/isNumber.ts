import { lexemas } from "scripts/store";

/**
 * number+              ||
 * number+ . number*    ||
 * . number+
 */
const numberRegExp = /^((\d+\.\d*)|(\.\d+)|\d+)/;

export const isNumber = () => {
  const column = lexemas.column;
  const row = lexemas.row;
  const code = lexemas.rest;

  let num = code.match(numberRegExp);

  if (num?.length > 0) {
    const length = num[0].length;
    if (code[length] === "a") {
      lexemas.lexemas.push({
        row,
        column,
        type: "error",
        details: `unexpected letter '${code[length]}' after number '${code}'`,
        body: code.slice(length + 1),
      });
      return false;
    } else {
      lexemas.lexemas.push({
        row,
        column,
        type: "number",
        details: "integer",
        body: num[0],
      });

      lexemas.rest = code.slice(length);
      lexemas.column += length;

      return true;
    }
  }

  return false;
};
