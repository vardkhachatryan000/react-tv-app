import { movieRepository } from "@/data/repositories/movieRepository";

export const setSelectedMovieIdUseCase =  (id) => {
    movieRepository.setSelectedMovieId(id);
};
