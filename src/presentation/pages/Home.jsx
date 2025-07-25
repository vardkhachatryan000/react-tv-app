import HeroSection from '../components/Hero/Hero';
import Trending from '../components/Trending/Trending';
import { useMovieViewModel } from '@/presentation/viewmodels/MovieViewModel.js';
import { Flex, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

export default function Home() {
  const { movies, featuredMovie, isVideoPlaying, isLoading, selectMovie } = useMovieViewModel();

  if (isLoading) {
    return (
      <>
        <Flex align="center" gap="middle" className="h-screen justify-center">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
        </Flex>
      </>
    );
  } else if (!featuredMovie || movies.length === 0) {
    return (
      <Flex align="center" gap="middle" className="h-screen justify-center">
        <h1 className="text-2xl">No movies available</h1>
      </Flex>
    );
  } else {
    return (
      <>
        <HeroSection featuredMovie={featuredMovie} isVideoPlaying={isVideoPlaying} />
        <Trending movies={movies} selectMovie={selectMovie} />
      </>
    );
  }
}
