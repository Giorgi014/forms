import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/themes/prism.css";
// import { jsonData } from "../json-data";
import "./Student.scss";
// import type { FormSchema, FormSchemaType } from "../types";
// import type { FormSchemaType } from "../types";

type props = {
  // initialData: FormSchemaType;
  initialData: string;
  // onCodeChange:(value: FormSchema) => void;
  onCodeChange: (value: string) => void;
};

const Student = ({ initialData, onCodeChange }: props) => {
  // const [code, setCode] = useState(
  //   JSON.stringify(initialData, null, 2)
  // );
  //  useEffect(() => {
  //   setCode(JSON.stringify(initialData, null, 2));
  // }, [initialData]);
  return (
    <Editor
      value={initialData}
      // onValueChange={code => setCode(code)}
      onValueChange={onCodeChange}
      highlight={(code) => highlight(code, languages.json, "json")}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 18,
        backgroundColor: "white",
        width: "600px",
        minHeight: "100vh",
      }}
    />
  );
};

export default Student;
