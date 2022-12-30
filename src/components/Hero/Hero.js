import React from "react";

import "../../styles/hero.scss";
import LocationIcon from "../../images/icons/icon-location.svg";
import ArrowRightIcon from "../../images/icons/icon-arrow-right.svg";
import HeroImage from "../../images/img-line-hero.png";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-content__location">
                    <img src={LocationIcon} alt="Location icon" />
                    <p>Wir bieten Dienstleistungen in <span>Hamburg</span></p>
                </div>
                <h1 className="hero-content__heading">Moin moin, schön, dass Du da bist!</h1>
                <p className="hero-content__description">Ich bin Pamela, und <strong>Rosa Reinigung</strong> ist mein Unternehmen, das seit 2021 besteht. Es ist das Ergebnis von meiner großen Liebe zur Sauberkeit im weitesten Sinne. Mit Hilfe unserer Unternehmen können Sie Ihre Zeit für die wöchentliche Reinigung, die saisonale Fensterreinigung und überstehen Sie Ihren Umzug völlig stressfrei. Wir veranstaltenjedes Zimmer in Ihrem Haus, vom Dachboden bis zum Keller, damit die Sauberkeit Ihr ständiger Gast ist.
                </p>
                <a className="hero-content__call-to-action" href="#form">
                    <p>Terminvereinbarung</p>
                    <img src={ArrowRightIcon} alt="Arrow pointing to right" />
                </a>
            </div>
            <div className="hero-image">
                <img className="hero-image__lines" src={HeroImage} alt="Owner of Rosa Reinigung, surrounded by a pink line that circles around her" />
            </div>
        </section>
    )
}

export default Hero