import React, { useState } from "react";

import { addressFieldsValues } from "../../../helpers/formData";
import TickIcon from "../../../images/icons/icon-check-mark.svg";

import { Field } from "formik";

const AddressForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBox = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <>
      {addressFieldsValues.map((field) => (
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
              placeholder={field.placeholder}
            />
          </div>
        </div>
      ))}

      <div className="form__policy">
        <label className="form__tick-box">
          <Field className="form__tick-box--field" type="checkbox" onClick={handleCheckBox} name="toggle" />
          {isChecked === true ? <img src={TickIcon} alt="" /> : null}
        </label>
        <p className="form__policy-text">
          Ich habe die <a href="/politik">Datenschutzerklärung</a> gelesen und erkläre mich damit einverstanden.
        </p>
      </div>
    </>
  );
};

export default AddressForm;
