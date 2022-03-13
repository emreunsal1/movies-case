import axios from "axios";
import { IMovie } from "./../interfaces";

export const searchMovies = async (keyword: string): Promise<IMovie[]> => {
  try {
    const response = await axios.get(`http://www.omdbapi.com/`, {
      params: {
        s: keyword,
        apikey: process.env.NEXT_PUBLIC_API_KEY,
      },
    });
    if (response.data.Search) {
      return response.data.Search;
    }
    return [];
  } catch (e) {
    return [];
  }
};
