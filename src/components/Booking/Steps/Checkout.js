import React, { useEffect, useState } from "react";

import SuccessImg from "../../../images/img-form-success.svg";
import FailImg from "../../../images/img-form-fail.svg";
import "../../../styles/steps.scss";

const Checkout = ({ submitErrors }) => {
  const [loading, setLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(null);

  useEffect(() => {
    const errors = submitErrors;

    if (!errors) {
      setIsSuccess(true);
      setLoading(false);
    } else {
      setIsSuccess(false);
      setLoading(false);
    }
  }, [submitErrors]);

  const displayStatus = (isSuccess) => {
    if (isSuccess) {
      return (
        <div className="checkout__message-wrapper">
          <p className="checkout__title">Ihre Anfrage wurde erfolgreich gesendet.</p>
          <br />
          <p className="checkout__message">
            Bitte geben Sie unserem Team 48 Stunden Zeit, um Ihren Dienst zu bestätigen.
          </p>
          <img className="checkout__img" src={SuccessImg} alt="Success" />
        </div>
      );
    }

    if (!isSuccess) {
      return (
        <div className="checkout__message-wrapper">
          <p className="checkout__title">Entschuldigung, etwas ist schief gelaufen.</p>
          <br />
          <p className="checkout__message">
            Bitte warten Sie eine Minute und versuchen Sie es dann erneut oder kontaktieren Sie den Support für
            Unterstützung.
          </p>
          <img className="checkout__img" src={FailImg} alt="Fail" />
        </div>
      );
    }
  };

  return <div className="checkout">{loading ? <span className="spinner"></span> : displayStatus(isSuccess)}</div>;
};

export default Checkout;
