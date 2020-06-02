import { lexemas } from "scripts/store";
import { keyWords } from "scripts/keyWords";

/**
 * (_ | letter) (_ | letter | digit)*
 */
const identRegExp = /^(\_|[a-zA-Z])(\_|\w)*/;

export const isIdentifierOrKeyword = (): boolean => {
  const code = lexemas.rest;
  const column = lexemas.column;
  const row = lexemas.row;

  const ident = code.match(identRegExp);

  if (ident?.length > 0) {
    lexemas.rest = code.slice(ident[0].length);
    lexemas.column += ident[0].length;

    for (let keyword of keyWords) {
      if (ident[0] === keyword.word) {
        lexemas.lexemas.push({
          row,
          column,
          type: "keyword",
          id: keyword.id,
          body: keyword.word,
          details: keyword.details,
        });
        lexemas.column += keyword.word.length;
        lexemas.rest = code.slice(keyword.word.length);
        return true;
      }
    }

    lexemas.lexemas.push({
      row,
      column,
      type: "identifier",
      body: ident[0],
    });

    return true;
  }

  return false;
};
