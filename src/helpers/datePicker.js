import React from "react";

import { DatePicker, registerLocale } from "react-datepicker";
import de from "date-fns/locale/de";
import "react-datepicker/dist/react-datepicker.css";
import { useField } from "formik";
registerLocale("de", de);

const MyDatePicker = ({ name = "" }) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <DatePicker
      className="form__date-picker"
      {...field}
      locale="de"
      selected={value}
      onChange={(date) => setValue(date)}
    />
  );
};

export default MyDatePicker;
