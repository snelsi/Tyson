import React, { useState, useMemo } from "react";
import styled from "styled-components";
import Switch from "@material-ui/core/Switch";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import { Lexema } from "interfaces/Interface";
import { syntaxAnalyse } from "scripts/Syntax/syntaxAnalyse";
import { useLexemasTree } from "scripts/hooks/stateHelpers";

import { Okay, Error } from "./Check";

interface Props {
  lexemas: Lexema[];
}

const Switcher = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const SyntaxResult: React.FC<Props> = ({ lexemas }) => {
  const [mode, setMode] = useState(false);

  const result = useMemo(() => syntaxAnalyse(lexemas, mode), [lexemas, mode]);

  const [, setTree] = useLexemasTree();

  React.useEffect(() => {
    setTree(result.foundedLexema);
  }, [result]);

  return (
    <>
      <Switcher>
        <h4>Рекурсивный спуск</h4>
        <Switch checked={mode} onChange={() => setMode(!mode)} />
        <h4>Магазинный автомат</h4>
      </Switcher>
      <div>{result.isSuccessfull ? <Okay /> : <Error>Х</Error>}</div>
      <Table size="small">
        <TableBody>
          {result.log.map((msg, i) => (
            <Row className={msg[0] === "!" ? "error" : ""} key={`${msg}-${i}`}>
              <TableCell>{i}</TableCell>
              <TableCell>{msg}</TableCell>
            </Row>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

const Row = styled(TableRow)({
  "&.error td": {
    color: "red",
  },
});
