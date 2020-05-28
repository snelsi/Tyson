import React from "react";
import { styled } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { observer } from "mobx-react";
import { useLexemas } from "scripts/store";

export const LexemasTab = observer(() => {
  const lexemas = useLexemas();

  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>i</TableCell>
          <TableCell>row,clm</TableCell>
          <TableCell>word</TableCell>
          <TableCell>type</TableCell>
          <TableCell>id</TableCell>
          <TableCell>details</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {lexemas?.lexemas?.map((lexema, i) => (
          <Row
            className={lexema.type === "error" ? "error" : ""}
            key={`${lexema.row}.${lexema.column}.${lexema.body}`}
          >
            <TableCell>{i}</TableCell>
            <TableCell>{`[${lexema.row}, ${lexema.column}]`}</TableCell>
            <TableCell>{lexema.body}</TableCell>
            <TableCell>{lexema.type}</TableCell>
            <TableCell>{lexema.id}</TableCell>
            <TableCell>{lexema.details || ""}</TableCell>
          </Row>
        ))}
      </TableBody>
    </Table>
  );
});

const Row = styled(TableRow)({
  "&.error td": {
    color: "red",
  },
});
