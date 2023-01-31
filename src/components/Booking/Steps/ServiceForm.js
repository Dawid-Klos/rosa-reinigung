import React from "react";

import { Field } from "formik";

import HouseCleaningIcon from "../../../images/icons/icon-form-house-cleaning.svg";
import CompanyCleaningIcon from "../../../images/icons/icon-form-company.svg";
import WindowsCleaningIcon from "../../../images/icons/icon-form-windows.svg";
import HouseOrganisationIcon from "../../../images/icons/icon-form-house.svg";
import MovingOutCleaningIcon from "../../../images/icons/icon-form-cleaning-after-moving.svg";
import MovingHouseCleaning from "../../../images/icons/icon-form-moving-house.svg";

const ServiceForm = (values) => {
  return (
    <>
      <h3 className="services-cards__heading" id="services">
        Drücken Sie auf den Dienst, für den Sie sich interessieren.
      </h3>
      <div className="services-cards" role="group" aria-labelledby="services">
        <label className="services-cards__label">
          <img className="services-cards__icon" src={HouseCleaningIcon} alt="" />
          <Field className="services-cards__field" type="radio" name="picked" value="0" />
          <p className="services-cards__title">Hausreinigung</p>
        </label>
        <label className="services-cards__label">
          <img className="services-cards__icon" src={CompanyCleaningIcon} alt="" />
          <Field className="services-cards__field" type="radio" name="picked" value="1" />
          <p className="services-cards__title">Reinigung von Büros, Arztpraxen, Theatern, Schulen usw.</p>
        </label>
        <label className="services-cards__label">
          <img className="services-cards__icon" src={WindowsCleaningIcon} alt="" />
          <Field className="services-cards__field" type="radio" name="picked" value="2" />
          <p className="services-cards__title">Fensterreinigung</p>
        </label>
        <label className="services-cards__label">
          <img className="services-cards__icon" src={HouseOrganisationIcon} alt="" />
          <Field className="services-cards__field" type="radio" name="picked" value="3" />
          <p className="services-cards__title">Entrümpelung (Decluttering) / Haushaltsorganisation</p>
        </label>
        <label className="services-cards__label">
          <img className="services-cards__icon" src={MovingOutCleaningIcon} alt="" />
          <Field className="services-cards__field" type="radio" name="picked" value="4" />
          <p className="services-cards__title">Aufräumen nach dem Auszug</p>
        </label>
        <label className="services-cards__label">
          <img className="services-cards__icon" src={MovingHouseCleaning} alt="" />
          <Field className="services-cards__field" type="radio" name="picked" value="5" />
          <p className="services-cards__title">Umzüge</p>
        </label>
      </div>
      <span className="services-cards__status">
        Ausgewählter Dienst: {values.picked === "" ? "Nicht ausgewählt" : values.picked}
      </span>
    </>
  );
};

export default ServiceForm;
