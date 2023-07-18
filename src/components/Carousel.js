import '../style/carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { cakes } from './cake';



export default function Carousel() {
  return (
    <Swiper 
        centeredSlides={true}
        autoplay={{
          delay: 1600,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      {cakes.map((cake, index) => (
        <SwiperSlide key={index} className='slide'>
          <img src={cake.image} alt={cake.title} />
        
        </SwiperSlide>

      ))
        
      }

      
      
      </Swiper>
  );
}
