import * as React from "react";
import { action, observable } from "mobx";
import { BaseLexema } from "interfaces/Interface";
import { isLexema } from "scripts/Lexemas";

const skip = [" ", "\t", "\r", "\n"];

class LexemasStore {
  @observable public lexemas: BaseLexema[] = [];
  @observable public input = "";
  @observable public rest = "";
  @observable public column = 1;
  @observable public row = 1;

  @action public analyzeLexemas = (code: string) => {
    this.lexemas = [];
    this.input = code;
    this.rest = code;
    this.column = 1;
    this.row = 1;

    while (lexemas.rest) {
      this.trimWhitespaces();

      if (this.rest && !isLexema()) {
        console.log(this.rest);
        this.lexemas.push({
          row: this.row,
          column: this.column,
          type: "error",
          body: this.rest.split(" ")[0],
          details: `unexpected symbol '${this.rest}' in [${this.row}, ${this.column}]`,
        });
        break;
      }
    }
  };

  @action public trimWhitespaces = () => {
    let code = this.rest;
    while (skip.includes(code[0])) {
      if (code[0] === "\n") {
        this.column = 0;
        this.row++;
      }
      this.column++;
      code = code.slice(1);
    }
    this.rest = code;
  };
}

export const lexemas = new LexemasStore();
const LexemasStoreContext = React.createContext(lexemas);

export const useLexemas = () => React.useContext(LexemasStoreContext);
