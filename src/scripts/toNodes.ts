import { AnalyzeResult, Lexema } from "interfaces/Interface";
import { NodeTree, Node, Edge } from "interfaces/graph";

export const toNodes = (tree: AnalyzeResult): NodeTree => {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  let i = 0;

  const visitNode = (lexema: Lexema) => {
    const node = {
      id: ++i,
      label: Array.isArray(lexema.body) ? lexema.type : lexema.body,
    };

    nodes.push(node);
  };

  visitNode(tree.foundedLexema);

  return {
    nodes,
    edges,
  };
};
