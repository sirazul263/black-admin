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
import { Spinner, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { login } from "@/services/authServices";

const Login = ({ setShowForgetPassword }) => {
  const router = useRouter();
  //States
  const validate = Yup.object({
    phone: Yup.string()
      .max(15, "Phone Number must be at best 15 characters ")
      .required("Phone Number is required"),
    password: Yup.string().required("Password is required"),
  });

  const [isPassword, setIsPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);

  return (
    <div className="login-form">
      <div className="py-md-5">
        <div className="form-body is-shadow bg-white radius-8 py-3 px-4">
          <Formik
            initialValues={{
              phone: "",
              password: "",
            }}
            validationSchema={validate}
            onSubmit={async (values) => {
              const data = {
                email: "admin@gmail.com",
                password: values.password,
              };
              const res = await login(data, setLoading);

              if (res.hasOwnProperty("token")) {
                router.push("/dashboard");
              } else if (typeof res.error === "object") {
                setLoginError(Object.values(res.error)[0][0]);
              } else {
                setLoginError(res.error);
              }
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
                <div className="form-check d-flex justify-content-between align-items-center mb-4">
                  <div className="remember-me">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="remember"
                      id="remember-me"
                      defaultChecked
                    />
                    <label
                      className="form-check-label fs-14 text-clr-purple-light fw-semi-bold ms-2"
                      htmlFor="remember-me"
                    >
                      Remember me
                    </label>
                  </div>
                  <button
                    className="forget-pass fw-semi-bold fs-14 text-clr-primary text-decoration-underline fw-smi-bold border-0 bg-transparent "
                    type="button"
                    onClick={() => setShowForgetPassword(true)}
                  >
                    Forgot Password?
                  </button>
                </div>
                {loginError && (
                  <p className="text-danger fs-14 fw-500">
                    <AiOutlineExclamationCircle /> {loginError}
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
                    <span className="pe-1">Log In</span>
                  </button>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
