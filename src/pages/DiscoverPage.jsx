import "../components/styles/App.css";
import React, { useEffect, useState } from "react";
import ButtonsCard from "../components/ButtonsCard";
import MovieCard from "../components/MovieCard";
import { setMoviesData } from "../store/moviesSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../components/styles/App.css";

import { getMovies, getMovieById } from "../api/aws-exports";
import { likeMovie, dislikeMovie } from "../store/moviesSlice";

function DiscoverPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const moviesData = useSelector((state) => state.movies.moviesData);
  const [errorMessage, setErrorMessage] = useState("");
  const movieId = 1;

  //  getMovies({})
  //  .then((response) => {
  //    console.log("All Movies:", response);

  //    if (response.error) {
  //      // Обробка помилки, якщо є
  //    } else {
  //      // Обробка результатів запиту зі списком всіх фільмів
  //    }
  //  })
  //  .catch((error) => {
  //    console.error("Error fetching all movies:", error);
  //  });

  useEffect(() => {
    getMovieById(movieId)
      .then((response) => {
        console.log("Movie by ID:", response);

        if (response.error) {
          setErrorMessage(response.error.message);
          dispatch(setMoviesData(null));
        } else {
          setErrorMessage(null);

          dispatch(setMoviesData(response));
        }
      })
      .catch((error) => {
        console.error("Error fetching movie by ID:", error);
      });
  }, []);

  const handleLike = () => {
    console.log("dskfsdfsdf");
    dispatch(likeMovie(movieId));
  };
  return (
    <div className="Home">
      <div className="discover">
        <MovieCard
          imageUrl="/path/to/image.jpg"
          title="Заголовок"
          description="Опис"
          moviesData={moviesData}
        />
        <ButtonsCard handleLike={handleLike} />
      </div>
    </div>
  );
}

export default DiscoverPage;