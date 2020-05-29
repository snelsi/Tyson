import * as React from "react";
import { action, observable } from "mobx";
import { Lexema, Token } from "interfaces/Interface";

import { Variables } from "scripts/store/Variables";
import { StatementToPolish } from "scripts/ToPolish";
import { parsePolish } from "scripts/Parser/polishParser";

class ParserStore {
  @observable public isParsedSuccessfully = false;
  @observable public polish: Token[] = [];
  @observable public log: string[] = [];
  @observable public variables = new Variables();

  @observable public anchors = new Map<number, number>();
  @observable public anchorNextIndex = 1;

  @action public parseCode = (programm: Lexema) => {
    this.log = [];
    this.variables.clear();
    this.polish = [];
    this.anchors.clear();
    this.anchorNextIndex = 1;

    const statements = programm.body as Lexema[];

    for (let statement of statements) {
      const polishStatement = StatementToPolish(statement);
      this.polish.push(...polishStatement);
    }

    for (let i = 0; i < this.polish.length; i++) {
      const token = this.polish[i];
      if (typeof token === "string" && token[0] === "#") {
        const index = token.slice(1);
        this.anchors.set(Number(index), i);
      }
    }

    console.log("Polish output: ", this.polish.join(" "));

    try {
      parsePolish(this.polish);
      this.isParsedSuccessfully = true;
    } catch (e) {
      console.log(e);
      this.isParsedSuccessfully = false;
      this.log.push("Во время выполнения кода возникла ошибка!")
      this.log.push(String(e))
    }
  };

  @action public pushLog = (info: any) => {
    this.log.push(String(info));
  };
}

export const parser = new ParserStore();

const ParserStoreContext = React.createContext(parser);

export const useParser = () => React.useContext(ParserStoreContext);
