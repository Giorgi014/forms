import { useState } from "react";
import Student from "../Student/Student";
import { StudentForm } from "../Student/StudentForm";
import { jsonData } from "../json-data";
// import { data } from "react-router-dom";
import type { FormSchema, FormSchemaType } from "../types";
import "./Form.scss";

const Form = () => {
  const [formData, setFormData] = useState(jsonData);

 const handleFormChange = (data: FormSchema) => {
    const updatedProperties = jsonData.properties.map((prop) => {
      const changed = data.properties.find((p) => p.name === prop.name);
      if (changed && changed.value !== undefined) {
        return { ...prop, value: changed.value };
      }
      return prop;
    });

    setFormData({
      ...jsonData,
      properties: updatedProperties,
    });
  };

  return (
    <div className="form_container">
      <div className="jsons_info">
        <Student initialData={formData} />
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
          defaultProperties={jsonData.properties}
          onFormChange={handleFormChange}
        />
      </div>
    </div>
  );
};

export default Form;
