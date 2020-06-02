import { lexemas } from "scripts/store";
import { keySymbols } from "scripts/keySymbols";

export const isKeysymbol = () => {
  const code = lexemas.rest;

  for (let keySymbol of keySymbols) {
    if (code.startsWith(keySymbol.symbol)) {
      lexemas.lexemas.push({
        row: lexemas.row,
        column: lexemas.column,
        type: "keysymbol",
        id: keySymbol.id,
        body: keySymbol.symbol,
        details: keySymbol.details,
      });
      lexemas.column += keySymbol.symbol.length;
      lexemas.rest = code.slice(keySymbol.symbol.length);
      return true;
    }
  }

  return false;
};
