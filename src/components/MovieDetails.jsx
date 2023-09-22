import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./MovieCard.module.css";
import { styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";

const CardMovie = styled(Card)({
  width: "465px",
  // height: "600px",
  backgroundColor: "#545963" /* Ваш колір бекграунда */,
  borderRadius: "30px" /* Заокруглення кутів картки */,
});

export default function MovieDetails({currentMovie}) {
  // const movieDetails = useSelector((state) => state.movies.movieDetails);

  let actors = "";
  let genres = "";

  if (currentMovie && currentMovie.altGenres) {
    genres = currentMovie.genres.join(", ");
  }
  const tableData = [
    {
      label: "Actors",
      data: currentMovie.actors,
    },
    {
      label: "imdbScore",
      data: currentMovie.imdbScore,
    },
    {
      label: "Subtitles",
      data: currentMovie.creator,
    },
    {
      label: "Genres",
      data: genres,
    },
    {
      label: "Region",
      data: currentMovie.region,
    },
  ];
  const textData = [
    { text: actors, maxTextLength: 100 },
    { text: genres, maxTextLength: 30 },
    { text: currentMovie.description, maxTextLength: 300 },
  ];

  const shortenedTexts = textData.map((item, index) => {
    const { text, maxTextLength } = item;
    if (text && text.length > maxTextLength) {
      return (
        <span key={index}>
          {text.slice(0, maxTextLength)}
          <span className="more"> more...</span>
        </span>
      );
    } else {
      return text;
    }
  });

  return (
    <CardMovie>
      <CardContent className={styles.cardContentDetails}>
        <Typography className={styles.titleMovieDetails}>
          {currentMovie.title}
        </Typography>
        <Typography className={styles.descriptionMovie}>
          <p>
            {currentMovie && currentMovie.altGenres && (
              <>
                {currentMovie.altGenres.join(", ")} {currentMovie.year}
              </>
            )}
          </p>
        </Typography>
        <Typography className={styles.descriptionMovie}>
          <p>{shortenedTexts[2]}</p>
        </Typography>

        <Table className={styles.tableWithoutBorder}>
          <TableBody>
            {tableData.map(
              (row, index) =>
                row.data &&
                row.data.length > 0 && (
                  <TableRow key={index}>
                    <TableCell className={styles.table_cell}>
                      {row.label}
                    </TableCell>
                    <TableCell className={styles.descriptionMovie}>
                      {Array.isArray(row.data) ? row.data.join(", ") : row.data}
                    </TableCell>
                  </TableRow>
                )
            )}
          </TableBody>
        </Table>
      </CardContent>
    </CardMovie>
  );
}
