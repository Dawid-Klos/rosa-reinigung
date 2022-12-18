import React from "react";

import "../../styles/service.scss";

const Service = ({title, description, isReversed, image, imageAlt, extraStuff}) => {

    return(
        <section className={`service ${isReversed ? "service--reverse" : ""}`}>
            <div className="service-content">
                <h3 className="service-content__title">{title}</h3>
                <p className="service-content__description">{description}</p>
                {extraStuff !== null ? extraStuff : null}
            </div>
            <img src={image} alt={imageAlt} />

        </section>
    )
}

export default Service;