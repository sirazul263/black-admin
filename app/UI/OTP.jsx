"use client";
import OTPInput, { ResendOTP } from "otp-input-react";
import { Fragment } from "react";
import { Button, Spinner } from "react-bootstrap";
const OTP = ({
  otp,
  setOtp,
  handleResend,
  handleSubmit,
  isLoading,
  otpError,
}) => {
  const renderButton = (buttonProps) => {
    return (
      <div className="d-flex align-items-center">
        <p className="text-clr-gray fs-14 fw-400 mb-0 me-4">
          Don’t have a code?
        </p>
        <button
          {...buttonProps}
          className=" transition bg-transparent cursor-pointer  fs-14 text-clr-primary fw-semi-bold border-0 "
          onClick={() => {
            buttonProps.onClick();
            handleResend();
          }}
        >
          Resend Code ?
        </button>
      </div>
    );
  };
  const renderTime = (remainingTime) => {
    return (
      <div className="d-block otp-timer d-flex justify-content-center align-items-center">
        <p className="text-clr-gray mb-0 fw-semi-bold">{remainingTime}</p>
      </div>
    );
  };
  return (
    <div className="mt-3">
      <div className="d-flex justify-content-center">
        <OTPInput
          value={otp}
          onChange={setOtp}
          autoFocus
          OTPLength={6}
          otpType="number"
          disabled={false}
          className="otp-input"
          placeholder="------"

          // secure
        />
      </div>
      <div className="my-4">
        <ResendOTP
          renderButton={renderButton}
          renderTime={renderTime}
          maxTime={120}
        />
      </div>
      {otp.length === 6 && (
        <Fragment>
          {otpError && (
            <p className="text-danger fs-14 fw-500">
              <FontAwesomeIcon icon={faCircleExclamation} /> {otpError}
            </p>
          )}
          {isLoading ? (
            <Button
              disabled
              className="my-4 loading-button d-flex align-items-center justify-content-center w-100"
            >
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="ms-3"> Loading...</span>
            </Button>
          ) : (
            <div className="d-flex justify-content-center my-3">
              <button
                className="transition py-md border-0 is-radius-5 primary-btn w-100"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
};
export default OTP;
