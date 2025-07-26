import { movieRepository } from "@/data/repositories/MovieRepository";

export const setSelectedMovieIdUseCase =  (id) => {
    movieRepository.setSelectedMovieId(id);
};
