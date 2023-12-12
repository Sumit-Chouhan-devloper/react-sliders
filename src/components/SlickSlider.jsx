import React from "react";
import Slider from "react-slick";
const SlickSlider = () => {
  const simpleSlickSlider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  const slider = React.useRef(null);

  return (
    <div className="container px-3 mx-auto simple_slick">
      <h1 className=" font-bold text-center text-[32px] sm:text-[40px] pt-4 pb-5">React Slick Slider</h1>
      <Slider {...simpleSlickSlider} ref={slider}>
        <div className="h-[200px] sm:px-2 w-full flex justify-center items-center">
          <div className="bg-red-500 flex justify-center items-center h-full">
            <h3>Slide 1</h3>
          </div>
        </div>
        <div className="h-[200px] sm:px-2 w-full">
          <div className="bg-green-500 flex justify-center items-center h-full">
            <h3>Slide 2</h3>
          </div>
        </div>
        <div className="h-[200px] sm:px-2 w-full">
          <div className="bg-blue flex justify-center items-center h-full">
            <h3>Slide 3</h3>
          </div>
        </div>
        <div className="h-[200px] sm:px-2 w-full">
          <div className="bg-orange-500 flex justify-center items-center h-full">
            <h3>Slide 4</h3>
          </div>
        </div>
        <div className="h-[200px] sm:px-2 w-full">
          <div className="bg-sky-500 flex justify-center items-center h-full">
            <h3>Slide 5</h3>
          </div>
        </div>
      </Slider>
      <div className="flex justify-between pt-5">
        <button
          className="bg-red-500 text-white h-[35px] w-[35px] rounded-full"
          onClick={() => slider?.current?.slickPrev()}
        >
          P
        </button>
        <button
          className="bg-red-500 text-white rounded-full h-[35px] w-[35px]"
          onClick={() => slider?.current?.slickNext()}
        >
          N
        </button>
      </div>
    </div>
  );
};

export default SlickSlider;
