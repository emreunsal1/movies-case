import type { NextPage } from "next";
import { useState } from "react";
import Button from "../components/Button";
import { searchMoviesClient } from "../utils/movie-service";
import { IMovie } from "./../interfaces";
import SearchInput from "../components/SearchBar";
import Card from "../components/Card";
import Typography from "../components/Typography";
import ListElement from "../components/ListElement";

const Home: NextPage = () => {
  const [keyword, setKeyword] = useState("");
  const [movies, setMovies] = useState<IMovie[]>([]);
  const hasMovies = movies.length > 0;

  const searchOnClick = async () => {
    const response = await searchMoviesClient(keyword);
    setMovies(response);
  };
  const clearOnclick = () => {
    setMovies([]);
    setKeyword("");
  };

  return (
    <div className="App">
      <div className="search-container">
        <div className="header">
          <Typography fontWeight={500} size="32px" lineHeight="48px">
            OMDb API
          </Typography>
          <Typography>The Open Movie Database 🍿</Typography>
        </div>
        <Card>
          <div className="movie-title">
            <Typography fontWeight={600}>Movie Title</Typography>
          </div>
          <SearchInput state={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Search" />
          <div className="button-container">
            <div className="m-clear-button" onClick={clearOnclick}>
              clear
            </div>
            <Button onClick={searchOnClick}>search</Button>
          </div>
        </Card>
      </div>
      <div className="list">
        <div className="list-container">
          <Card>
            <div className="list-header">
              <Typography fontWeight={600} lineHeight="24px" size="16px" style={{ color: "#000" }}>
                {hasMovies ? `Results for “${keyword}”` : "Search results will appear here"}
              </Typography>
              {hasMovies && (
                <Typography lineHeight="18px" size="12px">
                  click on a movie title to learn more about it
                </Typography>
              )}
            </div>
            <div className="list-content" style={{ display: hasMovies ? "block" : "none" }}>
              {movies.map((movie) => (
                <ListElement key={movie.imdbID}>{movie.Title}</ListElement>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
