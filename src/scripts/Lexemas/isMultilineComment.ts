import { lexemas } from "scripts/store";

export const isMultiLineComment = () => {
  const code = lexemas.rest;

  if (code.slice(0, 2) === "/*") {
    lexemas.column += 2;
    let i = 2;

    while (i < code.length && code.slice(i, i + 2) !== "*/") {
      if (code[i] === "\n") {
        lexemas.row++;
        lexemas.column = 0;
      }

      lexemas.column++;
      i++;
    }

    lexemas.rest = code.slice(i + 2);
    return true;
  }

  return false;
};
