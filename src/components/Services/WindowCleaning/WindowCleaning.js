import React from "react";

import Service from "../Service";
import ServiceImage from "../../../images/img-services-03.svg";

const WindowCleaning = () => {

    const props = {
        title: 'Fensterreinigung',
        description: 'Wir reinigen die Fenster in Ihrer Wohnung, Ihrem Büro, Ihrem Wohnzimmer usw. Wir reinigen keine Fenster in großer Höhe. Wir können das Glass allein oder ein Set zusammen mit den Fensterrahmen reinigen.',
        isReversed: false,
        image: ServiceImage,
        imageAlt: 'A person drinking a coffee looking trough a perfect clean window',
        extraStuff: null
    };

    return (
        <Service {...props} />
    )
}

export default WindowCleaning;