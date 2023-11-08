import React from "react";
import NavBar from "../components/NavBar";
import Movie from "../components/Movie";
import { useSelector } from "react-redux";

function LikePage() {
  const movies = useSelector((state) => state.movie.movieLiked);

  return (
    <>
      <NavBar title="LikePage" />
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </>
  );
}

export default LikePage;
