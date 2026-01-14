import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Intro from "../intro/components/intro.jsx";
import "./main.css";
import Register from "../auth/components/register.jsx";
import SignIn from "../auth/components/signin.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
