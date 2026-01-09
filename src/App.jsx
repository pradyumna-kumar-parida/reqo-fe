import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Homepage/Home";
import LandPage from "./Landingpage/landPage";
import ProtectedRoutes from "./Landingpage/ProtectedRoutes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/landingsection"
            element={
              <ProtectedRoutes>
                <LandPage />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
