import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import ReactLoading from "react-loading";
import Movie from "../components/Movie";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [sortMethod, setSortMethod] = useState("top");

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const request = await axios.get(
        "https://api.themoviedb.org/3/search/movie?api_key=26a145d058cf4d1b17cbf084ddebedec&language=fr-FR&query=" +
          searchValue
      );
      setMovies(request.data.results);
      setSearchValue("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  return (
    <div>
      <NavBar title="HomePage" />
      {loading ? (
        <ReactLoading
          className="mx-auto"
          type="spinningBubbles"
          color="black"
          height={300}
        />
      ) : (
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex items-center justify-center mt-6 gap-4"
        >
          <input
            type="text"
            placeholder="Titre du film"
            value={searchValue}
            onInput={(e) => setSearchValue(e.target.value)}
            className=" border border-blue-300 px-4 py-2"
          />
          <input
            type="submit"
            value="Search"
            className=" rounded border border-blue-300 px-4 py-2 hover:cursor-pointer hover:bg-blue-300 hover:text-white"
          />
        </form>
      )}
      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          onClick={() => {
            setSortMethod("flop");
          }}
          className="rounded border border-blue-300 px-4 py-2 hover:cursor-pointer hover:bg-blue-300 hover:text-white "
        >
          Flop
        </button>
        <button
          onClick={() => {
            setSortMethod("top");
          }}
          className="rounded border border-blue-300 px-4 py-2 hover:cursor-pointer hover:bg-blue-300 hover:text-white"
        >
          Top
        </button>
      </div>
      <main className="flex flex-wrap items-center justify-center mt-6 gap-6">
        {movies
          .sort((a, b) => {
            if (sortMethod === "top") {
              return b.vote_average - a.vote_average;
            } else if (sortMethod === "flop") {
              return a.vote_average - b.vote_average;
            }
          })
          .map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
      </main>
    </div>
  );
}

export default HomePage;
