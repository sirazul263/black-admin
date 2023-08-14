import { ErrorMessage, useField } from "formik";
import React from "react";

const TextInput = ({ label, notRequired, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="form-group">
      {label && (
        <label
          htmlFor={field.name}
          style={{ fontSize: 14, fontWeight: 500, marginBottom: 5 }}
          className="text-clr-gray"
        >
          {label} {notRequired ? "" : <span className="text-danger">*</span>}
        </label>
      )}
      <input
        {...field}
        {...props}
        className={`form-control  ${
          meta.touched && meta.error && "is-invalid"
        }`}
        autoComplete="off"
      />
      <ErrorMessage
        name={field.name}
        component="div"
        className="invalid-feedback"
        style={{ fontSize: 13, color: "red", fontWeight: 500 }}
      />
    </div>
  );
};

export default TextInput;
