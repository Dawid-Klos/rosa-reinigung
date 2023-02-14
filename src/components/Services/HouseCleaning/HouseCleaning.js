import React, { useState } from "react";

import ServiceImage from "../../../images/img-services-01.svg";
import BasicServiceIcon from "../../../images/icons/icon-services-basic.svg";
import ExtraServiceIcon from "../../../images/icons/icon-services-extra.svg";
import CheckMarkIcon from "../../../images/icons/icon-check-mark.svg";

import tasks from "./tasks.json";
import Service from "../Service";

import { tabName } from "../../../helpers/constants";
const HouseCleaning = () => {
  const basicServiceTasks = tasks.basicServiceTasks;
  const extraServiceTasks = tasks.extraServiceTasks;

  const [activeTab, setActiveTab] = useState(0);

  const handleTabOpening = (tab) => {
    if (tab === activeTab) {
      setActiveTab(0);
      return;
    }

    if (tab === tabName.basic) {
      setActiveTab(tabName.basic);
    }

    if (tab === tabName.extra) {
      setActiveTab(tabName.extra);
    }
  };

  const servicesTabs = (
    <div className="house-cleaning">
      <div className="house-cleaning__buttons">
        <button
          onClick={() => handleTabOpening(tabName.basic)}
          className={`house-cleaning__button house-cleaning__button--basic ${
            activeTab === tabName.basic ? "house-cleaning__button--active" : ""
          }`}
          title="Klicken Sie hier, um die Basis-Reinigung zu sehen"
          type="button"
        >
          Die BASIS-Reingung
        </button>

        <button
          onClick={() => handleTabOpening(tabName.extra)}
          className={`house-cleaning__button house-cleaning__button--extra ${
            activeTab === tabName.extra ? "house-cleaning__button--active" : ""
          }`}
          title="Klicken Sie hier, um Extra-Reinigung zu sehen"
          type="button"
        >
          Die EXTRA-Reingung
        </button>
      </div>
      <div
        className={`house-cleaning__tab house-cleaning__tab--basic ${
          activeTab === tabName.basic ? "house-cleaning__tab--active" : null
        }`}
      >
        <img src={BasicServiceIcon} alt="Two hands indicating the quality of the service" loading="lazy" />
        <h4>Die BASIS-Reinigung</h4>
        <ul className="tab-list">
          {basicServiceTasks.map((task, i) => {
            return (
              <li className="tab-list__row" key={i}>
                <img src={CheckMarkIcon} alt="Pink check mark" />
                <p>{task}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={`house-cleaning__tab house-cleaning__tab--extra ${
          activeTab === tabName.extra ? "house-cleaning__tab--active" : null
        }`}
      >
        <img src={ExtraServiceIcon} alt="Two hands indicating the quality of the service" loading="lazy" />
        <h4>Die EXTRA-Reinigung</h4>
        <div className="tab-list">
          {extraServiceTasks.map((task, i) => {
            return (
              <div className="tab-list__row" key={i}>
                <img src={CheckMarkIcon} alt="Pink check mark" />
                <p>{task}</p>
              </div>
            );
          })}
          <p>und weitere nach Absprache und gemeinsamen Vereinbarungen.</p>
        </div>
      </div>
    </div>
  );

  const props = {
    title: "Hausreinigung",
    description:
      'Wir werden uns an Ihre Bedürfnisse, Erwartungen und Ihr Budget anpassen. Sie können eine laufende Reinigung Ihrer Wohnung auf wöchentlicher oder zweiwöchentlicher Basis oder einen einmaligen Service bestellen. Wir reinigen von Montag bis Freitag von 6 Uhr bis 20 Uhr. Wir unterteilen unsere Dienstleistungen in "Basis-Reinigung" und "Extra-Reinigung". ',
    isReversed: false,
    image: ServiceImage,
    imageAlt: "A person drinking a tea on the sofa in a clean room",
    hasBackground: false,
    backgroundPath: "",
    extraStuff: servicesTabs,
  };

  return <Service {...props} />;
};

export default HouseCleaning;
