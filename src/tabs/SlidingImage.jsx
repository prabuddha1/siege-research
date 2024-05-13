import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import "./SlidingImage.css";

const SlidingImage = () => {
    const images = [
        {
            original: "https://media.licdn.com/dms/image/D4E22AQF-_wKiSYKHeg/feedshare-shrink_800/0/1712699163566?e=2147483647&v=beta&t=Xh6PR84dUdIJy7jy6sviZE7bzJmjZxizQvw0rEw-Lxk",
            thumbnail: "https://media.licdn.com/dms/image/D4E22AQF-_wKiSYKHeg/feedshare-shrink_800/0/1712699163566?e=2147483647&v=beta&t=Xh6PR84dUdIJy7jy6sviZE7bzJmjZxizQvw0rEw-Lxk",
            alt: "Image 1"
        },
        {
            original: "https://www.wbrcae.com/uploads/umaine-pail-lab-v25-1400x800.jpg",
            thumbnail: "https://www.wbrcae.com/uploads/umaine-pail-lab-v25-1400x800.jpg",
            alt: "Image 2"
        },
        {
            original: "https://composites.umaine.edu/wp-content/uploads/sites/600/2020/06/W2_DownEast.jpeg",
            thumbnail: "https://composites.umaine.edu/wp-content/uploads/sites/600/2020/06/W2_DownEast.jpeg",
            alt: "Image 3"
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
