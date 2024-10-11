'use client'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const MainHeader = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='SwiperSlide1' />
                </SwiperSlide>
                <SwiperSlide>
                    <div className='SwiperSlide2' />
                </SwiperSlide>
                <SwiperSlide>
                    <div className='SwiperSlide3' />
                </SwiperSlide>
            </Swiper>
        </>

    )
}

export default MainHeader