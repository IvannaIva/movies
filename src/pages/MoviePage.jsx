import React from "react";
import { useParams } from "react-router-dom";
import MovieDetailsCard from "../components/MovieDetailsCard";
import MovieDetails from "../components/MovieDetails";
import BackIcon from "../components/BackIcon";

function MoviePage() {
  // Використовуйте useParams() для отримання параметру id з URL
  let { id } = useParams();

  // Отримайте докладну інформацію про фільм за допомогою id

  return (
    <div className="movieDetailsPage">
      <BackIcon />
      <div className="right-movieDetails">
        <MovieDetailsCard />
        <MovieDetails/>
      </div>
    </div>
  );
}

export default MoviePage;
