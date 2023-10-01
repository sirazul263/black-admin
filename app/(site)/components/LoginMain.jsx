"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
const Login = dynamic(() => import("./Login"), { ssr: false });
const ForgetPassword = dynamic(() => import("./ForgetPassword"), {
  ssr: false,
});
const OtpMain = dynamic(() => import("./OtpMain"), {
  ssr: false,
});
const ResetPassword = dynamic(() => import("./ResetPassword"), {
  ssr: false,
});

const LoginMain = ({ accessToken }) => {
  console.log("accessToken", accessToken);

  const [showForgetPassword, setShowForgetPassword] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      {showForgetPassword ? (
        <>
          {showPassword ? (
            <ResetPassword
              setShowForgetPassword={setShowForgetPassword}
              setShowPassword={setShowPassword}
            />
          ) : (
            <>
              {showOtp ? (
                <OtpMain
                  setShowOtp={setShowOtp}
                  setShowPassword={setShowPassword}
                  setShowForgetPassword={setShowForgetPassword}
                />
              ) : (
                <ForgetPassword
                  setShowForgetPassword={setShowForgetPassword}
                  setShowOtp={setShowOtp}
                />
              )}
            </>
          )}
        </>
      ) : (
        <Login setShowForgetPassword={setShowForgetPassword} />
      )}
    </div>
  );
};

export default LoginMain;
