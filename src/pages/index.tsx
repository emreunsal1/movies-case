import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { searchMovies } from "../utils/movie-service";
import { IMovie } from "./../interfaces";

const Home: NextPage = () => {
  const [keyword, setKeyword] = useState("");
  const [movies, setMovies] = useState<IMovie[]>([]);

  const searchOnClick = async () => {
    const response = await searchMovies(keyword);
    console.log(response);
    setMovies(response);
  };
  return (
    <div>
      <input placeholder="search" onChange={(e) => setKeyword(e.target.value)}></input>
      <button onClick={searchOnClick}>Search</button>
      <ul>
        {movies.map((movie) => {
          return <li key={movie.imdbID}>{movie.Title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Home;
