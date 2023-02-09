import React, { useState } from "react";

import AddressForm from "./Steps/AddressForm";
import ServiceForm from "./Steps/ServiceForm";
import DetailsForm from "./Steps/DetailsForm";
import Checkout from "./Steps/Checkout";

import { statusBarSteps, STEP_FIELDS } from "../../helpers/formData";
import { stepOneSchema, stepTwoSchema } from "./ValidationSchema";

import ArrowRightIcon from "../../images/icons/icon-arrow-right.svg";
import Lines from "../../images/img-line-booking.svg";

import "../../styles/booking.scss";
import "../../styles/steps.scss";

import { Formik, Form } from "formik";

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [pickedService, setPickedService] = useState(null);
  const [currentSchema, setCurrentSchema] = useState(stepOneSchema);

  const pickService = React.useCallback((picked) => {
    setPickedService(picked);
  }, []);

  const renderCurrentStep = (step, errors, touched) => {
    switch (step) {
      case 0:
        setCurrentSchema(stepOneSchema);
        return <AddressForm errors={errors} touched={touched} />;
      case 1:
        setCurrentSchema(stepTwoSchema);
        return <ServiceForm errors={errors} touched={touched} service={pickedService} pickService={pickService} />;
      case 2:
        setCurrentSchema();
        return <DetailsForm service={pickedService} />;
      case 3:
        return <Checkout />;
      default:
        return <p>Error - Check the code!</p>;
    }
  };

  const handleCurrentStep = (reverse, validateForm, setFieldTouched) => {
    validateForm().then((errors) => {
      if (Object.keys(errors).length !== 0) {
        console.log(errors);
        STEP_FIELDS[currentStep].forEach((field) => {
          setFieldTouched(field);
        });
      } else {
        if (currentStep < 0 || currentStep > 3) return;
        console.log("no errors");
        if (reverse === "reverse") {
          setCurrentStep((step) => step - 1);
        } else {
          setCurrentStep((step) => step + 1);
        }
      }
    });
  };

  const renderFormButtons = (step, validateForm, setFieldTouched) => {
    return step > 0 ? (
      <div className="form__button-wrapper">
        <button
          className="form__button--ghost"
          type="button"
          onClick={() => handleCurrentStep("reverse", validateForm, setFieldTouched)}
        >
          vorheriger Schritt
        </button>
        <button
          className="form__button"
          type="submit"
          onClick={() => handleCurrentStep("", validateForm, setFieldTouched)}
        >
          <p>Weiter</p>
          <img src={ArrowRightIcon} alt="Arrow pointing to right" />
        </button>
      </div>
    ) : (
      <button
        className="form__button"
        type="button"
        onClick={() => handleCurrentStep("", validateForm, setFieldTouched)}
      >
        <p>Weiter</p>
        <img src={ArrowRightIcon} alt="Arrow pointing to right" />
      </button>
    );
  };

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    street: "",
    city: "",
    picked: "",
    termsOfService: false,
    date: "",
    frequency: "",
    houseSize: "",
    cleaningProducts: "",
    timeOfService: "",
    buildingType: "",
    numberOfWindows: "",
    areaToOrganize: "",
    houseStatus: "",
    additionalServices: "",
    movingStreet: "",
    movingCity: "",
  };

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
        initialValues={initialValues}
        validationSchema={currentSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 4));
        }}
      >
        {({ validateForm, handleSubmit, errors, touched, setFieldTouched }) => (
          <Form className={`form ${currentStep === 1 ? "form__service" : ""}`}>
            {renderCurrentStep(currentStep, errors, touched)}
            {renderFormButtons(currentStep, validateForm, setFieldTouched)}
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Booking;
