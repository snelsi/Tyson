import * as React from "react";
import Monaco from "@monaco-editor/react";

interface EditorProps {
  initialCode: string;
  setRef: (ref: () => string) => void;
}

export const Editor: React.FC<EditorProps> = ({ initialCode, setRef }) => {
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
