import * as React from "react";
import { action, observable, computed } from "mobx";
import { Lexema, BaseLexema } from "interfaces/Interface";

import { toNodes } from "scripts/helpers";
import { syntaxAnalyse } from "scripts/Syntax";

class SyntaxStore {
  @observable public mode: "Recursive" | "Pushdown" = "Recursive";
  @observable public log: string[] = [];
  @observable public programm: Lexema;
  @observable public isSuccessfull: boolean;

  @computed public get tree() {
    return toNodes(this.programm);
  }

  @action public analyzeLexemas = (lexemas: BaseLexema[]) => {
    const res = syntaxAnalyse(lexemas);

    this.isSuccessfull = res.isSuccessfull;
    this.programm = res.foundedLexema;
  };

  @action public toggleMode = () => {
    this.mode = this.mode === "Recursive" ? "Pushdown" : "Recursive";
  };

  @action public clearLog = () => {
    this.log = [];
  };

  @action public pushLog = (info: string) => {
    this.log.push(info);
  };
}

const SyntaxStoreContext = React.createContext(new SyntaxStore());

export const useSyntax = () => React.useContext(SyntaxStoreContext);
