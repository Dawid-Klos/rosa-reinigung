import React from "react";

import Service from "../Service";
import ServiceImage from "../../../images/img-services-05.svg";
import WarningIcon from "../../../images/icons/icon-warning.svg";
import CheckIcon from "../../../images/icons/icon-check-mark.svg";
import Lines from "../../../images/img-line-move-out.svg";

const HouseOrganisation = () => {

    const pointsAndWarningMessage = (
        <div className="moving-out">
            <ul className="moving-out__points">
                <li className="moving-out__point">
                    <img src={CheckIcon} alt="Pink check mark" />
                    <p>Organisieren und Koordinieren der Verpackung</p>
                </li>
                <li className="moving-out__point">
                    <img src={CheckIcon} alt="Pink check mark" />
                    <p>Auspacken Ihrer Sachen in der neuen Wohnung</p>
                </li>
                <li className="moving-out__point">
                    <img src={CheckIcon} alt="Pink check mark" />
                    <p>Haushalts</p>
                </li>
                <li className="moving-out__point">
                    <img src={CheckIcon} alt="Pink check mark" />
                    <p>Ihr neues Zuhause so einrichten, dass es bequem ist für alle Mitglieder Ihres</p>
                </li>
            </ul>
            <div className="moving-out__message">
                <div className="moving-out__warning">
                    <img className="moving-out__img" src={WarningIcon} alt="Warning sign" />
                    <p className="moving-out__text">Achtung!</p>
                </div>
                <p className="moving-out__info">Wir arbeiten mit einer Renovierungsfirma und einer Elektrofirma zusammen. Wir können Ihr Interieur von Grund auf neu gestalten.</p>
            </div>
        </div>

    );

    const props = {
        title: 'Umzüge',
        description: 'Die Vorstellung, die nächsten Wochen auf Pappkartons zu leben, kann einem Kopfschmerzen bereiten. Es lohnt sich also, diese Aufgabe den Profis anzuvertrauen, damit Sie Ihre neue Wohnung in vollen Zügen genießen können - und vor allem, damit Ihre neue Wohnung von Anfang an in Ordnung ist. Dergesamte Umfang des Umzugsdienstes umfasst:',
        isReversed: false,
        image: ServiceImage,
        imageAlt: 'A parent showing child the choice of new home in the smartphone',
        hasBackground : true,
        backgroundPath: Lines,
        extraStuff: pointsAndWarningMessage
    };

    return (
        <Service {...props} />
    )
}

export default HouseOrganisation;