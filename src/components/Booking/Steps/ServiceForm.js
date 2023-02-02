import React from "react";

import { Field } from "formik";

import HouseCleaningIcon from "../../../images/icons/icon-form-house-cleaning.svg";
import CompanyCleaningIcon from "../../../images/icons/icon-form-company.svg";
import WindowsCleaningIcon from "../../../images/icons/icon-form-windows.svg";
import HouseOrganisationIcon from "../../../images/icons/icon-form-house.svg";
import MovingOutCleaningIcon from "../../../images/icons/icon-form-cleaning-after-moving.svg";
import MovingHouseCleaning from "../../../images/icons/icon-form-moving-house.svg";

const ServiceForm = (values) => {
  const cardValues = [
    {
      id: 0,
      title: "Hausreinigung",
      icon: HouseCleaningIcon,
      value: 0,
    },
    {
      id: 1,
      title: "Reinigung von Büros, Arztpraxen, Theatern, Schulen usw.",
      icon: CompanyCleaningIcon,
      value: 1,
    },
    {
      id: 2,
      title: "Fensterreinigung",
      icon: WindowsCleaningIcon,
      value: 2,
    },
    {
      id: 3,
      title: "Entrümpelung (Decluttering) / Haushaltsorganisation",
      icon: HouseOrganisationIcon,
      value: 3,
    },
    {
      id: 4,
      title: "Aufräumen nach dem Auszug",
      icon: MovingOutCleaningIcon,
      value: 4,
    },
    {
      id: 5,
      title: "Umzüge",
      icon: MovingHouseCleaning,
      value: 5,
    },
  ];

  return (
    <>
      <h3 className="services-cards__heading" id="services">
        Klicken Sie auf den Dienst, der Sie interessiert, um ihn auszuwählen.
      </h3>
      <div className="services-cards" role="group" aria-labelledby="services">
        {cardValues.map((card) => (
          <label className="services-cards__label" key={card.id}>
            <img className="services-cards__icon" src={card.icon} alt="" />
            <Field className="services-cards__field" type="radio" name="picked" value={card.value} />
            <p className="services-cards__title">{card.title}</p>
          </label>
        ))}
      </div>
      <span className="services-cards__status">
        Ausgewählter Dienst: {!values.picked ? "Nicht ausgewählt" : values.picked}
        {console.log(values)}
      </span>
    </>
  );
};

export default ServiceForm;
