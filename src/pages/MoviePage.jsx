import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetailsCard from "../components/MovieDetailsCard";
import MovieDetails from "../components/MovieDetails";
import BackIcon from "../components/BackIcon";
import { getMovies, getMovieById } from "../api/aws-exports";
import { setMovieDetails } from "../store/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

function MoviePage() {
  // Використовуйте useParams() для отримання параметру id з URL
  let { id } = useParams();
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();


  const currentMovieIndex = useSelector(
    (state) => state.movies.currentMovieIndex
  );

  const allMoviesData = useSelector(
    (state) => state.movies.allMoviesData
  );

  const currentMovie = allMoviesData[currentMovieIndex];  
  // useEffect(() => {
  //   getMovieById(id)
  //     .then((response) => {
  //       console.log("Movie by ID:", response);

  //       if (response.error) {
  //         setErrorMessage(response.error.message);
  //         dispatch(setMovieDetails(null));
  //       } else {
  //         setErrorMessage(null);

  //         dispatch(setMovieDetails(response));
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching movie by ID:", error);
  //     });
  // }, []);

  return (
    <div className="movieDetailsPage">
      <BackIcon />

      <div className="right-movieDetails">
        <MovieDetailsCard currentMovie={currentMovie}/>
        <MovieDetails currentMovie={currentMovie}/>
      </div>
    </div>
  );
}

export default MoviePage;
