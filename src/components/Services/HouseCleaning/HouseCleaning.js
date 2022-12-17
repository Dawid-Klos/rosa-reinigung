import React from "react";

import Service from "../Service";
import ServiceImage from "../../../images/img-services-01.svg";

const HouseCleaning = () => {

    const servicesTabs = (
        <div className="house-cleaning">
            <p>It actually works!</p>
        </div>
    );

    const props = {
        title: 'Hausreinigung',
        description: 'Wir werden uns an Ihre Bedürfnisse, Erwartungen und Ihr Budget anpassen. Sie können eine laufende Reinigung Ihrer Wohnung auf wöchentlicher oder zweiwöchentlicher Basis oder einen einmaligen Service bestellen. Wir reinigen von Montag bis Freitag von 6 Uhr bis 20 Uhr. Wir unterteilen unsere Dienstleistungen in "Basis-Reinigung" und "Extra-Reinigung". ',
        isReversed: false,
        image: ServiceImage,
        imageAlt: 'A person drinking a tea on the sofa in a clean room',
        extraStuff: servicesTabs
    };

    return (
        <Service {...props} />
    )
}

export default HouseCleaning;