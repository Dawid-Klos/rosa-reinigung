import React from "react";

import "../../styles/services.scss";

const Service = ({ title, description, isReversed, image, imageAlt, hasBackground, backgroundPath, extraStuff }) => {
  const desc = description;

  const handleText = () => {
    const extraText = document.querySelector(".service-content__description--extra-text");
    const button = document.querySelector(".service-content__button");

    extraText.classList.toggle("service-content__description--show-extra-text");

    if (extraText.classList.contains("service-content__description--show-extra-text")) {
      button.textContent = "weniger lesen";
    } else {
      button.textContent = "mehr lesen";
    }
  };

  return (
    <section className={`service ${isReversed ? "service--reverse" : ""}`}>
      <div className="service-content">
        <h3 className="service-content__title">{title}</h3>
        {desc.length > 400 ? (
          <div className="service-content__container">
            <p className="service-content__description">
              {desc.substring(0, 418)}
              <span className="service-content__description--extra-text">{desc.substring(418)}</span>
            </p>
            <button className="service-content__button" onClick={handleText} type="button">
              Mehr lesen
            </button>
          </div>
        ) : (
          <p className="service-content__description">{desc}</p>
        )}
        {extraStuff !== null ? extraStuff : null}
      </div>

      <div className="service__img-wrapper">
        <img className="service__img" src={image} alt={imageAlt} />
      </div>

      {hasBackground ? (
        <div className="service__lines">
          <img className="service__lines" src={backgroundPath} alt="" />
        </div>
      ) : null}
    </section>
  );
};

export default Service;
