import React from "react";

function Movie({ movie }) {
  return (
    <div className="w-80 border border-blue-400 p-6">
      <h3 className=" p-4">{movie.title}</h3>
      <img
        src={
          "https://image.tmdb.org/t/p/w300" + movie.backdrop_path
          //   ? movie.backdrop_path
          //   : movie.poster_path
        }
        className=" w-full rounded"
        alt=""
      />
      <p className="mt-2">Date : {movie.release_date}</p>
      <p> Note : {movie.vote_average} </p>
      <p className=" line-clamp-3"> {movie.overview}</p>
      <button className=" bg-blue-950 text-white rounded px-4 py-2">
        Like
      </button>
    </div>
  );
}

export default Movie;
