'use client'
import React from 'react';
import styles from '@/styles/Testimonial.module.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from "@nextui-org/image";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import StarIcon from '@mui/icons-material/Star';

import '@/component/mainHeader//styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { TestimonialData } from './const';

const Testimonial = () => {
  const getTruncatedText = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text; // If less than word limit, return the entire text
  };
  return (
    <div className={styles['testimonial-container']}>
      <div className='container'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={styles['mySwiper']}
        >
          {TestimonialData.map((item: any, index: number) => {
            return <SwiperSlide className={styles['testimonial-container-swipable']} key={index}>
              <div className={styles['testimonial-container-content']}>
                <div className={styles['testimonial-container-content-header']}>
                  <Image src={item.image} alt='testimonial_image' height={80} width={80} className={styles['testimonial-container-content-header-image']} />
                  <div className={styles['testimonial-container-content-headering']}>
                    <h2 className='text-black text-2xl font-semibold'>{item.name}</h2>
                    {[...Array(item.star)].map((_, i) => (
                      <StarIcon key={i} style={{ color: '#FFD700' }} />
                    ))}
                  </div>
                </div>
                <p className='w-[90%]'><span className={styles['testimonial-container-content-double-quotes-symbol']}> {getTruncatedText(item.review, 120)} </span></p>
              </div>
            </SwiperSlide>
          })}

        </Swiper>
      </div>
    </div>
  )
}

export default Testimonial;