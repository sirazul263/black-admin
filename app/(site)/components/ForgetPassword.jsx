"use client";
import TextInput from "@/app/UI/TextInput";
import { Button } from "bootstrap";
import { Formik, Form } from "formik";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import * as Yup from "yup";
const ForgetPassword = ({ setShowForgetPassword, setShowOtp }) => {
  //States
  const validate = Yup.object({
    phone: Yup.string()
      .max(15, "Phone Number must be at best 15 characters ")
      .required("Phone Number is required"),
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //Hydration

  return (
    <div className="login-form">
      <div className="">
        <h2 className="text-center pb-4">Forgot your password?</h2>
        <p className="text-center fw-semi-bold mb-4">
          Please enter the phone number associated with your account, and we'll
          send you a code to reset your <br /> password.
        </p>
        <div className="form-body is-shadow bg-white radius-8 py-3 px-4">
          <Formik
            initialValues={{
              phone: "",
            }}
            validationSchema={validate}
            onSubmit={async (values) => {
              setShowOtp(true);
            }}
          >
            {(formik) => (
              <Form>
                <div className="mb-3">
                  <TextInput
                    label="Phone Number"
                    type="text"
                    className="form-control is-radius-5 fs-14"
                    id="phone"
                    placeholder="Phone"
                    name="phone"
                  />
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
                    <span className="pe-1">Send</span>
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
    </div>
  );
};
export default ForgetPassword;
