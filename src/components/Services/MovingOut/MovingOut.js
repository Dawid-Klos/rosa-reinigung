import React from "react";

import Service from "../Service";
import ServiceImage from "../../../images/img-services-05.svg";
import WarningIcon from "../../../images/icons/icon-warning.svg";
import CheckIcon from "../../../images/icons/icon-check-mark.svg";

const HouseOrganisation = () => {

    const pointsAndWarningMessage = (
        <div className="moving-out">
            <div className="moving-out__points">
                <div className="point">
                    <img src={CheckIcon} alt="Pink check mark" />
                    <p>Organisieren und Koordinieren der Verpackung</p>
                </div>
                <div className="point">
                    <img src={CheckIcon} alt="Pink check mark" />
                    <p>Auspacken Ihrer Sachen in der neuen Wohnung</p>
                </div>
                <div className="point">
                    <img src={CheckIcon} alt="Pink check mark" />
                    <p>Haushalts</p>
                </div>
                <div className="point">
                    <img src={CheckIcon} alt="Pink check mark" />
                    <p>Ihr neues Zuhause so einrichten, dass es bequem ist für alle Mitglieder Ihres</p>
                </div>
            </div>
            <div className="moving-out__message">
                <div className="warning">
                    <img src={WarningIcon} alt="Warning sign" />
                    <p>Achtung!</p>
                </div>
                <p>Wir arbeiten mit einer Renovierungsfirma und einer Elektrofirma zusammen. Wir können Ihr Interieur von Grund auf neu gestalten.</p>
            </div>
        </div>

    );

    const props = {
        title: 'Umzüge',
        description: 'Die Vorstellung, die nächsten Wochen auf Pappkartons zu leben, kann einem Kopfschmerzen bereiten. Es lohnt sich also, diese Aufgabe den Profis anzuvertrauen, damit Sie Ihre neue Wohnung in vollen Zügen genießen können - und vor allem, damit Ihre neue Wohnung von Anfang an in Ordnung ist. Dergesamte Umfang des Umzugsdienstes umfasst:',
        isReversed: false,
        image: ServiceImage,
        imageAlt: 'A parent showing child the choice of new home in the smartphone',
        extraStuff: pointsAndWarningMessage
    };

    return (
        <Service {...props} />
    )
}

export default HouseOrganisation;