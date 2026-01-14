import React, { useState } from "react";
import "../css/sign_in.css"; // Make sure this path matches your folder structure

// Importing Assets
import logoWhite from "../assets/logo_white.svg";
import emailIcon from "../assets/email_icon.svg";
import lockIcon from "../assets/lock_icon.svg";

const SignIn = () => {
  // State for form data
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  // State for error messages
  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Clear error when user types
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Basic Validation
    if (!credentials.email) newErrors.email = "Email or Mobile is required";
    if (!credentials.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Logging in with:", credentials);
      // Call your Login API here
    }
  };

  return (
    <div className="cbody">
      <div className="auth-container">
        {/* LEFT SIDE (Form) */}
        <div className="auth-left">
          <h1 className="gloock">Welcome Back</h1>
          <p className="subtitle poppins">Sign in to continue shopping</p>

          <form id="loginForm" onSubmit={handleSubmit} noValidate>
            {/* EMAIL INPUT */}
            <div className="input-group">
              <label>Email / Mobile</label>
              <div className="input-wrapper">
                <img src={emailIcon} alt="email icon" className="icon" />
                <input
                  type="text"
                  id="email"
                  value={credentials.email}
                  onChange={handleChange}
                  placeholder="Enter your email or mobile number"
                />
              </div>
              {errors.email && <small className="error">{errors.email}</small>}
            </div>

            {/* PASSWORD INPUT */}
            <div className="input-group">
              <label>Password</label>
              <div className="input-wrapper">
                <img src={lockIcon} alt="lock icon" className="icon" />
                <input
                  type="password"
                  id="password"
                  value={credentials.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
              </div>
              {errors.password && (
                <small className="error">{errors.password}</small>
              )}
            </div>

            <div className="options inter">
              <span className="otp" style={{ cursor: "pointer" }}>
                Login with OTP
              </span>
              <a href="/forgot-password" className="forgot">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="btn-primary">
              Sign in →
            </button>

            <div className="divider inter">
              <span>or continue with</span>
            </div>

            <button type="button" className="btn-google poppins">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
              />
              Sign in with Google
            </button>

            <p className="signup-text inter">
              Don’t have an account? <a href="/register">Sign Up</a>
              {/* If using React Router, replace <a> with: <Link to="/register">Sign Up</Link> */}
            </p>
          </form>
        </div>

        {/* RIGHT SIDE (Brand/Image) */}
        <div className="auth-right">
          <div className="overlay"></div>

          <div className="brand">
            {/* LOGO */}
            <img src={logoWhite} alt="ORIGIN logo" className="brand-logo" />

            <h4>Where Style Begins</h4>
            <p>
              Premium quality t-shirts crafted with care
              <br />
              for the modern individual.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
