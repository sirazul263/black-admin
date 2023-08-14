"use client";
import { Audio } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-content-center py-5 my-5">
      <Audio
        height="80"
        width="80"
        radius="9"
        color="#fcd800"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};

export default Loader;
