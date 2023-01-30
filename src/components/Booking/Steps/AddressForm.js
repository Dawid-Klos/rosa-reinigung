import React from "react";

import EmailIcon from "../../../images/icons/icon-form-email.svg";
import NameIcon from "../../../images/icons/icon-form-name.svg";
import PhoneIcon from "../../../images/icons/icon-form-phone.svg";
import LocationIcon from "../../../images/icons/icon-form-location.svg";

import { Field } from "formik";

const AddressForm = () => {
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

      <div className="booking__field">
        <label className="booking__field--label" htmlFor="email">
          Email
        </label>
        <div className="booking__input-wrapper">
          <img className="booking__field--icon" src={EmailIcon} alt="" />
          <Field className="booking__field--input" id="email" name="email" placeholder="mateo@gmail.com" type="email" />
        </div>
      </div>

      <div className="booking__field">
        <label className="booking__field--label" htmlFor="phone">
          Rufnummer
        </label>
        <div className="booking__input-wrapper">
          <img className="booking__field--icon" src={PhoneIcon} alt="" />
          <Field className="booking__field--input" id="phone" name="phone" placeholder="0211 5684962" />
        </div>
      </div>

      <div className="booking__field">
        <label className="booking__field--label" htmlFor="houseNumber">
          Hausnummer und Straße
        </label>
        <div className="booking__input-wrapper">
          <img className="booking__field--icon" src={LocationIcon} alt="" />
          <Field
            className="booking__field--input"
            id="houseNumber"
            name="houseNumber"
            placeholder="Sankt Jakobikirche, Jakobikirchhof"
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
          <Field className="booking__field--input" id="postcode" name="postcode" placeholder="20095" type="text" />
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

export default AddressForm;
