import type { NextPage } from "next";
import { useState } from "react";
import Button from "../components/Button";
import { searchMovies } from "../utils/movie-service";
import { IMovie } from "./../interfaces";

const Home: NextPage = () => {
  const [keyword, setKeyword] = useState("");
  const [movies, setMovies] = useState<IMovie[]>([]);

  const searchOnClick = async () => {
    const response = await searchMovies(keyword);
    setMovies(response);
  };
  return (
    <div>
      <input placeholder="search" onChange={(e) => setKeyword(e.target.value)}></input>
      <Button onClick={searchOnClick}>Search</Button>
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>{movie.Title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
