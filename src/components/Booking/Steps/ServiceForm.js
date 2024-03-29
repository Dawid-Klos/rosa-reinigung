import React from "react";

import { Field } from "formik";

import { cardsData, SERVICES_TYPES } from "../../../helpers/formData";

const ServiceForm = ({ service, pickService, errors, touched }) => {
  return (
    <>
      <h3 className="services-cards__heading" id="services">
        Klicken Sie auf den Dienst, der Sie interessiert, um ihn auszuwählen.
      </h3>
      <div className="services-cards" role="group" aria-labelledby="services">
        {cardsData.map((card) => (
          <label
            className={`services-cards__label ${service === card.value ? "services-cards__label--focus" : ""}`}
            key={card.id}
          >
            <img className="services-cards__icon" src={card.icon} alt="" />
            <Field
              className="services-cards__field"
              type="radio"
              name="picked"
              value={card.value}
              onClick={() => pickService(card.value)}
            />
            <p className="services-cards__title">{card.title}</p>
          </label>
        ))}
      </div>
      {errors.picked && touched.picked ? <span className="form__error">{errors.picked}</span> : null}
      <span className="services-cards__status">
        Ausgewählter Dienst: {!service ? "Nicht ausgewählt" : SERVICES_TYPES[service]}
      </span>
    </>
  );
};

export default ServiceForm;
