
import Slider from "react-slick";

const SliderComponent = ({ items, itemsPerSlide = 3, selectMovie }) => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: itemsPerSlide,
        slidesToScroll: itemsPerSlide
    };

    function gerCoverImage(name) {
        return `/images/${name}`;
    }

    return (
        <div className="slider-container mt-4">
            <Slider {...settings} arrows={false} className="flex items-center">
                {items.map((item) => (
                    <div key={item.id} className="px-1" onClick={() => selectMovie(item)}>
                        <img
                            src={gerCoverImage(item.coverImage)}
                            alt={item.title}
                            className='w-full h-auto cursor-pointer object-cover'
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderComponent;
