'use client'
import React from 'react';
import styles from '@/styles/Testimonial.module.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@/component/mainHeader//styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Testimonial = () => {
  return (
    <div className={styles['testimonial-container']}>
      <div className='container'>
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
          <SwiperSlide style={{ background:'transparent'}}>
            <div style={{ width: '100%', height: '40svh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <h1>Testimonials</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ background:'transparent'}}>
            <div style={{ width: '100%', height: '40svh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <h1>Testimonials</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ background:'transparent'}}>
            <div style={{ width: '100%', height: '40svh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <h1>Testimonials</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonial