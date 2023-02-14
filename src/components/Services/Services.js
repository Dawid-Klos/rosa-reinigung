import React from "react";

import "../../styles/services.scss";
import Lines from "../../images/img-line-services.svg";
import Detail from "../../images/img-services-detail.svg";
import HouseCleaning from "./HouseCleaning/HouseCleaning";
import CompanyCleaning from "./CompanyCleaning/CompanyCleaning";
import WindowCleaning from "./WindowCleaning/WindowCleaning";
import HouseOrganisation from "./HouseOrganisation/HouseOrganisation";
import MovingService from "./MovingService/MovingService";

const Services = () => {
  return (
    <section className="services">
      <h2 className="services__heading">Unsere Dienstleistungen für Dich.</h2>
      <div className="services__images-wrapper">
        <img className="services__lines" src={Lines} alt="A woman falling through mess and cable on the floor" />
        <img className="services__detail" src={Detail} alt="" />
      </div>
      <HouseCleaning />
      <CompanyCleaning />
      <WindowCleaning />
      <HouseOrganisation />
      <MovingService />
    </section>
  );
};

export default Services;
