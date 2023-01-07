import React from "react";

const StepOne = () => {
  return (
    <div>
      <label>
        Name
        <input type="text" name="name" id="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" id="email" />
      </label>
      <label>
        Subject
        <input type="text" name="subject" id="subject" />
      </label>
    </div>
  );
};

export default StepOne;
