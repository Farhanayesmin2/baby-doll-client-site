import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "tailwindcss/tailwind.css";
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
          <div className="relative inset-0 bg-gradient-to-r from-purple-300 to-green-700 opacity-50  ">
            <img
              className="object-cover w-full h-[500px] opacity-90"
              src="https://i.pinimg.com/originals/8b/e1/2a/8be12a3eb8c677767940c7bae13a3e6a.jpg"
              alt="image slide 1"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-poppins ">
            <h1 className="lg:text-5xl leading-5  mb-2 font-serif text-[#03045e] font-bold sm:text-3xl">
              Your Favourite{" "}
              <span className="text-[#0077B6]">Dolls Collection</span>{" "}
            </h1>
            <p className="lg:text-lg sm:text-sm text-gray-700">
              Doll collection is a popular hobby and a form of artistic<br></br>{" "}
              expression cherished by many enthusiasts around the world.
            </p>
            <button className="mt-4 bg-[#03045e] hover:bg-[#0077b6] shadow-2xl shadow-white lg:text-xl  h-16 text-white font-bold py-2 px-4 rounded-full inline-flex items-center">
              Explore More
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" inset-0 bg-gradient-to-r from-purple-300 to-green-700 opacity-60">
            <img
              className="object-cover w-full  h-[500px] opacity-80 "
              src="https://wallpaperaccess.com/full/7422712.jpg"
              alt="image slide 2"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-poppins ">
            <h1 className="lg:text-5xl leading-5  mb-2 font-serif text-[#03045e] font-bold sm:text-3xl">
              Your Favourite{" "}
              <span className="text-[#0077B6]">Dolls Collection</span>{" "}
            </h1>
            <p className="lg:text-lg sm:text-sm text-gray-700">
              Doll collection is a popular hobby and a form of artistic<br></br>{" "}
              expression cherished by many enthusiasts around the world.
            </p>
            <button className="mt-4 bg-[#03045e] hover:bg-[#0077b6] shadow-2xl shadow-white lg:text-xl  h-16 text-white font-bold py-2 px-4 rounded-full inline-flex items-center">
              Explore More
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" inset-0 bg-gradient-to-r from-purple-300 to-green-700 opacity-60">
            <img
              className="object-cover w-full  h-[500px] outline-purple-950 opacity-80"
              src="https://wallpaperaccess.com/full/7422697.jpg"
              alt="image slide 3"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-poppins ">
            <h1 className="lg:text-5xl leading-5  mb-2 font-serif text-[#03045e] font-bold sm:text-3xl">
              Your Favourite{" "}
              <span className="text-[#0077B6]">Dolls Collection</span>{" "}
            </h1>
            <p className="lg:text-lg sm:text-sm text-gray-700">
              Doll collection is a popular hobby and a form of artistic<br></br>{" "}
              expression cherished by many enthusiasts around the world.
            </p>
            <button className="mt-4 bg-[#03045e] hover:bg-[#0077b6] shadow-2xl shadow-white lg:text-xl  h-16 text-white font-bold py-2 px-4 rounded-full inline-flex items-center">
              Explore More
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" inset-0 bg-gradient-to-r from-purple-300 to-green-700 opacity-60">
            <img
              className="object-cover w-full  h-[500px] opacity-80"
              src="https://wallpapercave.com/wp/wp2784571.jpg"
              alt="image slide 4"
            />{" "}
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-poppins ">
            <h1 className="lg:text-5xl leading-5  mb-2 font-serif text-[#03045e] font-bold sm:text-3xl">
              Your Favourite{" "}
              <span className="text-[#0077B6]">Dolls Collection</span>{" "}
            </h1>
            <p className="lg:text-lg sm:text-sm text-gray-700">
              Doll collection is a popular hobby and a form of artistic<br></br>{" "}
              expression cherished by many enthusiasts around the world.
            </p>
            <button className="mt-4 bg-[#03045e] hover:bg-[#0077b6] shadow-2xl shadow-white lg:text-xl  h-16 text-white font-bold py-2 px-4 rounded-full inline-flex items-center">
              Explore More
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
