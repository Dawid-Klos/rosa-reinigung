import React from "react";

import "../../styles/hero.scss";
import LocationIcon from "../../images/icons/icon-location.svg";
import ArrowRightIcon from "../../images/icons/icon-arrow-right.svg";
import HeroImage from "../../images/img-line-hero.webp";
import HeroImageMobile from "../../images/img-line-hero-mobile.webp";

import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-content__location">
          <img src={LocationIcon} alt="" />
          <p>
            Wir bieten Dienstleistungen in <span>Hamburg</span>
          </p>
        </div>
        <h1 className="hero-content__heading">
          <span className="hero-content__heading--special"> Moin moin</span>, schön, dass Du da bist!
        </h1>
        <p className="hero-content__description">
          Ich bin Pamela, und <strong>Rosa Reinigung</strong> ist mein Unternehmen, das seit 2021 besteht. Es ist das
          Ergebnis von meiner großen Liebe zur Sauberkeit im weitesten Sinne. Mit Hilfe unserer Unternehmen können Sie
          Ihre Zeit für die wöchentliche Reinigung, die saisonale Fensterreinigung und überstehen Sie Ihren Umzug völlig
          stressfrei. Wir veranstaltenjedes Zimmer in Ihrem Haus, vom Dachboden bis zum Keller, damit die Sauberkeit Ihr
          ständiger Gast ist.
        </p>
        <a className="hero-content__call-to-action" href="#form">
          <p>Terminvereinbarung</p>
          <img src={ArrowRightIcon} alt="" />
        </a>
      </div>
      <div className="hero-image">
        <img
          className="hero-image__lines"
          src={isMobile ? HeroImageMobile : HeroImage}
          alt="Inhaberin des Unternehmens Rosa Reiniggung, das professionelle Reinigungsdienste anbietet"
        />
      </div>
    </section>
  );
};

export default Hero;
