import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlickCenterMod = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '30px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px',
        },
      },
    ],
  };

  return (
    <div className="container px-3 mx-auto center_slick">
      <h1 className="font-bold text-center text-2xl sm:text-3xl pt-4 pb-5">
        Slick Slider Center Mode
      </h1>
      <Slider {...settings}>
        <div className="px-3 py-6">
          <div className="h-[200px] bg-red-500 flex justify-center items-center"></div>
        </div>
        <div className="px-3 py-6">
          <div className="h-[200px] bg-green-500 flex justify-center items-center"></div>
        </div>
        <div className="px-3 py-6">
          <div className="h-[200px] bg-blue flex justify-center items-center"></div>
        </div>
        <div className="px-3 py-6">
          <div className="h-[200px] bg-black flex justify-center items-center"></div>
        </div>
        <div className="px-3 py-6">
          <div className="h-[200px] bg-yellow-200 flex justify-center items-center"></div>
        </div>
      </Slider>
    </div>
  );
};

export default SlickCenterMod;
