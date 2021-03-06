import { BaseLexema, Lexema } from "interfaces/Interface";
import { NodeTree, Node, Edge } from "interfaces/graph";

export const flatLexema = (head: Lexema): BaseLexema[] => {
  const output: BaseLexema[] = [];

  const visitLexema = (lexema: Lexema) => {
    if (Array.isArray(lexema.body)) {
      lexema.body.forEach((child) => {
        visitLexema(child);
      });
    } else {
      output.push(lexema as BaseLexema);
    }
  };

  visitLexema(head);

  return output;
};

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
        if (child !== null) {
          const NodeId = i++;
          edges.push({ from: id, to: NodeId });
          visitNode({ lexema: child, id: NodeId });
        }
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

export const insertNull = (array: Lexema[], index: number) => array.splice(index, 0, null);
export const isLetter = (symbol: string) => symbol.match(/_|\w/);
