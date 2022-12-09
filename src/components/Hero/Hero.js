import React from "react";

import "../../styles/hero.scss";
import Lines from "../../images/img-line-detail.svg";
import Person from "../../images/img-hero-person.png";
import LocationIcon from "../../images/icons/icon-location.svg";
import ArrowRightIcon from "../../images/icons/icon-arrow-right.svg";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-content__location">
                    <img src={LocationIcon} alt="Location icon" />
                    <p>Wir bieten Dienstleistungen in <span>Hamburg</span></p>
                </div>
                <h1 className="hero-content__heading">Moin moin, schön, dass Du da bist!</h1>
                <p className="hero-content__description">Ich bin Pamela, und Rosa Reinigung ist mein Unternehmen, das seit 2021 besteht. Es ist das Ergebnis von meiner großen Liebe zur Sauberkeit im weitesten Sinne. Mit Hilfe unserer Unternehmen können Sie Ihre Zeit für die wöchentliche Reinigung, die saisonale Fensterreinigung und überstehen Sie Ihren Umzug völlig stressfrei. Wir veranstaltenjedes Zimmer in Ihrem Haus, vom Dachboden bis zum Keller, damit die Sauberkeit Ihr ständiger Gast ist.
                </p>
                <a className="hero-content__call-to-action">
                    <p href="#form">Terminvereinbarung</p>
                    <img src={ArrowRightIcon} alt="Arrow pointing to right" /> 
                </a>
            </div>
            <div className="hero-image">
                <img className="hero-image__lines" src={Lines} alt="Pink lines in the background running around the picture" />
                <img className="hero-image__person" src={Person} alt="The owner of the Rosa Reinigung - cleaning services company based in Hamburg" />

            </div>

        </section>
    )
}

export default Hero