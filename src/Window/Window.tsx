import * as React from "react";
import styled from "styled-components";

import { Graph } from "Window/Graph";
import { Editor } from "Window/Editor";
import { ModeButton } from "Window/ModeButton";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Template = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;

  &[data-graph="true"] {
    & > .editor {
      display: none;
    }
  }
`;

interface WindowProps {
  initialCode: string;
  setRef: (ref: () => string) => void;
}

export const Window: React.FC<WindowProps> = ({ initialCode, setRef }) => {
  const [mode, setMode] = React.useState(false);

  return (
    <Template data-graph={mode}>
      <Wrapper className="editor">
        <Editor initialCode={initialCode} setRef={setRef} />
      </Wrapper>
      {mode && <Graph />}
      <ModeButton onClick={() => setMode(!mode)}>Change Mode</ModeButton>
    </Template>
  );
};
