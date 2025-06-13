import Student from "../Student/Student";
import { StudentForm } from "../Student/StudentForm";
import "./Form.scss";

const Form = () => {
  return (
    <div className="form_container">
      <div className="jsons_info">
        <Student />
      </div>
      <div className="student_form_value">
        <StudentForm
          defaultProperties={[
            {
              type: 'string',
              name: "fullName",
              label: "Full Name",
              required: true
            }
          ]}
        />
      </div>
    </div>
  );
};

export default Form;
