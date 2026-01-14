import React, { useEffect } from "react";
import "../CSS/intro.css"; // Importing CSS directly
import logoBlack from "../assets/logo_black.svg"; // Importing image as a variable

const Intro = () => {
  // If you had logic in your intro.js, it typically goes inside a useEffect hook
  useEffect(() => {
    // Example: Trigger animation or redirect after a few seconds
    const timer = setTimeout(() => {
      console.log("Intro finished");
      // navigate('/home'); // if using react-router
    }, 3000);

    // Cleanup function to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="intro-container">
      {/* LOGO */}
      <img src={logoBlack} alt="ORIGIN Logo" className="logo" />

      {/* TAGLINE */}
      <p className="tagline">WHERE STYLE BEGINS</p>

      {/* LINE */}
      <span className="line"></span>
    </div>
  );
};

export default Intro;
