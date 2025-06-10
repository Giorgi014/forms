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
        <div className="primary_technologies_container inline_cont">
          <h2 className="primary_technologies_title">Primary technologies</h2>
          <div className="primary_technologies_cont add_info_cont">
            <div className="primary_technologies">
              <div className="technology_experience">
                <div className="technology_input">
                  <label htmlFor="technology">Technology *</label>
                  <input
                    type="text"
                    placeholder="Technology *"
                    id="technology"
                  />
                </div>
                <div className="experience_input">
                  <label htmlFor="experience">Experience(years) *</label>
                  <input
                    type="number"
                    placeholder="Experience(years) *"
                    id="experience"
                  />
                </div>
              </div>
              <Button variant="remove">REMOVE</Button>
            </div>
            <div className="add_button">
              <Button variant="add">ADD</Button>
            </div>
          </div>
        </div>
        <div className="job">
          <label htmlFor="current_job">Current job position *</label>
          <input
            type="text"
            placeholder="Current job position *"
            id="current_job"
          />
        </div>
        <div className="plan_year">
          <label htmlFor="plans">Plans for the next year *</label>
          <input
            type="text"
            placeholder="Plans for the next year *"
            id="plans"
          />
        </div>
        <div className="links_container inline_cont">
          <h2 className="links">Links</h2>
          <div className="github_input">
            <label htmlFor="github">GitHub profile *</label>
            <input type="text" placeholder="GitHub profile *" id="github" />
          </div>
          <div className="linkedin_input">
            <label htmlFor="LinkedIn">LinkedIn profile</label>
            <input type="text" placeholder="LinkedIn profile" id="linkedin" />
          </div>
          <div className="public_input">
            <label htmlFor="Public website">Public website</label>
            <input
              type="text"
              placeholder="Public website"
              id="public_website"
            />
          </div>
          <div className="link_input">
            <label htmlFor="Link to CV">Link to CV</label>
            <input type="text" placeholder="Link to CV" id="link_cv" />
          </div>
        </div>
        <div className="project_links inline_cont">
          <h2>Link to projects</h2>
          <div className="name_link_container add_info_cont">
            <div className="input_cont">
              <div className="name_input">
                <label htmlFor="Name">Name</label>
                <input type="text" placeholder="Name *" id="name" />
              </div>
              <div className="link">
                <label htmlFor="Link">Link *</label>
                <input type="text" placeholder="Link *" id="link" />
              </div>
            </div>
            <Button variant="remove">REMOVE</Button>
          </div>
          <div className="add_button">
            <Button variant="add">ADD</Button>
          </div>
        </div>
        <div className="question_container">
          <input type="checkbox" name="answer" id="question" />
          <p className="pc_and_internet">Have a computer and internet</p>
        </div>
        <div className="submit">
          <Button variant="submit">SUBMIT</Button>
        </div>
      </form>
    </div>
  );
};
