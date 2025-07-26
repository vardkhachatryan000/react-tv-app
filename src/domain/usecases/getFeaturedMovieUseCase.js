import { movieRepository } from "@/data/repositories/MovieRepository";
import { mapToDomain } from "@/domain/models/FeaturedMovie.js";

export const getFeaturedMovieUseCase = async () => {
  const featuredMovie = await movieRepository.getFeaturedMovie();

  return mapToDomain(featuredMovie);
};
