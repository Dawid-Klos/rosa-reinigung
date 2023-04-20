import React from "react";

import { addressFieldsValues } from "../../../helpers/formData";
import TickIcon from "../../../images/icons/icon-check-mark.svg";

import { Field } from "formik";

const AddressForm = ({ errors, touched, values }) => {
  return (
    <>
      {addressFieldsValues.map((field) => (
        <div className="form__field" key={field.id}>
          <label className="form__field--label" htmlFor={field.htmlFor}>
            {field.label}
          </label>
          <div className={`form__input-wrapper ${errors[field.htmlFor] && touched[field.htmlFor] ? "error" : ""}`}>
            <img className="form__field--icon" src={field.icon} alt="" />
            <Field
              className="form__field--input"
              id={field.htmlFor}
              name={field.htmlFor}
              placeholder={field.placeholder}
            />
          </div>
          {errors[field.htmlFor] && touched[field.htmlFor] ? (
            <span className="form__error">{errors[field.htmlFor]}</span>
          ) : null}
        </div>
      ))}

      <div className="form__policy">
        <label className="form__tick-box" htmlFor="termsOfService">
          <Field className="form__tick-box--field" type="checkbox" id="termsOfService" name="termsOfService" />
          {values.termsOfService ? <img src={TickIcon} alt="" /> : null}
        </label>

        <p className="form__policy-text">
          Ich habe die <a href="/politik">Datenschutzerklärung</a> gelesen und erkläre mich damit einverstanden.
        </p>
      </div>
      {errors.termsOfService && touched.termsOfService ? (
        <span className="form__error">{errors.termsOfService}</span>
      ) : null}
    </>
  );
};

export default AddressForm;
