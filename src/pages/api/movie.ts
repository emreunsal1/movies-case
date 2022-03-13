import { NextApiRequest, NextApiResponse } from "next";
import { searchMovies } from "./../../utils/movie-service";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { search } = req.query;
  const movies = await searchMovies(search.toString());

  res.send(movies);
}
