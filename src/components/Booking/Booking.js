import React, { useState, useEffect } from "react";

import AddressForm from "./Steps/AddressForm";
import ServiceForm from "./Steps/ServiceForm";
import DetailsForm from "./Steps/DetailsForm";
import Checkout from "./Steps/Checkout";

import { statusBarSteps, STEP_FIELDS, initialData } from "../../helpers/formData";
import { stepOneSchema, stepTwoSchema, stepThreeSchema } from "./ValidationSchema";

import ArrowRightIcon from "../../images/icons/icon-arrow-right.svg";
import Lines from "../../images/img-line-booking.svg";

import "../../styles/booking.scss";
import "../../styles/steps.scss";

import { Formik, Form } from "formik";
import emailjs from "@emailjs/browser";
import { useMediaQuery } from "react-responsive";

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [pickedService, setPickedService] = useState(null);
  const [currentSchema, setCurrentSchema] = useState(stepOneSchema);
  const [submitErrors, setSubmitErrors] = useState(null);

  const [loading, setLoading] = useState(false);

  const pickService = React.useCallback((picked) => {
    setPickedService(picked);
  }, []);

  const isSmallMobile = useMediaQuery({ query: "(max-width: 412px)" });

  useEffect(() => {
    switch (currentStep) {
      case 0:
        setCurrentSchema(stepOneSchema);
        break;
      case 1:
        setCurrentSchema(stepTwoSchema);
        break;
      case 2:
        setCurrentSchema(stepThreeSchema);
        break;
      default:
        setCurrentSchema(stepOneSchema);
    }
  }, [currentStep]);

  const renderCurrentStep = (errors, touched, values) => {
    switch (currentStep) {
      case 0:
        return <AddressForm errors={errors} touched={touched} values={values} />;
      case 1:
        return <ServiceForm errors={errors} touched={touched} service={pickedService} pickService={pickService} />;
      case 2:
        return <DetailsForm errors={errors} touched={touched} service={pickedService} />;
      case 3:
        return <Checkout values={values} submitErrors={submitErrors} />;
      default:
        return <p>Error - please refresh the page and try again!</p>;
    }
  };

  const handleCurrentStep = (reverse, validateForm, setFieldTouched) => {
    if (currentStep < 0 || currentStep >= 3) return;
    if (reverse === "reverse") {
      setCurrentStep((step) => step - 1);
    }
    validateForm().then((errors) => {
      if (Object.keys(errors).length !== 0) {
        STEP_FIELDS[currentStep].forEach((field) => {
          setFieldTouched(field);
        });
      } else {
        setCurrentStep((step) => step + 1);
      }
    });
  };

  const handleSubmit = (values, setSubmitting) => {
    console.log("the form being submitted...");
    setLoading(true);
    try {
      emailjs
        .send(process.env.GATSBY_SERVICE_ID, process.env.GATSBY_TEMPLATE_ID, values, process.env.GATSBY_PUBLIC_KEY)
        .then((res) => {
          if (res.status === 200) {
            console.log("Mail sent!");
            setSubmitErrors(false);
            setSubmitting(false);
            setLoading(false);
            setCurrentStep(3);
          } else {
            setSubmitErrors(res.status);
            console.log("submit errors", res.status);
            console.log("A HTTP error occured, ", res.status);
            setLoading(false);
            setCurrentStep(3);
          }
        });
    } catch (err) {
      setSubmitErrors(err);
      console.log("submit errors", err);
      console.log("An error occured, ", err);
      setLoading(false);
      setCurrentStep(3);
    }
  };

  return (
    <section className="booking">
      <div className="booking__heading-wrapper">
        <h2 className="booking__heading">Vereinbaren Sie einen Termin.</h2>
        <p className="booking__desc">Wahlen Sie die Art Der Dienstleistungen und beantworten Sie dann einige Fragen.</p>
      </div>

      <div className="booking__steps-wrapper">
        <img className="booking__lines" src={Lines} alt="" loading="lazy" />
        <div className="steps-container">
          <div className="steps-bar">
            {statusBarSteps.map((step) => (
              <div className={`step ${step.stepNumber === currentStep ? "step--active" : ""}`} key={step.stepNumber}>
                <div className="step__icon">
                  <img src={step.icon} alt="" />
                </div>
                <span className="step__title">{isSmallMobile ? step.mobileTitle : step.title}</span>
                <span className={`step__dot ${step.stepNumber === currentStep ? "step__dot--active" : ""}`}></span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Formik
        initialValues={initialData}
        validationSchema={currentSchema}
        onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
      >
        {({ validateForm, setFieldTouched, submitForm, isSubmitting, errors, touched, values }) => (
          <Form className={`form ${currentStep === 1 || currentStep === 3 ? "form__service" : ""}`}>
            {loading ? <span className="spinner"></span> : renderCurrentStep(errors, touched, values)}
            {currentStep > 2 || loading ? null : (
              <div className="form__button-wrapper">
                {currentStep === 0 ? null : (
                  <button
                    className="form__button--ghost"
                    type="button"
                    onClick={() => handleCurrentStep("reverse", validateForm, setFieldTouched)}
                  >
                    vorheriger Schritt
                  </button>
                )}
                <button
                  className="form__button"
                  type="button"
                  disabled={isSubmitting}
                  onClick={currentStep === 2 ? submitForm : () => handleCurrentStep("", validateForm, setFieldTouched)}
                >
                  <p>{currentStep === 2 ? "Einreichen" : "Weiter"}</p>
                  <img src={ArrowRightIcon} alt="Arrow pointing to right" />
                </button>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Booking;
