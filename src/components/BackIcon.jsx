import React from "react";
import "../components/styles/App.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { NavLink } from "react-router-dom";

function BackIcon() {
  return (
    <NavLink to="/" className="left-backIcon navLink">
      <ArrowBackIosIcon />
      <p>Back</p>
    </NavLink>
  );
}

export default BackIcon;
