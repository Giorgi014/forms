import {
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";
import { Button } from "../Button/Button";
import type { FormPropertiesSchema, FormSchema, FormSchemaType } from "../types";
import { useEffect } from "react";
import "./StudentForm.scss";

type RenderProps = {
  path: string;
  properties: Array<FormPropertiesSchema>;
};

type Props = {
  // defaultProperties: FormSchema["properties"];
  defaultProperties: FormSchema;
  onFormChange: (data: FormSchemaType) => void;
};

const DynamicRenderForm = ({ path, properties }: RenderProps) => {
  const { register } = useFormContext();

  return (
    // <>
      <div className="student_info_cont">
        {properties.map((field, index) => {
          const fieldPath = `${path}.${index}`;

          if (field.type === "object") {
            return (
              <div key={field.name} className="inline_cont">
                <h3>{field.label}</h3>
                <DynamicRenderForm
                  path={`${fieldPath}.properties`}
                  properties={field.properties!}
                />
              </div>
            );
          } else if (field.type === "array") {
            return (
              <div key={field.name} className="inline_cont">
                <DynamicArrayRenderer path={fieldPath} field={field} />
              </div>
            );
          } else if (field.type === "enum") {
            return (
              <div key={field.name} className="input_cont">
                <label htmlFor={field.label}>{field.label}</label>
                <select id="countries" {...register(`${fieldPath}.value`)}>
                  <option value="Country">Country</option>
                  <option value="ge">Georgia</option>
                  <option value="ua">Ukraine</option>
                </select>
              </div>
            );
          } else if (field.type === "boolean") {
            return (
              <div key={field.name} className="question_container">
                <input
                  type="checkbox"
                  id={field.name}
                  {...register(`${fieldPath}.value`)}
                />
                <p className="pc_and_internet">{field.label}</p>
              </div>
            );
          } else {
            return (
              <div key={field.name} className="input_cont">
                <label htmlFor={field.label}>{field.label}</label>
                <input
                  id={field.name}
                  type={field.type || field.inputType}
                  placeholder={field.label + " *"}
                  required={field.required}
                  {...register(`${fieldPath}.value`)}
                />
              </div>
            );
          }
        })}
      </div>
    // </>
  );
};

const DynamicArrayRenderer = ({
  path,
  field,
}: {
  path: string;
  field: FormPropertiesSchema;
}) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: `${path}.item`,
  });

  const addField = () => {
    const newFieldTemplete = JSON.parse(JSON.stringify(field.item![0]));
    if (newFieldTemplete.properties) {
      newFieldTemplete.properties.forEach((prop: any) => {
        delete prop.value;
      });
    }
    append(newFieldTemplete);
  };

  return (
    <div className="inline_cont">
      <h2>{field.label}</h2>
      <div className="add_info_cont">
        {fields.map((arrayItem, index) => (
          <div key={arrayItem.id} className="primary_technologies">
            <div className="technology_experience">
              <DynamicRenderForm
                path={`${path}.item.${index}.properties`}
                properties={(arrayItem as any).properties}
              />
            </div>
            <Button variant="remove" onClick={() => remove(index)}>
              REMOVE
            </Button>
          </div>
        ))}
        <div className="add_button">
          <Button variant="add" onClick={addField}>
            ADD
          </Button>
        </div>
      </div>
    </div>
  );
};

