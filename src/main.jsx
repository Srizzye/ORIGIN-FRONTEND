import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Intro from "../intro/components/intro.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Intro />
  </StrictMode>
);
