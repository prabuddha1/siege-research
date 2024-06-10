import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import "./SlidingImage.css";

const SlidingImage = () => {
    const images = [
        {
            original: "https://i.imgur.com/I7i4c0N.jpeg",
            thumbnail: "https://i.imgur.com/I7i4c0N.jpeg",
            alt: "Image 1",
            id: 1
        },
        {
            original: "https://i.imgur.com/3KZ9778.jpeg",
            thumbnail: "https://i.imgur.com/3KZ9778.jpeg",
            alt: "Image 2",
            id: 2
        },
        {
            original: "https://i.imgur.com/hTubviF.jpeg",
            thumbnail: "https://i.imgur.com/hTubviF.jpeg",
            alt: "Image 3",
            id: 3
        }
    ];


    return (

        <ImageGallery className="react-image-gallery-slide"
        items={images}
        showNav={true}
        showThumbnails={false}
        autoPlay={true}
        slideInterval={7000}
        showPlayButton={false}
        showFullscreenButton={false}
    />
    );
};

export default SlidingImage;
