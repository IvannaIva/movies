import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import cl from "./Navbar.module.css";
import "../../components/styles/App.css";
import signOutImg from "../img/signOut.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/loginSlice"
import { List, ListItem, ListItemText } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(logout());
     navigate("/");
  };
  return (
    <List component="nav" className={cl.navbar}>
      <ListItem
        component={NavLink}
        to="/"
        exact
        className={location.pathname === "/" ? cl.activeLink : "navLink"}
      >
        <ListItemText primary="Discover" />
      </ListItem>
      <ListItem
        component={NavLink}
        to="/filters"
        className={location.pathname === "/filters" ? cl.activeLink : "navLink"}
      >
        <ListItemText primary="Filters" />
      </ListItem>
      <ListItem
        component={NavLink}
        to="/settings"
        className={
          location.pathname === "/settings" ? cl.activeLink : "navLink"
        }
      >
        <ListItemText primary="Settings" />
      </ListItem>
      <ListItem button onClick={handleSignOut}>
        <div  className={cl.signOut}>
          <img src={signOutImg} alt="Опис зображення" />
        </div>
      </ListItem>
    </List>
  );
};

export default Navbar;
