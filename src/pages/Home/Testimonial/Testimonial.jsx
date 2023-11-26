

import { FaFaceSmile } from "react-icons/fa6";
import 'swiper/css';
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';



const Testimonial = () => {
    const [stories,setStories] = useState([]);
    useEffect(()=>{
        fetch('stories.json')
        .then(res=>res.json())
        .then(data=>setStories(data))
    },[])
    return (
        <div className="mb-20">
            <h2 className='text-4xl italic  text-amber-500 text-center mb-12 font-bold'>What our client Say</h2>
            
            <Swiper
        slidesPerView={5}
        spaceBetween={5}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        
       
       {
        stories.map(story=> <SwiperSlide key={story.id}>
            
            <div className='pt-5 pb-5 px-4 w-60 border-2 mb-10 bg-slate-700 '>
                
                <h2 className='text-3xl mb-5 text-center font-bold text-lime-500 '>{story.name}</h2>
                <p className='text-teal-50'>{story.testimonial}</p>
                <div className="flex items-center justify-center mt-2"><FaFaceSmile className="text-xl text-yellow-600 text-center"></FaFaceSmile></div>
               
            </div>
            
            </SwiperSlide> )
       }
      </Swiper>
            
        </div>
    );
};

export default Testimonial;