import React from "react";

import Service from "../Service";
import ServiceImage from "../../../images/img-services-04.svg";
import WarningIcon from "../../../images/icons/icon-warning.svg";

const HouseOrganisation = () => {
  const warningMessage = (
    <div className="house-organisation">
      <div className="house-organisation__warning">
        <img className="house-organisation__img" src={WarningIcon} alt="Warning sign" />
        <p className="house-organisation__text">Achtung!</p>
      </div>
      <p className="house-organisation__info">
        Wir arbeiten mit einer Renovierungsfirma und einer Elektrofirma zusammen. Wir können Ihr Interieur von Grund auf
        neu gestalten.
      </p>
    </div>
  );

  const props = {
    title: "Professionelle Hausorganisation",
    description:
      "Ich glaube, dass ein aufgeräumtes und gut organisiertes Zuhause der Beginn größerer Veränderungen im Leben ist Leben. Wenn jeder Raum richtig organisiert ist, ist das Leben viel Einfacher und angenehmer. Für mich ist es ein Lebensstil und mein tägliches Leben. Ich liebe es, Gleichgewicht und Harmonie in die Innenräume von meine Kunden mit. Ich schneide jede Einrichtung auf Ihre Bedürfnisse und die Ihrer Familie zu. Mit uns können Sie Organisieren Ihr ganzes Haus oder einen ausgewählten Raum, Kleiderschrank, Dachboden, Keller usw. Es ist eine Dienstleistung, die der Funktionalität von Innenräumen eine neue Dimension verleiht, indem sie Ästhetik und Sauberkeit zu Ihnen nach Hause. Die Zusammenarbeit beginnt mit einem BERATUNGSGESPRÄCH, in dem ich Sie kennenlernen, und den Raum, den Sie organisieren möchten. Während des Treffens nehme ich Messungen der Räume vor, mache Fotos und stelle fest Aktionsplan. Nach dem Treffen legen wir einen Termin für unsere Zusammenarbeit fest, und ich schicke ein Angebot.",
    isReversed: true,
    image: ServiceImage,
    imageAlt: "A person sitting on the floor with legs crossed, showing peace of mind",
    hasBackground: false,
    backgroundPath: "",
    extraStuff: warningMessage,
  };

  return <Service {...props} />;
};

export default HouseOrganisation;
