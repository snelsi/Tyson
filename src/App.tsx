import React, { useRef } from "react";
import styled from "styled-components";

import { Nav } from "Nav";
import { Window } from "Window/Window";

import Tabs from "Tabs/Tabs";

import { FAQ } from "FAQ";

const Frame = styled.div`
  display: grid;
  grid-template-rows: 48px 1fr;

  height: 100vh;
  width: 100%;

  overflow: hidden;
`;

const Grid = styled.div`
  --tabs-width: 800px;
  display: grid;
  width: 100%;
  height: 100%;
  overflow: auto;

  & .left {
    display: grid;
    grid-template-rows: 1fr 180px;

    @media (max-width: 1080px) {
      grid-template-rows: 1fr;
    }

    height: 100%;
    overflow: hidden;
  }

  & .tabs {
    border: 1px solid #e8e8e8;
    height: 100%;
    overflow-y: auto;
    padding-bottom: 40px;

    & > div[data-hide="true"] {
      display: none;
    }
  }

  @media (min-width: 1081px) {
    grid-template-columns: 1fr var(--tabs-width, 700px);
  }
  @media (max-width: 1440px) {
    --tabs-width: 700px;
  }
  @media (max-width: 1080px) {
    --tabs-width: 1fr;
    grid-template-rows: 40vh 1fr;
    & .tabs {
      border-top: 1px solid grey;
    }
  }
`;

interface AppProps {
  code: string;
}
const App: React.FC<AppProps> = ({ code }) => {
  const editorRef = useRef<() => string>();
  const setRef = (ref: () => string) => {
    editorRef.current = ref;
  };

  const getValue = (): string => {
    if (editorRef.current === undefined) return "";
    return editorRef.current();
  };

  return (
    <Frame>
      <Nav />
      <Grid>
        <div className="left">
          <Window initialCode={code} setRef={setRef} />
          <FAQ />
        </div>
        <Tabs getCode={getValue} initialCode={code} />
      </Grid>
    </Frame>
  );
};

export default App;
