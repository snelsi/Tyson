import * as React from "react";
import styled from "styled-components";

import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import { observer } from "mobx-react";
import { useParser } from "scripts/store";

const Padding = styled.div`
  padding: 12px 16px;
`;
const Title = styled.h4`
  border-bottom: 1px solid #e8e8e8;
  font-size: 18px;
  margin-top: 0.5em;
  padding: 16px;
`;

export const ParserTab = observer(() => {
  const parser = useParser();
  const anchors = Array.from(parser.anchors);
  return (
    <div>
      <div>
        <Title>Polish output</Title>

        <Padding>
          <code>{parser.polish.join(" ")}</code>
        </Padding>
      </div>

      {parser.variables.variables.length > 0 && (
        <>
          <Title>Variables</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>i</TableCell>
                <TableCell>identificator</TableCell>
                <TableCell>value</TableCell>
                <TableCell>constant</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {parser.variables.variables.map((identificator, i) => (
                <TableRow key={identificator[0]}>
                  <TableCell>{i}</TableCell>
                  <TableCell>{identificator[0]}</TableCell>
                  <TableCell>{String(identificator[1].value)}</TableCell>
                  <TableCell>{String(identificator[1].constant)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}

      {anchors.length > 0 && (
        <>
          <Title>Anchors</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>i</TableCell>
                <TableCell>index</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {anchors.map(([i, index]) => (
                <TableRow key={i}>
                  <TableCell>{i}</TableCell>
                  <TableCell>{index}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}

      {parser.log.length > 0 && (
        <>
          <Title>Log</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>i</TableCell>
                <TableCell>message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {parser.log.map((msg, i) => (
                <TableRow className={msg[0] === "!" ? "error" : ""} key={`${msg}-${i}`}>
                  <TableCell>{i}</TableCell>
                  <TableCell>{msg}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </div>
  );
});
