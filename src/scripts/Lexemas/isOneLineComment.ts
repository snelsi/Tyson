import { lexemas } from "scripts/store";

export const isOneLineComment = (): boolean => {
  const code = lexemas.rest;

  if (code.slice(0, 2) === "//") {
    let i = 2;

    while (i < code.length && code[i] !== "\n") {
      i++;
    }

    lexemas.rest = code.slice(i);
    return true;
  }

  return false;
};
