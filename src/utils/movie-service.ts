import axios from "axios";
import { IMovie } from "./../interfaces";

const movieService = axios.create({
  baseURL: "https://www.omdbapi.com",
  params: {
    apikey: process.env.NEXT_PUBLIC_API_KEY,
  },
});

export const searchMovies = async (keyword: string): Promise<IMovie[]> => {
  try {
    const response = await movieService.get(`/`, {
      params: {
        s: keyword,
      },
    });
    return response.data.Search || [];
  } catch (e) {
    return [];
  }
};

export const searchMoviesClient = async (keyword: string): Promise<IMovie[]> => {
  try {
    const response = await axios.get(`/api/movie`, {
      params: {
        search: keyword,
      },
    });
    return response.data || [];
  } catch (e) {
    return [];
  }
};
