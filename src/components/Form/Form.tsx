import { useState } from "react";
import Student from "../Student/Student";
import { StudentForm } from "../Student/StudentForm";
import { jsonData } from "../json-data";
// import { data } from "react-router-dom";
import type { FormPropertiesSchema, FormSchema, FormSchemaType } from "../types";
import "./Form.scss";

const applyFormValues = (target: FormSchema, source: FormSchema): FormSchema => {
  const newSchema: FormSchema = JSON.parse(JSON.stringify(target));

  const recurse = (targetNode: FormPropertiesSchema, sourceNode: FormPropertiesSchema) => {
    if (!targetNode || !sourceNode) return;

    if (sourceNode.hasOwnProperty("value")) {
      targetNode.value = sourceNode.value;
    }

    if (targetNode.properties && sourceNode.properties) {
      sourceNode.properties.map((childSource, index) => {
        recurse(targetNode.properties![index], childSource);
      });
    }

    if (targetNode.item && sourceNode.item && Array.isArray(sourceNode.item)) {
      targetNode.item = sourceNode.item.map((sourceItem: FormPropertiesSchema) => {
        const template = JSON.parse(JSON.stringify(targetNode.item![0]));
        recurse(template, sourceItem);
        return template;
      });
    }
  };
  recurse(newSchema, source);
  return newSchema;
};

const Form = () => {
  const [formData, setFormData] = useState<FormSchema>(jsonData);
  const [code, setCode] = useState<string>(JSON.stringify(jsonData, null, 2));

  const handleFormChange = (data: FormSchema) => {
    //   const updatedProperties = jsonData.properties.map((prop) => {
    //     const changed = data.properties.find((p) => p.name === prop.name);
    //     if (changed && changed.value !== undefined) {
    //       return { ...prop, value: changed.value };
    //     }
    //     return prop;
    //   });

    //   setFormData({
    //     ...jsonData,
    //     properties: updatedProperties,
    //   });

    const newMergedData = applyFormValues(formData, data);
    const newCode = JSON.stringify(newMergedData, null, 2);

    if (newCode !== code) {
      setFormData(newMergedData);
      setCode(newCode);
    }

    // if (JSON.stringify(data) !== JSON.stringify(formData)) {
    //   setFormData(data);
    //   setCode(JSON.stringify(data, null, 2));
    // }
  };

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    try {
      const newFormData: FormSchema = JSON.parse(newCode);
      if (JSON.stringify(newFormData) !== JSON.stringify(formData)) {
        setFormData(newFormData);
      }
    } catch (error) {
      console.error("Invalid JSON:", error);
    }
  };
  // };
  return (
    <div className="form_container">
      <div className="jsons_info">
        <Student initialData={code} onCodeChange={handleCodeChange} />
      </div>
      <div className="student_form_value">
        {/* <StudentForm
          defaultProperties={[
            {
              type: "string",
              name: "fullName",
              label: "Full Name",
              required: true,
            },
          ]}
        /> */}
        <StudentForm
          // defaultProperties={jsonData.properties}
          // key={JSON.stringify(formData)}
          defaultProperties={formData}
          onFormChange={handleFormChange}
        />
      </div>
    </div>
  );
};

export default Form;
