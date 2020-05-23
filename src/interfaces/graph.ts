export interface Node {
  id: number;
  label: string;
}

export interface Edge {
  from: number;
  to: number;
}
export interface NodeTree {
  nodes: Node[];
  edges: Edge[];
}