export const StudentForm = ({ defaultProperties, onFormChange }: Props) => {
  const methods = useForm<FormSchema>({ defaultValues: defaultProperties });
  const { watch, handleSubmit, reset } = methods;

  useEffect(() => {
    reset(defaultProperties);
  }, [defaultProperties, reset]);
  
  const formData = watch();
  
  useEffect(() => {
    onFormChange(formData);
  }, [formData, onFormChange]);

  const onSubmit = (data: FormSchema) => {
    console.log("Form Submitted:", data);
    alert("Form data logged to console!");
  };

  return (
    <FormProvider {...methods}>
      <div className="student_form">
        <h1 className="student_form_title">{defaultProperties.label}</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="student_profile">
          <DynamicRenderForm
            path="properties"
            properties={defaultProperties.properties}
          />
          <div className="submit">
            <Button variant="submit" type="submit">
              SUBMIT
            </Button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

// export const StudentForm = ({ defaultProperties, onFormChange }: Props) => {
//   const { register, watch, setValue } = useForm<FormSchema>({
//     defaultValues: {
//       type: "object",
//       name: "profile",
//       label: "Student Profile",
//       properties: defaultProperties,
//     },
//   });

//   //   const properties = watch('properties')
//   //  properties.map(property => {
//   //     if(property.type === 'array'){
//   //       setValue(property.name)
//   //     }
//   //   })

//   const formData = watch();

//   useEffect(() => {
//     onFormChange(formData);
//   }, [formData, onFormChange]);

//   const getPropIndex = (name: string) =>
//     defaultProperties.findIndex((p) => p.name === name);

//   return (
//     <div className="student_form">
//       <h1 className="student_form_title">Student profile</h1>
//       <form action="Student Profile" className="student_profile">
//         <div className="student_info_cont">
//           <div className="full_name_input input_cont">
//             <label htmlFor="full_name">Full name *</label>
//             <input
//               type="text"
//               placeholder="Full name *"
//               id="full_name"
//               {...register(`properties.${getPropIndex("fullName")}.value`)}
//             />
//           </div>
//           <div className="email_input input_cont">
//             <label htmlFor="email">Email *</label>
//             <input
//               type="email"
//               placeholder="Email *"
//               id="email"
//               {...register(`properties.${getPropIndex("email")}.value`)}
//             />
//           </div>
//           <div className="countries_input input_cont">
//             <label htmlFor="countries">Countries *</label>
//             <select
//               id="countries"
//               {...register(`properties.${getPropIndex("country")}.value`)}
//               name="countries"
//             >
//               <option>Countries</option>
//               <option value="GE">Georgia</option>
//               <option value="US">United States</option>
//             </select>
//           </div>
//           <div className="phone_input input_cont">
//             <label htmlFor="phone">Phone *</label>
//             <input
//               type="tel"
//               placeholder="Phone *"
//               id="phone"
//               {...register(`properties.${getPropIndex("phone")}.value`)}
//             />
//           </div>
//           <div className="finished_university_years_input input_cont">
//             <label htmlFor="finished_university_years">
//               Finished university years *
//             </label>
//             <input
//               type="number"
//               placeholder="Finished university years"
//               id="finished_university_years"
//               {...register(
//                 `properties.${getPropIndex("universityYears")}.value`
//               )}
//             />
//           </div>
//         </div>
//         <div className="primary_technologies_container inline_cont">
//           <h2 className="primary_technologies_title">Primary technologies</h2>
//           <div className="primary_technologies_cont add_info_cont">
//             <div className="primary_technologies">
//               <div className="technology_experience">
//                 <div className="technology_input">
//                   <label htmlFor="technology">Technology *</label>
//                   <input
//                     type="text"
//                     placeholder="Technology *"
//                     id="technology"
//                     {...register("properties.primary_technologies.0.name")}
//                   />
//                 </div>
//                 <div className="experience_input">
//                   <label htmlFor="experience">Experience(years) *</label>
//                   <input
//                     type="number"
//                     placeholder="Experience(years) *"
//                     id="experience"
//                   />
//                 </div>
//               </div>
//               <Button variant="remove">REMOVE</Button>
//             </div>
//             <div className="add_button">
//               <Button variant="add">ADD</Button>
//             </div>
//           </div>
//         </div>
//         <div className="job">
//           <label htmlFor="current_job">Current job position *</label>
//           <input
//             type="text"
//             placeholder="Current job position *"
//             id="current_job"
//           />
//         </div>
//         <div className="plan_year">
//           <label htmlFor="plans">Plans for the next year *</label>
//           <input
//             type="text"
//             placeholder="Plans for the next year *"
//             id="plans"
//           />
//         </div>
//         <div className="links_container inline_cont">
//           <h2 className="links">Links</h2>
//           <div className="github_input">
//             <label htmlFor="github">GitHub profile *</label>
//             <input type="text" placeholder="GitHub profile *" id="github" />
//           </div>
//           <div className="linkedin_input">
//             <label htmlFor="LinkedIn">LinkedIn profile</label>
//             <input type="text" placeholder="LinkedIn profile" id="linkedin" />
//           </div>
//           <div className="public_input">
//             <label htmlFor="Public website">Public website</label>
//             <input
//               type="text"
//               placeholder="Public website"
//               id="public_website"
//             />
//           </div>
//           <div className="link_input">
//             <label htmlFor="Link to CV">Link to CV</label>
//             <input type="text" placeholder="Link to CV" id="link_cv" />
//           </div>
//         </div>
//         <div className="project_links inline_cont">
//           <h2>Link to projects</h2>
//           <div className="name_link_container add_info_cont">
//             <div className="input_cont">
//               <div className="name_input">
//                 <label htmlFor="Name">Name</label>
//                 <input type="text" placeholder="Name *" id="name" />
//               </div>
//               <div className="link">
//                 <label htmlFor="Link">Link *</label>
//                 <input type="text" placeholder="Link *" id="link" />
//               </div>
//             </div>
//             <Button variant="remove">REMOVE</Button>
//           </div>
//           <div className="add_button">
//             <Button variant="add">ADD</Button>
//           </div>
//         </div>
//         <div className="question_container">
//           <input type="checkbox" name="answer" id="question" />
//           <p className="pc_and_internet">Have a computer and internet</p>
//         </div>
//         <div className="submit">
//           <Button variant="submit">SUBMIT</Button>
//         </div>
//       </form>
//     </div>
//   );
// };
