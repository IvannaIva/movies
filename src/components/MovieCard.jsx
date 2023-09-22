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

export default function MovieCard({ currentMovie }) {
  const maxTextLength = 40;
  let altGenres = "";
  
  if (currentMovie.altGenres) {
    altGenres = currentMovie.altGenres.join(", ");
  }
  
  if (altGenres.length > maxTextLength) {
    const lastSpaceIndex = altGenres.lastIndexOf(" ", maxTextLength);
    if (lastSpaceIndex !== -1) {
      altGenres = altGenres.slice(0, lastSpaceIndex);
    }
  }

  return (
    <CardMovie
      component={NavLink}
      to={`/movie/${currentMovie.id}`}
      className="navLink"
    >
      <div className={styles.cardMovieImg}>
        <CardMedia
          image={currentMovie.image}
          // title={moviesData.title}
          className={styles.cardImg}
        />
      </div>
      <CardContent className={styles.cardContent}>
        <div className="netfixImg">
          <img src={netflixImg} alt="Опис зображення" />
        </div>
        <Typography 
        className={currentMovie.title.length < 30 ? 'titleMovie' : 'titleMovieLong'}>
        
          <p>{currentMovie.title} </p>
        </Typography>
        <Typography variant="body2" className={styles.descriptionMovie}>
          <p>
          {altGenres ? altGenres + " " + currentMovie.year : currentMovie.year}

          </p>
        </Typography>
      </CardContent>
    </CardMovie>
  );
}
