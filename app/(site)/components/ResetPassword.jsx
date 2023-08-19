"use client";
import TextInput from "@/app/UI/TextInput";
import { Formik, Form } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import {
  AiFillEyeInvisible,
  AiFillEye,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import { Button } from "bootstrap";
import { Spinner } from "react-bootstrap";

const ResetPassword = ({ setShowForgetPassword, setShowPassword }) => {
  //States
  const validate = Yup.object({
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password should be minimum 6 characters"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords didn't  match")
      .required("Confirm  Password is required"),
  });

  const [isPassword, setIsPassword] = useState(true);
  const [isPassword2, setIsPassword2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="login-form">
      <h2 className="text-center pb-4">Please check your phone!</h2>
      <div className="form-body is-shadow bg-white radius-8 py-3 px-4">
        <Formik
          initialValues={{
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
              <div className="password form-group mb-4">
                <div className="position-relative" id="show_hide_password">
                  <TextInput
                    label="Password"
                    className="form-control is-radius-8 fs-14 fw-normal"
                    type={isPassword ? "password" : "text"}
                    id="password"
                    placeholder="Enter password"
                    name="password"
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
              <div className="password form-group mb-4">
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
      <p
        className="cursor-pointer mt-4 text-center fw-bold"
        onClick={() => setShowForgetPassword(false)}
      >
        <svg
          width="5"
          height="10"
          viewBox="0 0 5 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="me-2"
        >
          <path
            d="M4.21978 9.66621C4.01806 9.6669 3.82687 9.57621 3.69978 9.41955L0.479784 5.41955C0.277572 5.17355 0.277572 4.81888 0.479784 4.57288L3.81312 0.572881C4.04876 0.289375 4.46961 0.250573 4.75312 0.486215C5.03662 0.721856 5.07543 1.14271 4.83978 1.42621L1.85978 4.99955L4.73978 8.57288C4.90625 8.7727 4.94132 9.05107 4.82961 9.28593C4.71791 9.52079 4.47983 9.66925 4.21978 9.66621Z"
            fill="#212B36"
          />
        </svg>
        Return to sign in
      </p>
    </div>
  );
};

export default ResetPassword;
