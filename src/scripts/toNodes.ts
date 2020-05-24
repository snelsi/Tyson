import { Lexema } from "interfaces/Interface";
import { NodeTree, Node, Edge } from "interfaces/graph";

interface Lexemad {
  lexema: Lexema;
  id: number;
}
export const toNodes = (tree: Lexema): NodeTree => {
  const head: Lexemad = { lexema: tree, id: 1 };
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  let i = 2;

  const visitNode = ({ lexema, id }: Lexemad) => {
    if (Array.isArray(lexema.body)) {
      lexema.body.forEach((child) => {
        const NodeId = i++;
        edges.push({ from: id, to: NodeId });
        visitNode({ lexema: child, id: NodeId });
      });
    }
    nodes.push({
      id,
      label: Array.isArray(lexema.body) ? lexema.type : lexema.body,
    });
  };

  try {
    visitNode(head);
  } catch {
    return {
      nodes: [],
      edges: [],
    };
  }
  return {
    nodes,
    edges,
  };
};
