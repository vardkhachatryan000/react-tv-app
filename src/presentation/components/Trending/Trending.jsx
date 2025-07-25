import SliderComponent from './Slider';
import { PER_PAGE } from '../../consts';

export default function Trending({movies, selectMovie}) {
    return (
        <>
            <h1 className='text-xl mt-4'>Trending Now</h1>
            <SliderComponent items={movies} itemsPerSlide={PER_PAGE} selectMovie={selectMovie} />
        </>
    )
}