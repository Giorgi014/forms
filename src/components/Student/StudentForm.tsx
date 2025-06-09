import { Button } from "../Button/Button";
import "./StudentForm.scss";

export const StudentForm = () => {
  return (
    <div className="student_form">
      <h1 className="student_form_title">Student profile</h1>
      <form action="Student Profile" className="student_profile">
        <div className="student_info_cont">
          <div className="full_name_input input_cont">
            <label htmlFor="full_name">Full name *</label>
            <input type="text" placeholder="Full name *" id="full_name" />
          </div>
          <div className="email_input input_cont">
            <label htmlFor="email">Email *</label>
            <input type="email" placeholder="Email *" id="email" />
          </div>
          <div className="countries_input input_cont">
            <label htmlFor="countries">Countries *</label>
            <select name="countries" id="countries">
              <option>Countries</option>
              <option value="GE">Georgia</option>
              <option value="US">United States</option>
            </select>
          </div>
          <div className="phone_input input_cont">
            <label htmlFor="phone">Phone *</label>
            <input type="tel" placeholder="Phone *" id="phone" />
          </div>
          <div className="finished_university_years_input input_cont">
            <label htmlFor="finished_university_years">
              Finished university years *
            </label>
            <input
              type="number"
              placeholder="Finished university years"
              id="finished_university_years"
            />
          </div>
        </div>
        <div className="primary_technologies_container">
          <h2 className="primary_technologies_title">Primary technologies</h2>
          <div className="primary_technologies_cont">
            <div className="primary_technologies">
              <div className="technology_input">
                <label htmlFor="technology">Technology *</label>
                <input type="text" placeholder="Technology *" id="technology" />
              </div>
              <div className="experience_input">
                <input
                  type="number"
                  placeholder="Experience(years) *"
                  id="experience"
                />
                <Button />
              </div>
            </div>
            <Button />
          </div>
          <input
            type="text"
            placeholder="Current job position *"
            id="current_job"
          />
          <input
            type="text"
            placeholder="Plans for the next year *"
            id="plans"
          />
        </div>
      </form>
    </div>
  );
};
