import * as React from "react";
import styled from "styled-components";
import Switch from "@material-ui/core/Switch";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import { Okay, Error } from "./Check";

import { observer } from "mobx-react";
import { useSyntax } from "scripts/store";

const Switcher = styled.label`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const SyntaxTab = observer(() => {
  const syntax = useSyntax();

  return (
    <>
      <Switcher>
        <h4>Рекурсивный спуск</h4>
        <Switch checked={syntax.mode === "Pushdown"} onChange={syntax.toggleMode} />
        <h4>Магазинный автомат</h4>
      </Switcher>
      <div>{syntax.isSuccessfull ? <Okay /> : <Error>Х</Error>}</div>
      <Table size="small">
        <TableBody>
          {syntax.log.map((msg, i) => (
            <Row className={msg[0] === "!" ? "error" : ""} key={`${msg}-${i}`}>
              <TableCell>{i}</TableCell>
              <TableCell>{msg}</TableCell>
            </Row>
          ))}
        </TableBody>
      </Table>
    </>
  );
});

const Row = styled(TableRow)({
  "&.error td": {
    color: "red",
  },
});
