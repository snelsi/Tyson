import * as React from "react";

import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MTabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { LexemasTab, SyntaxTab, ParserTab } from "Tabs";

import { observer } from "mobx-react";
import { useLexemas, useSyntax, useParser } from "scripts/store";

import { AntlrParse } from "scripts/antlr4/Antlr4Analyze";

const Tabs = styled(MTabs)({
  borderBottom: "1px solid #e8e8e8",
});

interface Props {
  getCode: () => string;
  initialCode?: string;
}

const Sidebar: React.FC<Props> = observer(({ getCode, initialCode = "" }) => {
  const [value, setValue] = React.useState(0);
  const [code, setCode] = React.useState(initialCode);

  const lexemas = useLexemas();
  const syntax = useSyntax();
  const parser = useParser();

  React.useEffect(() => setCode(initialCode), [initialCode]);

  React.useEffect(() => {
    console.clear();
    AntlrParse(code);
    lexemas.analyzeLexemas(code);
  }, [code]);

  React.useEffect(() => syntax.analyzeLexemas(lexemas.lexemas), [lexemas.lexemas, syntax.mode]);

  React.useEffect(() => parser.parseCode(syntax.programm), [syntax.programm]);

  const updateDictionary = () => setCode(getCode());

  const handleChange = (_event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };

  return (
    <div className="tabs">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Лексеми" />
        <Tab label="Синтаксис" />
        <Tab label="Парсер" />
      </Tabs>
      <Button onClick={updateDictionary} color="primary" style={{ width: "100%" }}>
        Update
      </Button>
      {value === 0 && <LexemasTab />}
      {value === 1 && <SyntaxTab />}
      {value === 2 && <ParserTab />}
    </div>
  );
});

export default Sidebar;
