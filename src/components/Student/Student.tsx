import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/themes/prism.css"; 
import { jsonData } from "../json-data";
import "./Student.scss";

const Student = () => {
  const [code, setCode] = React.useState(
    JSON.stringify(jsonData, null, 2)
  );
  
  return (
    <Editor
      value={code}
      onValueChange={code => setCode(code)}
      highlight={code => highlight(code, languages.json)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 20,
        backgroundColor: "white",
        maxWidth: "500px",
        minHeight: "100vh"
      }}
    />
  );
};

export default Student;