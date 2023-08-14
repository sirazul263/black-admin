"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Login = dynamic(() => import("./Login"), { ssr: false });
const ForgetPassword = dynamic(() => import("./ForgetPassword"), {
  ssr: false,
});

const LoginMain = () => {
  const [showForgetPassword, setShowForgetPassword] = useState(false);

  return (
    <div>
      {showForgetPassword ? (
        <ForgetPassword setShowForgetPassword={setShowForgetPassword} />
      ) : (
        <Login setShowForgetPassword={setShowForgetPassword} />
      )}
    </div>
  );
};

export default LoginMain;
