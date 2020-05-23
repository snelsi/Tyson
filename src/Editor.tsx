import * as React from "react";
import Monaco from "@monaco-editor/react";

interface Props {
  initialCode: string;
  setRef: (ref: () => string) => void;
}

const Editor: React.FC<Props> = ({ initialCode, setRef }) => {
  const handleEditorDidMount = (getCurrentValue: () => string) => {
    setRef(getCurrentValue);
  };

  return (
    <Monaco
      value={initialCode}
      theme="light"
      language="javascript"
      editorDidMount={handleEditorDidMount}
    />
  );
};

export default Editor;
