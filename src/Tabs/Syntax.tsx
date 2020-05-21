import React, { useState, useMemo } from "react";
import styled from "styled-components";
import Switch from "@material-ui/core/Switch";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import { Lexema } from "interfaces/Interface";
import { syntaxAnalyse } from "scripts/Syntax/syntaxAnalyse";

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

const Okay = styled.div`
  align-items: center;
  background-color: #38c47f;
  border-radius: 50%;
  display: flex;
  margin: 20px auto;
  justify-content: center;
  height: 80px;
  width: 80px;

  &::after {
    border-bottom: 6.4px solid white;
    border-left: 6.4px solid white;
    content: "";
    display: block;
    height: 16px;
    width: 32px;
    transform: rotate(-45deg) translateX(3.2px) translateY(-3.2px);
  }
`;

const Error = styled.div`
  align-items: center;
  background-color: #ff4c47;
  border-radius: 50%;
  display: flex;
  color: white;
  font-family: sans-serif;
  font-size: 40px;
  font-weight: bold;
  margin: 20px auto;
  justify-content: center;
  height: 80px;
  width: 80px;
`;

const Row = styled(TableRow)({
  "&.error td": {
    color: "red",
  },
});
