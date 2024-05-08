import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import "./SlidingImage.css";


const SlidingImage = () => {
    return (
        <Swiper

            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            loop={true}
        >
            <SwiperSlide><img src="https://media.licdn.com/dms/image/D4E22AQF-_wKiSYKHeg/feedshare-shrink_800/0/1712699163566?e=2147483647&v=beta&t=Xh6PR84dUdIJy7jy6sviZE7bzJmjZxizQvw0rEw-Lxk" alt="Image 1" /></SwiperSlide>
            <SwiperSlide><img src="https://www.wbrcae.com/uploads/umaine-pail-lab-v25-1400x800.jpg" alt="Image 2" /></SwiperSlide>
            <SwiperSlide><img src="https://composites.umaine.edu/wp-content/uploads/sites/600/2020/06/W2_DownEast.jpeg" alt="Image 3" /></SwiperSlide>
        </Swiper>
    );
};

export default SlidingImage;