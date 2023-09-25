import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import cl from "./Navbar.module.css";
import "../../components/styles/App.css";

import signOutImg from "../img/signOut.svg";
import descoverImg from "../img/Descover.svg";
import descoverGreenImg from "../img/DescoverGreen.svg";
import filterImg from "../img/Network.svg";
import filterGreenImg from "../img/VectorGrenn.svg";
import settingsImg from "../img/Matches.png";
import settingsGreenImg from "../img/Uni.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/loginSlice";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentMovieIndex = useSelector(
    (state) => state.movies.currentMovieIndex
  );
  const allMoviesData = useSelector((state) => state.movies.allMoviesData);

  const currentMovieId = allMoviesData[currentMovieIndex]?.id;
  console.log("idddddddd", currentMovieId);

  const handleSignOut = () => {
    dispatch(logout());
    navigate("/");
  };

  const listItemStyles = {
    flexDirection: "column",
    alignItems: "center",

    marginBottom: "30px", // Додайте відступ між айтемами
  };

  return (
    <List component="nav" className={cl.navbar}>
      {/* Logo */}
      <ListItem className="logoItm" sx={{ justifyContent: "center" }}>
        <Typography variant="h4" className="logoText">
          MaxM
        </Typography>
      </ListItem>

      <ListItem
        component={NavLink}
        to="/"
        exact
        className={
          location.pathname === "/" ||
          location.pathname === `/movie/${currentMovieId}`
            ? cl.activeLink
            : "navLink"
        }
        style={listItemStyles}
      >
        <ListItemIcon>
          <img
            src={
              location.pathname === "/" ||
              location.pathname === `/movie/${currentMovieId}`
                ? descoverGreenImg
                : descoverImg
            }
            alt="Discover"
            className="imgItem"
          />
        </ListItemIcon>
        <ListItemText
          primary={
            location.pathname === "/" ||
            location.pathname === `/movie/${currentMovieId}`
              ? "Discover"
              : ""
          }
        />
      </ListItem>
      <ListItem
        component={NavLink}
        to="/filters"
        className={location.pathname === "/filters" ? cl.activeLink : "navLink"}
        style={listItemStyles}
      >
        <ListItemIcon sc={{ justifyContent: "center" }}>
          <img
            className="imgItem"
            src={location.pathname === "/filters" ? filterGreenImg : filterImg}
            alt="Discover"
          />
        </ListItemIcon>
        <ListItemText
          primary={location.pathname === "/filters" ? "Filters" : ""}
        />
      </ListItem>
      <ListItem
        component={NavLink}
        to="/settings"
        className={
          location.pathname === "/settings" ? cl.activeLink : "navLink"
        }
        style={listItemStyles}
      >
        <ListItemIcon>
          <img
            src={
              location.pathname === "/settings" ? settingsGreenImg : settingsImg
            }
            alt="Discover"
          />
        </ListItemIcon>
        <ListItemText
          primary={location.pathname === "/settings" ? "Settings" : ""}
        />
      </ListItem>
      <ListItem
        button
        onClick={handleSignOut}
        style={{
          position: "absolute",
          bottom: "20%",
          right: "0",
          flexDirection: "column",
        }}
      >
        {" "}
        <ListItemIcon>
          {/* <div className={cl.signOut}> */}
          <img src={signOutImg} alt="Опис зображення" />
        </ListItemIcon>
        {/* </div> */}
      </ListItem>
    </List>
  );
};

export default Navbar;
