import { useEffect, useState } from "react";
import { getMoviesUseCase } from "@/domain/usecases/getMoviesUseCase";
import { getFeaturedMovieUseCase } from "@/domain/usecases/getFeaturedMovieUseCase";
import { setSelectedMovieIdUseCase } from "@/domain/usecases/setSelectedMovieIdUseCase";

export function useHomeViewModel() {
    const [movies, setMovies] = useState([]);
    const [featuredMovie, setFeaturedMovie] = useState(null);
    const [isBgVideoPlaying, setIsBgVideoPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isVideoPlayerVisible, setIsVideoPlayerVisible] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            const movies = await getMoviesUseCase();
            const featured = await getFeaturedMovieUseCase();
            setMovies(movies);
            setFeaturedMovie(featured);
            setIsLoading(false);
        };

        loadData();
    }, []);


    useEffect(() => {
        if (!selectedMovie) return;

        setIsBgVideoPlaying(false);
        setFeaturedMovie(selectedMovie);
        setSelectedMovieIdUseCase(selectedMovie.id);

        const timeout = setTimeout(() => {
            setIsBgVideoPlaying(Boolean(selectedMovie.videoUrl));
        }, 2000);

        return () => clearTimeout(timeout);
    }, [selectedMovie]);

    const selectMovie = (movie) => {
        setSelectedMovie(movie);
    };

    return {
        movies,
        featuredMovie,
        isBgVideoPlaying,
        isVideoPlayerVisible,
        isLoading,
        selectMovie,
        setIsVideoPlayerVisible
    };
}
