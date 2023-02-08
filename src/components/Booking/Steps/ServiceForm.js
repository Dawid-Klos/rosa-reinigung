import React from "react";

import { Field } from "formik";

import { cardsData } from "../../../helpers/formData";

const ServiceForm = ({ service, pickService }) => {
  return (
    <>
      <h3 className="services-cards__heading" id="services">
        Klicken Sie auf den Dienst, der Sie interessiert, um ihn auszuwählen.
      </h3>
      <div className="services-cards" role="group" aria-labelledby="services">
        {cardsData.map((card) => (
          <label className="services-cards__label" key={card.id} onClick={() => pickService(card.value)}>
            <img className="services-cards__icon" src={card.icon} alt="" />
            <Field className="services-cards__field" type="radio" name="picked" value={card.value} />
            <p className="services-cards__title">{card.title}</p>
          </label>
        ))}
      </div>
      <span className="services-cards__status">
        Ausgewählter Dienst: {!service ? "Nicht ausgewählt" : service}
        {console.log(service, "<-- picked")}
      </span>
    </>
  );
};

export default ServiceForm;
