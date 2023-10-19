import { useState } from "react";
import { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollButton = () => {
  //Back to Top Button
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    let isMounted = true;
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300 && isMounted) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });

    return () => {
      // 👇️ when the component unmounts, set isMounted to false
      isMounted = false;
      setShowButton(false);
    };
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <>
      {showButton && (
        <div className="back-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}
    </>
  );
};
export default ScrollButton;
