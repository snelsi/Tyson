import * as React from "react";

import { Okay, Error } from "./Check";

import { parseCode } from "scripts/Parser";
import { useLexemasTree } from "scripts/hooks/stateHelpers";

interface ParserProps {}

export const Parser: React.FC<ParserProps> = () => {
  const [tree] = useLexemasTree();
  const parserResult = React.useMemo(() => parseCode(tree), []);
  return <div>{parserResult ? <Okay /> : <Error />}</div>;
};
