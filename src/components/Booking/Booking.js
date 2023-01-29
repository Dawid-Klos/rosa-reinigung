import React, { useState } from "react";

import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";

import UserIcon from "../../images/icons/icon-user.svg";
import ChoiceIcon from "../../images/icons/icon-choice.svg";
import DetailsIcon from "../../images/icons/icon-details.svg";
import SuccessIcon from "../../images/icons/icon-success.svg";
import Lines from "../../images/img-line-booking.svg";

import "../../styles/booking.scss";

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const formSteps = [
    {
      stepNumber: 0,
      component: <StepOne />,
    },
    {
      stepNumber: 1,
      component: <StepTwo />,
    },
  ];

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
        <div className="booking__steps">
          <div className="booking__steps-bar">
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
      <>
        {formSteps.map((step) =>
          step.stepNumber === currentStep ? (
            <form className="booking__form" key={step.stepNumber}>
              {step.component}
            </form>
          ) : null
        )}
      </>

      <button onClick={() => setCurrentStep((prevstate) => prevstate + 1)}>Next</button>
    </section>
  );
};

export default Booking;
