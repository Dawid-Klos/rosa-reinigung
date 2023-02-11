import React, { useEffect, useState } from "react";
import { FORM_DETAILS_VARIANTS } from "../../../helpers/formData";

import CalendarIcon from "../../../images/icons/icon-calendar.svg";
import de from "date-fns/locale/de";
import "react-datepicker/dist/react-datepicker.css";

import DatePicker, { registerLocale } from "react-datepicker";
import { Field, useField } from "formik";

registerLocale("de", de);

const DetailsForm = ({ service, errors, touched }) => {
  const [values, setValues] = useState(null);

  const MyDatePicker = ({ name = "" }) => {
    const [field, meta, helpers] = useField(name);

    const { value } = meta;
    const { setValue } = helpers;

    return <DatePicker className="form__date-picker" {...field} selected={value} onChange={(date) => setValue(date)} />;
  };

  useEffect(() => {
    console.log(service);
    setValues(FORM_DETAILS_VARIANTS[service]);
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
      <div className="form__field">
        <label className="form__field--label" htmlFor="date">
          Datum der Zustellung
        </label>
        <div className="form__input-wrapper">
          <img className="form__field--icon" src={CalendarIcon} alt="" />
          <MyDatePicker locale="de" name="date" />
        </div>
        {errors.date && touched.date ? <span className="form__error">{errors.date}</span> : null}
      </div>
    </>
  );
};

export default DetailsForm;
