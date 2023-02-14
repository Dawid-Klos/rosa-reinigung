import React, { useEffect, useState } from "react";

import SuccessImg from "../../../images/img-form-success.svg";
import "../../../styles/steps.scss";

const Checkout = ({ submitErrors }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const errors = submitErrors;

    if (errors && errors.length > 0) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } else {
      setLoading(false);
    }
  }, [submitErrors]);

  // TODO: Check if success status works properlu
  // TODO: Set up an icon for fail + message
  // TODO: Check how it works

  return (
    <div className="checkout">
      {loading ? (
        <span className="spinner"></span>
      ) : (
        <div className="checkout__message-wrapper">
          <p className="checkout__title">Ihre Anfrage wurde erfolgreich gesendet.</p>
          <br />
          <p className="checkout__message">
            Bitte geben Sie unserem Team 48 Stunden Zeit, um Ihren Dienst zu bestätigen.
          </p>
          <img className="checkout__img" src={SuccessImg} alt="Success" />
        </div>
      )}
    </div>
  );
};

export default Checkout;
