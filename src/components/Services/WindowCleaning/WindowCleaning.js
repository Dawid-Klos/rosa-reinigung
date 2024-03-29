import React from "react";

import Service from "../Service";
import ServiceImage from "../../../images/img-services-03.svg";
import Lines from "../../../images/img-line-windows.svg";

const WindowCleaning = () => {
  const props = {
    title: "Fensterreinigung",
    description:
      "Wir reinigen die Fenster in Ihrer Wohnung, Ihrem Büro, Ihrem Wohnzimmer usw. Wir reinigen keine Fenster in großer Höhe. Wir können das Glass allein oder ein Set zusammen mit den Fensterrahmen reinigen.",
    isReversed: false,
    image: ServiceImage,
    imageAlt: "Eine Person trinkt einen Kaffee und schaut durch ein perfektes, sauberes Fenster",
    hasBackground: true,
    backgroundPath: Lines,
    extraStuff: null,
  };

  return <Service {...props} />;
};

export default WindowCleaning;
