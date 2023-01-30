import React from "react";

import NameIcon from "../../../images/icons/icon-form-name.svg";

import { Field } from "formik";

const ServiceForm = () => {
  return (
    <>
      <div className="booking__field">
        <label className="booking__field--label" htmlFor="name">
          Name
        </label>
        <div className="booking__input-wrapper">
          <img className="booking__field--icon" src={NameIcon} alt="" />
          <Field className="booking__field--input" id="name" name="name" placeholder="Matteo Müller" />
        </div>
      </div>
    </>
  );
};

export default ServiceForm;
