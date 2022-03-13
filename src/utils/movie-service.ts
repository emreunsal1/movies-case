import axios from "axios";
import { IMovie } from "./../interfaces";

const movieService = axios.create({
  params: {
    apikey: process.env.NEXT_PUBLIC_API_KEY,
  },
});

export const searchMovies = async (keyword: string): Promise<IMovie[]> => {
  try {
    const response = await movieService.get(`https://www.omdbapi.com/`, {
      params: {
        s: keyword,
      },
    });
    return response.data.Search || [];
  } catch (e) {
    return [];
  }
};
