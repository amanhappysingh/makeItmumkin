import React from 'react'
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';


const Cards = ({imgs}) => {
  return (
   <div className='w-full h-[80vh]'>
     <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {
            imgs?.length > 0 && imgs.map((item) => {
                return <SwiperSlide><img src={item} className='w-full h-full object-cover' /></SwiperSlide>
            })
        }
        
      </Swiper>
   </div>
  )
}

export default Cards
