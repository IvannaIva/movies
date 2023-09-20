import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./MovieCard.module.css";
import { height, styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import MovieChips from "./MovieChips";
import netflixImg from "./img/netfix.svg";
import exit from "./img/exit.svg";
import { NavLink } from "react-router-dom";

const CardMovie = styled(Card)({
  width: "315px",
  height: "560px",
  backgroundColor: "#545963" /* Ваш колір бекграунда */,
  borderRadius: "30px" /* Заокруглення кутів картки */,
});

export default function MovieDetails() {
  const moviesData = useSelector((state) => state.movies.moviesData);

  return (
    <CardMovie>
      <div className={styles.cardMovieImg}>
        <CardMedia
          image={moviesData.image}
          title={moviesData.title}
          className={styles.cardImg}
        />
        <NavLink to={"/"} className="navLink">
          <img
            src={exit}
            alt="Опис зображення"
            className={styles.overlayImage}
          />
        </NavLink>
      </div>

      <CardContent className={styles.cardContent}>
        <div className="netfixImg">
          <img src={netflixImg} alt="Опис зображення" />
        </div>

        <MovieChips moviesData={moviesData} />
        <Button>
          {" "}
          <p className={styles.buttonWatch}>Watch Trailer</p>{" "}
        </Button>
      </CardContent>
    </CardMovie>
  );
}
