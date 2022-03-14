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
  const [isResults, setIsResults] = useState(false);

  const searchOnClick = async () => {
    setIsResults(true);
    const response = await searchMoviesClient(keyword);
    setMovies(response);
    setKeyword("");
  };
  const clearOnclick = () => {
    setIsResults(false);
  };

  return (
    <div className="App">
      <div className="search-contianer">
        <div className="header">
          <Typography fontWeight={500} size="32px" lineHeight="48px">
            OMDb API
          </Typography>
          <Typography fontWeight={400} size="16px" lineHeight="24px">
            The Open Movie Database 🍿
          </Typography>
        </div>
        <Card>
          <Typography fontWeight={600} size="16px" lineHeight="24px">
            Movie Title
          </Typography>
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
              <Typography fontWeight={600} lineHeight="24px" size="16px">
                {isResults ? "Results for “search”" : "Search results will appear here"}
              </Typography>
              {isResults && (
                <Typography fontWeight={400} lineHeight="18px" size="12px">
                  click on a movie title to learn more about it
                </Typography>
              )}
            </div>
            <div className="list-item" style={{ display: isResults ? "block" : "none" }}>
              {movies.map((movie) => (
                <ListElement>{movie.Title}</ListElement>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
