import React from "react";

import NameIcon from "../../../images/icons/icon-form-name.svg";

import { Field } from "formik";

const ServiceForm = () => {
  return (
    <>
      <div className="booking__card" id="services">
        Picked
      </div>
      <div role="group" aria-labelledby="services">
        <label>
          <Field type="radio" name="picked" value="One" />
          Hausreinigung
        </label>
        <label>
          <Field type="radio" name="picked" value="Two" />
          Two
        </label>
        {/* <div>Picked: {values.picked}</div> */}
      </div>
    </>
  );
};

export default ServiceForm;
