
import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import 'tailwindcss/tailwind.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
           <div className='relative inset-0 bg-gradient-to-r from-purple-300 to-green-700 opacity-60'>
          <img
            className="object-cover w-full h-96 opacity-40"
            src="https://i.pinimg.com/originals/8b/e1/2a/8be12a3eb8c677767940c7bae13a3e6a.jpg"
            alt="image slide 1"
          /></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
            <h1 className="text-4xl mb-2 text-white">Your Header Text</h1>
            <p className="text-lg text-white">This is some example paragraph text.</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center">
              <FaArrowRight className="mr-2" />
              Click me
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className=' inset-0 bg-gradient-to-r from-purple-300 to-green-700 opacity-60'>
          <img
            className="object-cover w-full h-96 opacity-40 " 
            src="https://wallpaperaccess.com/full/7422712.jpg"
            alt="image slide 2"
          /></div>
          <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-4xl mb-2 text-white">Your Header Text</h1>
            <p className="text-lg text-white">This is some example paragraph text.</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center">
              <FaArrowRight className="mr-2" />
              Click me
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=' inset-0 bg-gradient-to-r from-purple-300 to-green-700 opacity-60'>
          <img
            className="object-cover w-full h-96 outline-purple-950 opacity-40"
            src="https://wallpaperaccess.com/full/7422697.jpg"
            alt="image slide 3"
          />
        </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-4xl mb-2 text-white">Your Header Text</h1>
            <p className="text-lg text-white">This is some example paragraph text.</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center">
              <FaArrowRight className="mr-2" />
              Click me
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' inset-0 bg-gradient-to-r from-purple-300 to-green-700 opacity-60'>

         
          <img
            className="object-cover w-full h-96 opacity-40"
            src="https://wallpapercave.com/wp/wp2784571.jpg"
            alt="image slide 4"
          /> </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-4xl mb-2 text-white">Your Header Text</h1>
            <p className="text-lg text-white">This is some example paragraph text.</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center">
              <FaArrowRight className="mr-2" />
              Click me
            </button>
          </div>
        </SwiperSlide>
      
      </Swiper>
    </>
  );
};

export default Banner;



































