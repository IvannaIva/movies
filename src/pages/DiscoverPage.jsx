import "../components/styles/App.css";
import React, { useEffect, useState } from "react";
import ButtonsCard from "../components/ButtonsCard";
import MovieCard from "../components/MovieCard";
import { setAllMoviesData, setCurrentMovieIndex } from "../store/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import "../components/styles/App.css";

import { getMovies } from "../api/aws-exports";
import { likeMovie, dislikeMovie } from "../store/moviesSlice";

function DiscoverPage() {
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState("");

  const allMoviesData = useSelector((state) => state.movies.allMoviesData);
  const currentMovieIndex = useSelector(
    (state) => state.movies.currentMovieIndex
  );

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await getMovies({
          region: "US",
          type: "tv",
        });
        console.log("Moviesssssssssss", response.movies);
        // Оновлюємо стан компонента зі списком фільмів з API
        dispatch(setAllMoviesData(response.movies));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    if (!allMoviesData.length) {
      fetchMovies();
    }
  }, [dispatch, allMoviesData]);

  const currentMovieId = allMoviesData[currentMovieIndex]?.id; // Отримуємо ID обраного фільму
  const currentMovie = allMoviesData[currentMovieIndex];

  const handleNextMovie = () => {
    if (currentMovieIndex < allMoviesData.length - 1) {
      dispatch(setCurrentMovieIndex(currentMovieIndex + 1));
    }
  };

  const handlePreviousMovie = () => {
    if (currentMovieIndex > 0) {
      dispatch(setCurrentMovieIndex(currentMovieIndex - 1));
    }
  };

  const handleLike = () => {
    dispatch(likeMovie(currentMovieId));
    handleNextMovie();
  };

  const handleDislike = () => {
    dispatch(dislikeMovie(currentMovieId));
    handleNextMovie();
  };

  return (
    <div className="Home">
      <div className="discover">
        {currentMovieId && (
          <>
            <MovieCard
              key={currentMovieId}
              imageUrl={currentMovie.imageUrl}
              title={currentMovie.title}
              description={currentMovie.description}
              currentMovie={currentMovie}
            />
          </>
        )}
        <ButtonsCard
          handleLike={handleLike}
          handleDislike={handleDislike}
          handlePreviousMovie={handlePreviousMovie}
        />
      </div>
    </div>
  );
}

export default DiscoverPage;
