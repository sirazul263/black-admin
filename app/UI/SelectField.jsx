import { ErrorMessage, useField } from "formik";
import React from "react";
const SelectField = ({ label, notRequired, options, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-group custom-select2">
      {label && (
        <label
          htmlFor={field.name}
          style={{ fontSize: 14, fontWeight: "600", marginBottom: 5 }}
          className="text-clr-gray"
        >
          {label} {notRequired ? "" : <span className="text-danger">*</span>}
        </label>
      )}

      <select
        {...field}
        {...props}
        className={`form-control ${meta.touched && meta.error && "is-invalid"}`}
      >
        <option value="">Select </option>
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>

      <ErrorMessage
        name={field.name}
        component="div"
        className="invalid-feedback"
        style={{ fontSize: 13, color: "red", fontWeight: 600 }}
      />
    </div>
  );
};

export default SelectField;
