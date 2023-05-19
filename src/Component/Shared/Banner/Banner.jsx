import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "tailwindcss/tailwind.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
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
      {/* <div className="px-8 py-2 shadow-sm my-2 shadow-gray-400 dark:text-gray-100 w-[100%]">
	<div className="flex items-center mx-auto container justify-center md:justify-between py-2 animate-marquee">
		<div>
			<span>Get up to 50% off your first order + free shipping,&nbsp;</span>
			<a href="#" rel="noopener noreferrer" className="underline">sign up</a>today!
		</div>
		<a href="#" rel="noopener noreferrer" className="items-center gap-2 hidden md:flex">
			<svg role="img" viewBox="0 0 22 22" className="fill-current h-7 w-7 font-extrabold text-[#c09da9] ">
				<path clipRule="evenodd" d="M6.5 1.75a1.75 1.75 0 100 3.5h3.51a8.785 8.785 0 00-.605-1.389C8.762 2.691 7.833 1.75 6.5 1.75zm5.49 3.5h3.51a1.75 1.75 0 000-3.5c-1.333 0-2.262.941-2.905 2.111a8.778 8.778 0 00-.605 1.389zM1.75 6.75v3.5h18.5v-3.5H1.75zm18 5H21a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75h-2.761a3.25 3.25 0 00-2.739-5c-2.167 0-3.488 1.559-4.22 2.889a9.32 9.32 0 00-.28.553 9.32 9.32 0 00-.28-.553C9.988 1.809 8.667.25 6.5.25a3.25 3.25 0 00-2.739 5H1A.75.75 0 00.25 6v5c0 .414.336.75.75.75h1.25V21c0 .414.336.75.75.75h16a.75.75 0 00.75-.75v-9.25zm-1.5 0H3.75v8.5h14.5v-8.5z" fillRule="evenodd"></path>
			</svg>
			<span className="hover:underline focus-visible:underline text-[#56d3c4] font-extrabold">Gift Cards</span>
		</a>
	</div>
</div> */}
    </>
  );
};

export default Banner;
