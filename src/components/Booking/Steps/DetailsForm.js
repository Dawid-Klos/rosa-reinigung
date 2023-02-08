import React, { useEffect, useState } from "react";
import { FORM_DETAILS_VARIANTS } from "../../../helpers/formData";

import { Field, useField } from "formik";

const DetailsForm = ({ service }) => {
  const [values, setValues] = useState(null);

  const DatePicker = ({ name = "" }) => {
    const [field, meta, helpers] = useField(name);

    const { value } = meta;
    const { setValue } = helpers;

    return <input {...field} type="date" selected={value} onChange={(date) => setValue(date)} />;
  };

  useEffect(() => {
    setValues(FORM_DETAILS_VARIANTS[service]);
    console.log(service);
  }, [service]);

  return (
    <>
      {values ? (
        values.map((field) => (
          <div className="form__field" key={field.id}>
            <label className="form__field--label" htmlFor={field.htmlFor}>
              {field.label}
            </label>
            <div className="form__input-wrapper">
              <img className="form__field--icon" src={field.icon} alt="" />
              <Field
                className="form__field--input"
                id={field.htmlFor}
                name={field.htmlFor}
                type={field.htmlFor}
                placeholder={field.placeholder}
              />
            </div>
          </div>
        ))
      ) : (
        <div>An error occured</div>
      )}
      <DatePicker name="date" />
    </>
  );
};

export default DetailsForm;
