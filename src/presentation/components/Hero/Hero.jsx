import { useState } from 'react';
import { Button, Image } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

export default function Hero({ featuredMovie, isVideoPlaying }) {
    const [visible, setVisible] = useState(false);

    function getFeaturedCoverImage() {
        return `/images/${featuredMovie.coverImage}`;
    }

    function getFeaturedTitleImage() {
        return `/images/${featuredMovie.titleImage || 'FeaturedTitleImage.png'}`;
    }

    return (
        <section
            className="relative min-h-[60vh] flex items-center"
            aria-label="Hero Section"
        >
            {isVideoPlaying ? (
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src={featuredMovie.videoUrl}
                />
            ) : (
                <div
                    className="absolute inset-0 bg-cover bg-center z-10"
                    style={{ backgroundImage: `url(${getFeaturedCoverImage()})` }}
                    aria-hidden="true"
                />
            )}

            <div className="absolute inset-0 bg-black opacity-60 z-1" />

            <div className="relative px-4 max-w-1/2 flex flex-col gap-4 z-10">
                <span className='text-2xl'>{featuredMovie.category}</span>
                <img src={getFeaturedTitleImage()} alt="Title Img" />
                <div className='flex flex-col text-2xl'>
                    <span className='flex'>{featuredMovie.releaseYear} {featuredMovie.rating} {featuredMovie.duration}</span>
                    <p className='mt-3'>{featuredMovie.description}</p>
                </div>
                <div className='flex gap-4'>
                    <Button type="primary" shape="round" icon={<CaretRightOutlined />} size="large" onClick={() => setVisible(true)}>
                        Play
                    </Button>
                    <Button type="default" shape="round" size="large">
                        More Info
                    </Button>
                </div>
                <Image
                    style={{ display: 'none' }}
                    width={200}
                    preview={{
                        visible,
                        destroyOnHidden: true,
                        imageRender: () => (
                            <video
                                muted
                                width="90%"
                                controls
                                src={featuredMovie.videoUrl}
                            />
                        ),
                        toolbarRender: () => null,
                        onVisibleChange: value => {
                            setVisible(value);
                        },
                    }}
                />
            </div>
        </section>
    );
}
