import * as React from "react";
import VisGraph from "vis-react";
import { useLexemasTree } from "scripts/hooks/stateHelpers";

import { toNodes } from "scripts/helpers";

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

export const Graph = () => {
  const [tree] = useLexemasTree();
  const graph = React.useMemo(() => toNodes(tree), [tree]);
  return <VisGraph graph={graph} options={options} />;
};
