import React, { useState } from "react";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";

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

  return (
    <section>
      <form>
        {formSteps.map((step, index) =>
          index === currentStep ? (
            <div key={step.stepNumber}>{step.component}</div>
          ) : null
        )}
      </form>
      <button onClick={() => setCurrentStep((prevstate) => prevstate + 1)}>
        Next
      </button>
    </section>
  );
};

export default Booking;
