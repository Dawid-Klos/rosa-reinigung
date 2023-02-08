import React, { useState } from "react";

import AddressForm from "./Steps/AddressForm";
import ServiceForm from "./Steps/ServiceForm";
import DetailsForm from "./Steps/DetailsForm";
import Checkout from "./Steps/Checkout";

import ArrowRightIcon from "../../images/icons/icon-arrow-right.svg";
import UserIcon from "../../images/icons/icon-user.svg";
import ChoiceIcon from "../../images/icons/icon-choice.svg";
import DetailsIcon from "../../images/icons/icon-details.svg";
import SuccessIcon from "../../images/icons/icon-success.svg";
import Lines from "../../images/img-line-booking.svg";

import "../../styles/booking.scss";
import "../../styles/steps.scss";

import { Formik, Form } from "formik";

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [pickedService, setPickedService] = useState(null);

  const pickService = React.useCallback((picked) => {
    setPickedService(picked);
  }, []);

  const renderCurrentStep = (step) => {
    switch (step) {
      case 0:
        return <AddressForm />;
      case 1:
        return <ServiceForm service={pickedService} pickService={pickService} />;
      case 2:
        return <DetailsForm service={pickedService} />;
      case 3:
        return <Checkout />;
      default:
        return <p>Error - Check the code!</p>;
    }
  };

  const renderFormButtons = (step) => {
    return step > 0 ? (
      <div className="form__button-wrapper">
        <button
          className="form__button--ghost"
          type="button"
          onClick={() => setCurrentStep((prevstate) => (prevstate <= 3 ? prevstate - 1 : prevstate))}
        >
          vorheriger Schritt
        </button>
        <button
          className="form__button"
          type="button"
          onClick={() => setCurrentStep((prevstate) => (prevstate <= 3 ? prevstate + 1 : prevstate))}
        >
          <p>Weiter</p>
          <img src={ArrowRightIcon} alt="Arrow pointing to right" />
        </button>
      </div>
    ) : (
      <button
        className="form__button"
        type="button"
        onClick={() => setCurrentStep((prevstate) => (prevstate <= 3 ? prevstate + 1 : prevstate))}
      >
        <p>Weiter</p>
        <img src={ArrowRightIcon} alt="Arrow pointing to right" />
      </button>
    );
  };

  const statusBarSteps = [
    {
      stepNumber: 0,
      icon: UserIcon,
      title: "Unternehmen",
    },
    {
      stepNumber: 1,
      icon: ChoiceIcon,
      title: "Unsere Leistungen",
    },
    {
      stepNumber: 2,
      icon: DetailsIcon,
      title: "Servicedetails",
    },
    {
      stepNumber: 3,
      icon: SuccessIcon,
      title: "Senden",
    },
  ];

  return (
    <section className="booking">
      <div className="booking__heading-wrapper">
        <h2 className="booking__heading">Vereinbaren Sie einen Termin.</h2>
        <p className="booking__desc">Wahlen Sie die Art Der Dienstleistungen und beantworten Sie dann einige Fragen.</p>
      </div>

      <div className="booking__steps-wrapper">
        <img className="booking__lines" src={Lines} alt="" />
        <div className="steps-container">
          <div className="steps-bar">
            {statusBarSteps.map((step) => (
              <div className={`step ${step.stepNumber === currentStep ? "step--active" : ""}`} key={step.stepNumber}>
                <div className="step__icon">
                  <img src={step.icon} alt="" />
                </div>
                <span className="step__title">{step.title}</span>
                <span className={`step__dot ${step.stepNumber === currentStep ? "step__dot--active" : ""}`}></span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Formik
        initialValues={{
          name: "",
          phone: "",
          email: "",
          houseNumber: "",
          postcode: "",
          city: "",
          picked: "",
          toggle: false,
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 4));
        }}
      >
        <Form className={`form ${currentStep === 1 ? "form__service" : ""}`}>
          {renderCurrentStep(currentStep)}
          {renderFormButtons(currentStep)}
        </Form>
      </Formik>
    </section>
  );
};

export default Booking;
