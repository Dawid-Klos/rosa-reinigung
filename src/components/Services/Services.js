import React from "react";

import "../../styles/services.scss";
import Lines from "../../images/img-services-detail.svg";
import HouseCleaning from "./HouseCleaning/HouseCleaning";
import CorporateCleaning from "./CorporateCleaning/CorporateCleaning";
import WindowCleaning from "./WindowCleaning/WindowCleaning";
import HouseOrganisation from "./HouseOrganisation/HouseOrganisation";
import MovingOut from "./MovingOut/MovingOut";

const Services = () => {
    return(
        <section className="services">
            <h2 className="services__heading">Unsere Dienstleistungen für Dich.</h2>
            <div className="services__image">
                <img className="services-image__lines" src={Lines} alt="A woman falling through mess and cable on the floor" />
            </div>
            <HouseCleaning />
            <CorporateCleaning />
            <WindowCleaning />
            <HouseOrganisation />
            <MovingOut />
        </section>
    )
}

export default Services;