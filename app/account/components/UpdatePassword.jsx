"use client";

import { useState } from "react";
import TextInput from "@/app/UI/TextInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  AiFillEyeInvisible,
  AiFillEye,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import { Button } from "bootstrap";
import { Spinner } from "react-bootstrap";

const UpdatePassword = () => {
  //States
  const validate = Yup.object({
    current_password: Yup.string().required("Current Password is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password should be minimum 6 characters"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords didn't  match")
      .required("Confirm  Password is required"),
  });

  const [isPassword, setIsPassword] = useState(true);
  const [isPassword2, setIsPassword2] = useState(true);
  const [isPassword3, setIsPassword3] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  return (
    <div className="login-form">
      <div className="form-body ">
        <Formik
          initialValues={{
            current_password: "",
            password: "",
            confirm_password: "",
          }}
          validationSchema={validate}
          onSubmit={async (values) => {
            setShowPassword(false);
            // const res = await commonLogin(values, setLoading);
            // if (res.status === 1) {
            //   router.reload(window.location.pathname);
            // } else if (typeof res.msg === "object") {
            //   setError(Object.values(res.msg)[0][0]);
            // } else {
            //   setError(res.msg);
            // }
          }}
        >
          {(formik) => (
            <Form>
              <div className="password form-group mb-3">
                <div className="position-relative" id="show_hide_password">
                  <TextInput
                    label="Current Password"
                    className="form-control is-radius-8 fs-14 fw-normal"
                    type={isPassword ? "password" : "text"}
                    id="current_password"
                    placeholder="Current password"
                    name="current_password"
                  />
                  <div
                    className="pass-show-hide position-absolute top-4 right-4 cursor-pointer "
                    onClick={() => setIsPassword(!isPassword)}
                    style={{ color: "rgba(102, 102, 102, 0.5)" }}
                  >
                    {isPassword ? (
                      <AiFillEye className="cursor-pointer" size={22} />
                    ) : (
                      <AiFillEyeInvisible
                        className="cursor-pointer"
                        size={22}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="password form-group mb-3">
                <div className="position-relative" id="show_hide_password">
                  <TextInput
                    label="Password"
                    className="form-control is-radius-8 fs-14 fw-normal"
                    type={isPassword2 ? "password" : "text"}
                    id="password"
                    placeholder="Enter password"
                    name="password"
                  />
                  <div
                    className="pass-show-hide position-absolute top-4 right-4 cursor-pointer "
                    onClick={() => setIsPassword2(!isPassword2)}
                    style={{ color: "rgba(102, 102, 102, 0.5)" }}
                  >
                    {isPassword2 ? (
                      <AiFillEye className="cursor-pointer" size={22} />
                    ) : (
                      <AiFillEyeInvisible
                        className="cursor-pointer"
                        size={22}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="password form-group mb-3">
                <div className="position-relative" id="show_hide_password">
                  <TextInput
                    label="Confirm Password"
                    className="form-control is-radius-8 fs-14 fw-normal"
                    type={isPassword2 ? "password" : "text"}
                    id="confirm_password"
                    placeholder="Enter password"
                    name="confirm_password"
                  />
                  <div
                    className="pass-show-hide position-absolute top-4 right-4 cursor-pointer "
                    onClick={() => setIsPassword2(!isPassword2)}
                    style={{ color: "rgba(102, 102, 102, 0.5)" }}
                  >
                    {isPassword2 ? (
                      <AiFillEye className="cursor-pointer" size={22} />
                    ) : (
                      <AiFillEyeInvisible
                        className="cursor-pointer"
                        size={22}
                      />
                    )}
                  </div>
                </div>
              </div>
              {error && (
                <p className="text-danger fs-14 fw-500">
                  <AiOutlineExclamationCircle /> {error}
                </p>
              )}
              {loading ? (
                <Button
                  disabled
                  className="loading-button d-flex align-items-center justify-content-center w-100  mb-2"
                >
                  <Spinner
                    as="span"
                    animation="grow"
                    size="md"
                    role="status"
                    aria-hidden="true"
                  />
                  <span className="ms-3"> Loading...</span>
                </Button>
              ) : (
                <button
                  className="primary-btn py-md fs-14 is-radius-5 border-0  w-100  mb-2"
                  type="submit"
                >
                  <span className="pe-1">Save</span>
                </button>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UpdatePassword;
