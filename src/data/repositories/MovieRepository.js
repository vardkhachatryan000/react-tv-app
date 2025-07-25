import { serviceApi } from "../sources/ServiceApi.js";
import { getSelectedMovieId, setSelectedMovieId } from "../sources/SessionStorage.js";
import { mapToData } from "../entities/MovieData.js";
import { mapToData as featuredMapToData } from "../entities/FeaturedMovie.js";

export const movieRepository = {
    async getAllMovies() {
        const allMovies = await serviceApi.fetchAll();

        return allMovies;
    },
    async getMovies() {
        const allMovies = await this.getAllMovies();
        
        const movies = allMovies.TendingNow
            .map(mapToData)
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 50);
            
        return movies;
    },
    async getFeatureMovie() {
        const allMovies = await this.getAllMovies();
        return featuredMapToData(allMovies.Featured);
    },
    getSelectedMovieId: () => getSelectedMovieId(),
    setSelectedMovieId: (id) => setSelectedMovieId(id)
};