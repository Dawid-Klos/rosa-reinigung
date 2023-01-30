import React from "react";

import NameIcon from "../../../images/icons/icon-form-name.svg";
import PhoneIcon from "../../../images/icons/icon-form-phone.svg";
import LocationIcon from "../../../images/icons/icon-form-location.svg";

import { Field } from "formik";

const DetailsForm = () => {
  return (
    <>
      <div className="booking__field">
        <label className="booking__field--label" htmlFor="name">
          Name
        </label>
        <div className="booking__input-wrapper">
          <img className="booking__field--icon" src={NameIcon} alt="" />
          <Field className="booking__field--input" id="name" name="name" placeholder="Jakbson von Kubelek" />
        </div>
      </div>

      <div className="booking__field">
        <label className="booking__field--label" htmlFor="phone">
          Rufnummer
        </label>
        <div className="booking__input-wrapper">
          <img className="booking__field--icon" src={PhoneIcon} alt="" />
          <Field className="booking__field--input" id="phone" name="phone" placeholder="012345678" />
        </div>
      </div>

      <div className="booking__field">
        <label className="booking__field--label" htmlFor="house-number">
          Hausnummer und Straße
        </label>
        <div className="booking__input-wrapper">
          <img className="booking__field--icon" src={LocationIcon} alt="" />
          <Field
            className="booking__field--input"
            id="house-number"
            name="house-number"
            placeholder="jane@acme.com"
            type="text"
          />
        </div>
      </div>

      <div className="booking__field">
        <label className="booking__field--label" htmlFor="postcode">
          Postanschrift
        </label>
        <div className="booking__input-wrapper">
          <img className="booking__field--icon" src={LocationIcon} alt="" />
          <Field
            className="booking__field--input"
            id="postcode"
            name="postcode"
            placeholder="22041–22769"
            type="text"
          />
        </div>
      </div>

      <div className="booking__field">
        <label className="booking__field--label" htmlFor="city">
          Stadt
        </label>
        <div className="booking__input-wrapper">
          <img className="booking__field--icon" src={LocationIcon} alt="" />
          <Field className="booking__field--input" id="city" name="city" placeholder="Hamburg" type="text" />
        </div>
      </div>
    </>
  );
};

export default DetailsForm;
