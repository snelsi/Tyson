import * as React from "react";
import VisGraph from "vis-react";

import { observer } from "mobx-react";
import { useSyntax } from "scripts/store";

const options = {
  layout: {
    hierarchical: {
      direction: "UD",
      sortMethod: "directed",
    },
  },
  interaction: { dragNodes: false },
  physics: {
    enabled: false,
  },
  configure: {
    filter: (option, path) => path.indexOf("hierarchical") !== -1,
    showButton: false,
  },
};

export const Graph = observer(() => {
  const syntax = useSyntax();
  return <VisGraph graph={syntax.tree} options={options} />;
});
