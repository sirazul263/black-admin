import { ErrorMessage, Field } from "formik";
import React from "react";

const TextArea = ({ label, name, notRequired, ...rest }) => {
  return (
    <div className="form-group mb-3">
      {label && (
        <label
          htmlFor={name}
          style={{ fontSize: 14, fontWeight: "600", marginBottom: 5 }}
        >
          {label} {notRequired ? "" : <span className="text-danger">*</span>}
        </label>
      )}
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage
        name={name}
        component="div"
        style={{ fontSize: 13, color: "red", fontWeight: 600 }}
      />
    </div>
  );
};

export default TextArea;
