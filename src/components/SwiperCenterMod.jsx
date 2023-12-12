import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
const SwiperSlider = () => {
  const simpleSwiperSlider = {
    slidesPerView: 4,
    spaceBetween: 16,
    navigation: false,
    loop: true, // Enable infinite loop
    pagination: {
      clickable: true,
    },

    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      640: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };

  const swiper = React.useRef(null);

  return (
    <div className="container px-3 mx-auto">
      <h1 className="font-bold text-center text-[32px] sm:text-[40px] pt-4 pb-5">
        Swiper.js Slider
      </h1>
      <Swiper
        className="!pb-8"
        pagination={true}
        modules={[Pagination]}
        {...simpleSwiperSlider}
        ref={swiper}
      >
        <SwiperSlide>
          <div className="h-[200px] px-2 w-full flex justify-center items-center bg-red-500">
            <h3>Slide 1</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[200px] px-2 w-full flex justify-center items-center bg-green-500">
            <h3>Slide 2</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[200px] px-2 w-full flex justify-center items-center bg-blue">
            <h3>Slide 3</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[200px] w-full flex justify-center items-center bg-orange-500">
            <h3>Slide 4</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[200px] px-2 w-full flex justify-center items-center bg-sky-500">
            <h3>Slide 5</h3>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-between pt-5">
        <button
          className="bg-red-500 text-white h-[35px] w-[35px] rounded-full"
          onClick={() => swiper.current.swiper.slidePrev()}
        >
          P
        </button>
        <button
          className="bg-red-500 text-white rounded-full h-[35px] w-[35px]"
          onClick={() => swiper.current.swiper.slideNext()}
        >
          N
        </button>
      </div>
    </div>
  );
};

export default SwiperSlider;
