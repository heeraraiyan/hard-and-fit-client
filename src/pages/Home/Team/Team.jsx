import useTrainer from "../../../hooks/useTrainer";
// import TeamCard from "./TeamCard";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import { EffectCoverflow, Pagination } from 'swiper/modules';


const Team = () => {
    const [trainer] = useTrainer();

    return ( <div className="team-container pt-8 pb-20 mb-20 max-w-5xl mx-auto bg-slate-700">
      <h2 className="text-5xl text-amber-500 italic text-center font-bold mb-8">Our TEAM</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'3'}
        spaceBetween={20}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {trainer.map((train) => (
          <SwiperSlide key={train._id}>
            <h2 className="text-2xl text-slate-50 font-bold">{train.name}</h2>
            <img className="swiper-image h-[450px]" src={train.image} alt={train.name} />
            <h3 className="text-yellow-500">Experience:{train.experience} years</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

  

export default Team;