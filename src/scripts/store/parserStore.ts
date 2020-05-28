import * as React from "react";
import { action, observable } from "mobx";
import { Lexema } from "interfaces/Interface";

import { Variables } from "scripts/store/Variables";
import { parseCode } from "scripts/Parser";

class ParserStore {
  @observable public log: string[] = [];
  @observable public variables = new Variables();
  @observable public anchors = 0;

  @action public parseCode = (programm: Lexema) => {
    this.log = [];
    this.variables.clear();

    parseCode(programm);
  };

  @action public pushLog = (info: any) => {
    this.log.push(String(info));
  };
}

export const parser = new ParserStore();

const ParserStoreContext = React.createContext(parser);

export const useParser = () => React.useContext(ParserStoreContext);
