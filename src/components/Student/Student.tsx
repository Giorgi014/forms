import { useEffect, useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/themes/prism.css"; 
// import { jsonData } from "../json-data";
import "./Student.scss";
import type { FormSchema, FormSchemaType } from "../types";

type props = {
  initialData: FormSchema
}

const Student = ({ initialData }: props) => {
  const [code, setCode] = useState(
    JSON.stringify(initialData, null, 2)
  );
   useEffect(() => {
    setCode(JSON.stringify(initialData, null, 2));
  }, [initialData]);
  return (
    <Editor
      value={code}
      onValueChange={code => setCode(code)}
      highlight={code => highlight(code, languages.json, 'json')}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 18,
        backgroundColor: "white",
        width: "600px",
        minHeight: "100vh"
      }}
    />
  );
};

export default Student;