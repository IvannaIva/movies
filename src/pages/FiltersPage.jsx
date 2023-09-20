import "../components/styles/App.css";
import React, { Component } from "react";


import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// import { signOut } from "../api/auth";

function FiltersPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  

  return (
    <div className="Home">
      <div className="loginout-button">
       <h1>Фільтри</h1>
      </div>
     
    </div>
  );
}

export default FiltersPage;
