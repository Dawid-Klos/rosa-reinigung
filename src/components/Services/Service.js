import React from "react";

const Service = ({title, description, isReversed, image, imageAlt, extraStuff}) => {

    return(
        <section className={`service ${isReversed ? "service--reverse" : ""}`}>
            <div className="service-content">
                <h3 className="service__title">{title}</h3>
                <p className="service__description">{description}</p>
                {extraStuff !== null ? extraStuff : null}
            </div>
            <img src={image} alt={imageAlt} />

        </section>
    )
}

export default Service;