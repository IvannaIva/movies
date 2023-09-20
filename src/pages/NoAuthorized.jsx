import React from "react";
import LoginPage from "./LoginPage";
import { Route, Routes } from "react-router-dom";
import "../components/styles/App.css";

function NoAuthorized() {
  
  return (


      <Routes>
        <Route  path="/" element={<LoginPage/>} />
        {/* <Route  path="/signup" element={<SignupForm/>} />
        <Route path="/confirm-signup/:email" element={<ConfirmSignUpForm />} /> */}
  
      </Routes>
 
  );
}

export  default NoAuthorized ;
