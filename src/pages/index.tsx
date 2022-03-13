import type { NextPage } from "next";
import { useState } from "react";
import Button from "../components/Button";
import { searchMoviesClient } from "../utils/movie-service";
import { IMovie } from "./../interfaces";
import SearchInput from "../components/SearchBar";

const Home: NextPage = () => {
  const [keyword, setKeyword] = useState("");
  const [movies, setMovies] = useState<IMovie[]>([]);

  const searchOnClick = async () => {
    const response = await searchMoviesClient(keyword);
    setMovies(response);
  };
  return (
    <div>
      <SearchInput state={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Search" />
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
