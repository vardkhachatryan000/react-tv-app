import { movieRepository } from "@/data/repositories/MovieRepository";
import { mapToDomain } from "@/domain/models/Movie.js";

export const getMoviesUseCase = async () => {
  const movies = await movieRepository.getMovies();
  const lastSeenId = movieRepository.getSelectedMovieId();

  if (lastSeenId) {
    movies.sort((a, b) => (a.id === lastSeenId ? -1 : 1));
  }

  return movies.map(mapToDomain);
};
