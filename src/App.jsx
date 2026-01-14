import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "../intro/components/intro";
import Register from "../auth/components/register";
import SignIn from "../auth/components/signin";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sign_in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
