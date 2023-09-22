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

export default function MovieDetails() {
  const movieDetails = useSelector((state) => state.movies.movieDetails);

  // const maxTextLengthGenres = 30;
  // const maxTextLengthDescription = 500;

  let genres = "";
  let description = "";

  if (movieDetails && movieDetails.genres) {
    genres = movieDetails.genres.join(", ");
  }

  const textData = [
    { text: genres, maxTextLength: 30 },
    { text: movieDetails.description, maxTextLength: 300 },
  ];

  const shortenedTexts = textData.map((item) => {
    const { text, maxTextLength } = item;
    if (text && text.length > maxTextLength) {
      return (
        <span key={text.slice(0, maxTextLength)}>
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
          {movieDetails.title}
        </Typography>
        <Typography className={styles.descriptionMovie}>
          <p>
            {movieDetails && movieDetails.altGenres && (
              <>
                {movieDetails.altGenres.join(", ")} {movieDetails.year}
              </>
            )}
          </p>
        </Typography>
        <Typography className={styles.descriptionMovie}>
          <p>{shortenedTexts[1]}</p>
        </Typography>

        <Table className={styles.tableWithoutBorder}>
          <TableBody>
            <TableRow>
              <TableCell className={styles.table_cell}>Creators</TableCell>
              <TableCell className={styles.descriptionMovie}>
                {movieDetails.creator}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={styles.table_cell}>imdbScore</TableCell>
              <TableCell className={styles.descriptionMovie}>
                {movieDetails.imdbScore}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={styles.table_cell}>Subtitles</TableCell>
              <TableCell className={styles.descriptionMovie}>
                {movieDetails.creator}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={styles.table_cell}>Genres</TableCell>
              <TableCell className={styles.descriptionMovie}>
                {genres}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={styles.table_cell}>Region</TableCell>
              <TableCell className={styles.descriptionMovie}>
                {movieDetails.region}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </CardMovie>
  );
}
