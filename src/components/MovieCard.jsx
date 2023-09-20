import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./MovieCard.module.css";
import { styled } from "@mui/system";
import { NavLink } from "react-router-dom";
import netflixImg from "./img/netfix.svg";
import "../components/styles/App.css";

const CardMovie = styled(Card)({
  width: "315px",
  height: "560px",
  backgroundColor: "#545963" /* Ваш колір бекграунда */,
  borderRadius: "30px" /* Заокруглення кутів картки */,
});

export default function MovieCard({ moviesData }) {
  const maxTextLength = 50;
  let altGenres = "";

  if (moviesData.altGenres) {
    altGenres = moviesData.altGenres.join(", ");
  }

  if (altGenres.length > maxTextLength) {
    altGenres = altGenres.slice(0, maxTextLength) + "...";
  }

  return (
    <CardMovie
      component={NavLink}
      to={`/movie/${moviesData.id}`}
      className="navLink"
    >
      <div className={styles.cardMovieImg}>
        <CardMedia
          image={moviesData.image}
          // title={moviesData.title}
          className={styles.cardImg}
        />
      </div>
      <CardContent className={styles.cardContent}>
        <div className="netfixImg">
          <img src={netflixImg} alt="Опис зображення" />
        </div>
        <Typography component="h2" className={styles.titleMovie}>
          <p>{moviesData.title} </p>
        </Typography>
        <Typography variant="body2" className={styles.descriptionMovie}>
          <p>
            {" "}
            {altGenres}, {moviesData.year}{" "}
          </p>
        </Typography>
      </CardContent>
    </CardMovie>
  );
}
