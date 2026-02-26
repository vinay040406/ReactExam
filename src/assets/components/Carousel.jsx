import React, { useEffect, useState } from "react";
import Button from "./Common/Button";
import { carouselArray } from "../Data/PageData";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselArray.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselArray.length]);

  return (
    <div className="relative w-full max-w-360 md:min-h-192 min-h-180 md:text-left text-center " >
      {carouselArray.map((slide, index) => (
        <div
          key={slide.id}
          className={`slides z-10 bg-cover bg-center absolute w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${slide.bgImage}')` }}
        >
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "linear-gradient(to right, #00000000 10%, #00000000 1%)",
            }}
          />
          <div className="relative z-20 text-white h-full flex flex-col md:items-start items-center justify-center lg:px-35 px-5">
            <h1 className="tracking-widest text-xs sm:text-sm md:text-base lg:text-lg font-normal">
              {slide.title}
            </h1>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mt-2 sm:mt-3 md:mt-4">
              {slide.heading}
            </h1>
            <h1 className="font-normal text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl mt-3 sm:mt-4 md:mt-5 leading-relaxed">
              {slide.desc}
            </h1>
            <button className="bg-[#01C6B5] px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base md:text-lg font-medium mt-6 sm:mt-8 md:mt-10 hover:bg-[#00b39a] transition-colors">
              Shop now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
