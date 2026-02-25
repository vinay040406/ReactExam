import React, { use, useEffect } from "react";
import Button from "./Common/Button";
import { carouselArray } from "../Data/PageData";

const Carousel = () => {
  useEffect(() => {
    const carousel = document.querySelector(".parent");
    let scrollAmount = 0;
    const scrollPerClick = window.innerWidth;

    const scrollInterval = setInterval(() => {
      if (scrollAmount < carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount += scrollPerClick;
        carousel.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      } else {
        scrollAmount = 0;
        carousel.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="w-full flex overflow-y-hidden parent">
      {carouselArray.map((item, index) => (
        <div
          key={index}
          className="w-full shrink-0  flex justify-center items-center "
        >
          <div className="max-w-360 relative w-full flex justify-center flex-col bg-[linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,1))]">
            <img
              className="md:h-full h-182.25 w-full scale-x-[-1] object-cover object-center "
              src={item.bgImage}
              alt=""
            />
            <div className="absolute max-w-147.25 w-full md:p-0 p-5 flex flex-col text-white md:items-start md:text-left text-center items-center md:ml-30 ml-0 gap-1">
              <h3 className="md:text-[24px] text-base font-normal tracking-widest">
                {item.title}
              </h3>
              <h1 className="font-bold xl:text-[66px] lg:text-[55px] text-[32px] md:whitespace-nowrap tracking-wide">
                {item.heading}
              </h1>
              <p className="md:text-[20px] text-base font-normal">
                {item.desc}
              </p>
              <Button text={" Shop Now"} padding={"px-6 py-3 mt-4"} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
