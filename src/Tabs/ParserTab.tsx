import * as React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import { observer } from "mobx-react";
import { useParser } from "scripts/store";

export const ParserTab = observer(() => {
  const parser = useParser();

  return (
    <Table size="small">
      <TableBody>
        {parser.log.map((msg, i) => (
          <TableRow className={msg[0] === "!" ? "error" : ""} key={`${msg}-${i}`}>
            <TableCell>{i}</TableCell>
            <TableCell>{msg}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
});
