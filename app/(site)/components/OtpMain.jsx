"use client";
import OTP from "@/app/UI/OTP";
import { useState } from "react";

const OtpMain = ({ setShowOtp, setShowPassword, setShowForgetPassword }) => {
  //States for OTP
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleOtpSubmit = async () => {
    const data = {
      code: otp,
    };
    setShowOtp(false);
    setShowPassword(true);
    // const res = await userSignup(data, setLoading);
    // if (res.status === 1) {
    //   setIsCreated(true);
    // } else if (typeof res.message === "object") {
    //   setOtpError(Object.values(res.message)[0][0]);
    // } else {
    //   setOtpError(res.message);
    // }
  };
  return (
    <div className="">
      <h2 className="text-center pb-4">Please check your phone!</h2>
      <p className="text-center fw-semi-bold mb-4">
        We've sent a 6-digit confirmation code to your phone, <br /> please
        enter the code below to verify.
      </p>
      <div className=" is-shadow bg-white radius-8 py-3 px-4">
        <OTP
          otp={otp}
          setOtp={setOtp}
          handleResend={() => console.log("hi")}
          handleSubmit={handleOtpSubmit}
          isLoading={loading}
          otpError={otpError}
        />
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

export default OtpMain;
