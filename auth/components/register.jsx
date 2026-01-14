import React, { useState } from "react";
import "../css/register.css"; // Import your CSS

// Importing Assets
import logoWhite from "../assets/logo_white.svg";
import profileIcon from "../assets/profile_icon.svg";
import emailIcon from "../assets/email_icon.svg";
import phoneIcon from "../assets/phone_icon.svg";
import lockIcon from "../assets/lock_icon.svg";

const Register = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  // State for error messages
  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // Basic Validation Logic
  const validate = () => {
    const newErrors = {};
    if (!formData.fullname) newErrors.fullname = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.mobile) newErrors.mobile = "Mobile Number is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.terms) newErrors.terms = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted Successfully:", formData);
      // Add your API call here (e.g., axios.post('/api/register', formData))
    }
  };

  return (
    <div className="cbody">
      <div className="auth-container">
        {/* LEFT IMAGE SECTION */}
        <div className="auth-left">
          <div className="overlay"></div>

          <div className="brand">
            {/* Logo */}
            <img src={logoWhite} alt="ORIGIN Logo" className="logo" />

            <h4 className="tagline">Where Style Begins</h4>
            <p>
              Premium quality t-shirts crafted with care
              <br />
              for the modern individual.
            </p>
          </div>
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="auth-right">
          <h1 className="gloock">Welcome</h1>
          <p className="subtitle">Create your account to get started</p>

          <form id="signupForm" onSubmit={handleSubmit} noValidate>
            {/* Full Name */}
            <div className="input-group">
              <label>Full Name</label>
              <div className="input-wrapper">
                <img src={profileIcon} className="icon" alt="user" />
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              {errors.fullname && (
                <small className="error">{errors.fullname}</small>
              )}
            </div>

            {/* Email */}
            <div className="input-group">
              <label>Email</label>
              <div className="input-wrapper">
                <img src={emailIcon} className="icon" alt="email" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              {errors.email && <small className="error">{errors.email}</small>}
            </div>

            {/* Mobile */}
            <div className="input-group">
              <label>Mobile Number</label>
              <div className="input-wrapper">
                <img src={phoneIcon} className="icon" alt="phone" />
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter Mobile Number"
                  required
                />
              </div>
              {errors.mobile && (
                <small className="error">{errors.mobile}</small>
              )}
            </div>

            {/* Password */}
            <div className="input-group">
              <label>Create Password</label>
              <div className="input-wrapper">
                <img src={lockIcon} className="icon" alt="lock" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter new password"
                  required
                />
              </div>
              {errors.password && (
                <small className="error">{errors.password}</small>
              )}
            </div>

            {/* Confirm Password */}
            <div className="input-group">
              <label>Confirm Password</label>
              <div className="input-wrapper">
                <img src={lockIcon} className="icon" alt="lock" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm new password"
                  required
                />
              </div>
              {errors.confirmPassword && (
                <small className="error">{errors.confirmPassword}</small>
              )}
            </div>

            {/* Terms */}
            <div className="terms input-group">
              <label className="terms-label">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  required
                />
                <span className="custom-checkbox"></span>
                <span className="terms-text">
                  I agree to <span>Terms of service</span> and{" "}
                  <span>Privacy policy</span>
                </span>
              </label>
              {errors.terms && <small className="error">{errors.terms}</small>}
            </div>

            <button type="submit" className="primary-btn">
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="divider">
            <span>or continue with</span>
          </div>

          {/* Google */}
          <button type="button" className="google-btn">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
            />
            Sign in with Google
          </button>

          <p className="footer-text">
            Already have an account? <a href="/signin">Sign In</a>
            {/* Use <Link to="/signin">Sign In</Link> if using React Router */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
