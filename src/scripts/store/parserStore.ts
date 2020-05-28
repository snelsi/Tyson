import * as React from "react";
import { action, observable } from "mobx";
import { Variable, Lexema } from "interfaces/Interface";

import { parseCode } from "scripts/Parser";

class ParserStore {
  @observable public log: string[] = [];
  @observable public variables: Set<Variable> = new Set<Variable>();

  @action public parseCode = (programm: Lexema) => {
    this.log = [];
    this.variables.clear();

    parseCode(programm);
  };

  @action public pushLog = (info: string) => {
    this.log.push(info);
  };
}

const ParserStoreContext = React.createContext(new ParserStore());

export const useParser = () => React.useContext(ParserStoreContext);
