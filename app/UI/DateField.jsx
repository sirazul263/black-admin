import React from "react";
import { ErrorMessage, useFormikContext } from "formik";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateField = ({ max, min, name, ...props }) => {
  const formik = useFormikContext();
  const field = formik.getFieldProps(name);

  return (
    <div className="form-group mb-3 w-100">
      <DateView
        {...field}
        {...props}
        id={name}
        selected={field.value || null}
        showYearDropdown={true}
        showMonthDropdown={true}
        dropdownMode="select"
        adjustDateOnChange
        placeholderText="DD/MM/YYYY"
        dateFormat={`dd/MM/yyyy`}
        minDate={min}
        maxDate={max}
        onChange={(value) =>
          value
            ? formik.setFieldValue(name, value)
            : formik.setFieldValue(name, "")
        }
      />
      <ErrorMessage
        name={name}
        component="div"
        style={{ fontSize: 13, color: "red", fontWeight: 600, marginTop: 5 }}
      />
    </div>
  );
};
export default DateField;
