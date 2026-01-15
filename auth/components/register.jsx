import { useState } from "react";
import "../styles/register.css";

import bgImage from "../assets/register_image.jpg";
import logoWhite from "../assets/logo_white.svg";
import profileIcon from "../assets/profile_icon.svg";
import emailIcon from "../assets/email_icon.svg";
import phoneIcon from "../assets/phone_icon.svg";
import lockIcon from "../assets/lock_icon.svg";

function Register() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.fullname.trim()) newErrors.fullname = "*Full name is required";
    if (!form.email.trim()) newErrors.email = "*Email is required";
    if (!form.mobile.trim()) newErrors.mobile = "*Mobile number is required";
    if (!form.password.trim()) newErrors.password = "*Password is required";
    if (!form.confirmPassword.trim())
      newErrors.confirmPassword = "*Confirm password is required";

    if (
      form.password &&
      form.confirmPassword &&
      form.password !== form.confirmPassword
    ) {
      newErrors.confirmPassword = "*Passwords do not match";
    }

    if (!form.terms) newErrors.terms = "*You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Account created successfully (Demo)");
    }
  };

  return (
    <div className="auth-container">
      {/* LEFT */}
      <div className="auth-left" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="overlay"></div>

        <div className="brand">
          <img src={logoWhite} alt="ORIGIN Logo" className="logo" />
          <h4 className="tagline">Where Style Begins</h4>
          <p>
            Premium quality t-shirts crafted with care
            <br />
            for the modern individual.
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="auth-right">
        <h1 className="gloock">Welcome</h1>
        <p className="subtitle">Create your account to get started</p>

        <form onSubmit={handleSubmit} noValidate>
          {/* Full Name */}
          <div className="input-group">
            <label>Full Name</label>
            <div className="input-wrapper">
              <img src={profileIcon} className="icon" />
              <input
                type="text"
                name="fullname"
                placeholder="Enter your full name"
                value={form.fullname}
                onChange={handleChange}
                className={errors.fullname ? "error-border" : ""}
              />
            </div>
            <small className="error">{errors.fullname}</small>
          </div>

          {/* Email */}
          <div className="input-group">
            <label>Email</label>
            <div className="input-wrapper">
              <img src={emailIcon} className="icon" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className={errors.email ? "error-border" : ""}
              />
            </div>
            <small className="error">{errors.email}</small>
          </div>

          {/* Mobile */}
          <div className="input-group">
            <label>Mobile Number</label>
            <div className="input-wrapper">
              <img src={phoneIcon} className="icon" />
              <input
                type="tel"
                name="mobile"
                placeholder="Enter Mobile Number"
                value={form.mobile}
                onChange={handleChange}
                className={errors.mobile ? "error-border" : ""}
              />
            </div>
            <small className="error">{errors.mobile}</small>
          </div>

          {/* Password */}
          <div className="input-group">
            <label>Create Password</label>
            <div className="input-wrapper">
              <img src={lockIcon} className="icon" />
              <input
                type="password"
                name="password"
                placeholder="Enter new password"
                value={form.password}
                onChange={handleChange}
                className={errors.password ? "error-border" : ""}
              />
            </div>
            <small className="error">{errors.password}</small>
          </div>

          {/* Confirm Password */}
          <div className="input-group">
            <label>Confirm Password</label>
            <div className="input-wrapper">
              <img src={lockIcon} className="icon" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm new password"
                value={form.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? "error-border" : ""}
              />
            </div>
            <small className="error">{errors.confirmPassword}</small>
          </div>

          {/* Terms */}
          <div className="terms input-group">
            <label className="terms-label">
              <input
                type="checkbox"
                name="terms"
                checked={form.terms}
                onChange={handleChange}
              />
              <span className="custom-checkbox"></span>
              <span className="terms-text">
                I agree to <span>Terms of service</span> and{" "}
                <span>Privacy policy</span>
              </span>
            </label>
            <small className="error">{errors.terms}</small>
          </div>

          <button type="submit" className="primary-btn">
            Create Account
          </button>
        </form>

        <div className="divider">
          <span>or continue with</span>
        </div>

        <button type="button" className="google-btn">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" />
          Sign in with Google
        </button>

        <p className="footer-text">
          Already have an account? <a href="#">Sign In</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
