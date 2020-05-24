import React, { useState, useMemo } from "react";
import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MTabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { getLexemas } from "scripts/getLexemas";
import { LexemasTable } from "Tabs/Lexemas";
import { SyntaxResult } from "Tabs/Syntax";

import { AntlrParse } from "scripts/antlr4/Antlr4Analyze";

const Tabs = styled(MTabs)({
  borderBottom: "1px solid #e8e8e8",
});

interface Props {
  getCode: () => string;
}

const Sidebar: React.FC<Props> = ({ getCode }) => {
  const [value, setValue] = useState(0);
  const [code, setCode] = useState(getCode());

  const lexemas = useMemo(() => {
    console.clear();
    console.log("%c -------ANTLR---------", "color: red");
    AntlrParse(code);
    console.log("%c -------ANTLR---------", "color: red");
    return getLexemas(code);
  }, [code]);

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
        <Tab label="Лексичний" />
        <Tab label="Синтаксичний" />
        <Tab label="Парсер" />
      </Tabs>
      <Button onClick={updateDictionary} color="primary" style={{ width: "100%" }}>
        Update
      </Button>
      {value === 0 && <LexemasTable lexemas={lexemas} />}
      {value === 1 && <SyntaxResult lexemas={lexemas} />}
    </div>
  );
};

export default Sidebar;
