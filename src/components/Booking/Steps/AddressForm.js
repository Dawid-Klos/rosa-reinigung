import React, { useState } from "react";

import EmailIcon from "../../../images/icons/icon-form-email.svg";
import NameIcon from "../../../images/icons/icon-form-name.svg";
import PhoneIcon from "../../../images/icons/icon-form-phone.svg";
import LocationIcon from "../../../images/icons/icon-form-location.svg";
import TickIcon from "../../../images/icons/icon-check-mark.svg";

import { Field } from "formik";

const AddressForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBox = () => {
    setIsChecked((prev) => !prev);
  };

  const formFieldsValues = [
    {
      id: 0,
      label: "Name",
      icon: NameIcon,
      htmlFor: "name",
      placeholder: "Matteo Müller",
      type: "text",
    },
    {
      id: 1,
      label: "Email",
      icon: EmailIcon,
      htmlFor: "email",
      placeholder: "mateo@gmail.com",
      type: "email",
    },
    {
      id: 2,
      label: "Rufnummer",
      icon: PhoneIcon,
      htmlFor: "phone",
      placeholder: "0211 5684962",
      type: "tel",
    },
    {
      id: 3,
      label: "Hausnummer und Straße",
      icon: LocationIcon,
      htmlFor: "houseNumber",
      placeholder: "Sankt Jakobikirche, Jakobikirchhof",
      type: "text",
    },
    {
      id: 4,
      label: "Postanschrift",
      icon: LocationIcon,
      htmlFor: "postcode",
      placeholder: "20095",
      type: "text",
    },
    {
      id: 5,
      label: "Stadt",
      icon: LocationIcon,
      htmlFor: "city",
      placeholder: "Hamburg",
      type: "text",
    },
  ];

  return (
    <>
      {formFieldsValues.map((field) => (
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
