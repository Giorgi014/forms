// import StudentJSON from "../student.json";
import React, { useState } from "react";
import { jsonData } from "../json-data";
import "./Student.scss";
import Editor from "react-simple-code-editor";

const Student = () => {
  const [code, setCode] = React.useState(
    JSON.stringify(jsonData)
  );
  return (
    <Editor
      value={code}
      onValueChange={code => setCode(code)}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }}
    />
  );
};

export default Student;
