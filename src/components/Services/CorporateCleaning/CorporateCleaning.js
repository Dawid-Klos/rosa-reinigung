import React from "react";

import Service from "../Service";
import ServiceImage from "../../../images/img-services-02.svg";
import Lines from "../../../images/img-line-corporate.svg";

const CorporateCleaning = () => {
  const props = {
    title: "Reinigung von Büros, Arztpraxen, Theatern, Schulen usw.",
    description:
      "Friseursalons,Schönheitssalons Bei Rosa Reinigung geht es nicht nur um die Reinigung und Organisation von Wohnungen. Mit uns können Sie jeden Raum Reinigen und Organisieren wir haben Erfahrung in der Reinigung von Büros, Hotels, Theatern,Schulen.. Wir sind offen für Ihren Vorschlag.",
    isReversed: true,
    image: ServiceImage,
    imageAlt: "A person vacuuming letters from the company floor",
    hasBackground: true,
    backgroundPath: Lines,
    extraStuff: null,
  };

  return <Service {...props} />;
};

export default CorporateCleaning;
