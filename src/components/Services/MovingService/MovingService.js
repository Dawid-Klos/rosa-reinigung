import React from "react";

import Service from "../Service";
import ServiceImage from "../../../images/img-services-05.svg";
import WarningIcon from "../../../images/icons/icon-warning.svg";
import CheckIcon from "../../../images/icons/icon-check-mark.svg";
import Lines from "../../../images/img-line-move-out.svg";

const MovingService = () => {
  const pointsAndWarningMessage = (
    <div className="moving-out">
      <ul className="moving-out__points">
        <li className="moving-out__point">
          <img src={CheckIcon} alt="" />
          <p>Organisieren und Koordinieren der Verpackung</p>
        </li>
        <li className="moving-out__point">
          <img src={CheckIcon} alt="" />
          <p>Auspacken Ihrer Sachen in der neuen Wohnung</p>
        </li>
        <li className="moving-out__point">
          <img src={CheckIcon} alt="" />
          <p>Wir packen aus und organisieren Dinge in Ihrem neuen Zuhause</p>
        </li>
        <li className="moving-out__point">
          <img src={CheckIcon} alt="" />
          <p>Ihr neues Zuhause so einrichten, dass es bequem ist für alle Mitglieder Ihres</p>
        </li>
      </ul>
      <div className="moving-out__message">
        <div className="moving-out__warning">
          <img className="moving-out__img" src={WarningIcon} alt="" />
          <p className="moving-out__text">Informationen.</p>
        </div>
        <p className="moving-out__info">
          Wir arbeiten mit einer Renovierungsfirma und einer Elektrofirma zusammen. Wir können Ihr Interieur von Grund
          auf neu gestalten.
        </p>
      </div>
    </div>
  );

  const props = {
    title: "Umzug",
    description:
      "Die Vorstellung, die nächsten Wochen auf Pappkartons zu leben, kann einem Kopfschmerzen bereiten. Es lohnt sich also, diese Aufgabe den Profis anzuvertrauen, damit Sie Ihre neue Wohnung in vollen Zügen genießen können - und vor allem, damit Ihre neue Wohnung von Anfang an in Ordnung ist. Dergesamte Umfang des Umzugsdienstes umfasst:",
    isReversed: false,
    image: ServiceImage,
    imageAlt: "Ein Elternteil zeigt seinem Kind die Wahl seines neuen Zuhauses auf dem Smartphone",
    hasBackground: true,
    backgroundPath: Lines,
    extraStuff: pointsAndWarningMessage,
  };

  return <Service {...props} />;
};

export default MovingService;
