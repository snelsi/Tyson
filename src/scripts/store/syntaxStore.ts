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

  @action public pushLog = (info: string, alternative?: string) => {
    if (alternative !== undefined) {
      this.log.push(this.mode === "Pushdown" ? info : alternative);
    } else {
      this.log.push(info);
    }
  };
}

export const syntax = new SyntaxStore();

const SyntaxStoreContext = React.createContext(syntax);

export const useSyntax = () => React.useContext(SyntaxStoreContext);
