import * as React from "react";
import { action, observable } from "mobx";
import { BaseLexema } from "interfaces/Interface";
import { getLexemas } from "scripts/Lexemas/getLexemas";

class LexemasStore {
  @observable public lexemas: BaseLexema[] = [];

  @action public analyzeLexemas = (code: string) => {
    this.lexemas = getLexemas(code);
  };
}

const LexemasStoreContext = React.createContext(new LexemasStore());

export const useLexemas = () => React.useContext(LexemasStoreContext);
