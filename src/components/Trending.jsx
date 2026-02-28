import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import ProductsHeading from "../components/common/ProductsHeading";
import ProductCard from "../components/common/ProductCard";
import { trendingData } from "../utils/PageData";
import Button from "../components/common/Button";
import { Rating } from "../utils/Icons";
import { Left, Right } from "./common/Arrow";

const Featured = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const handleNext = () => emblaApi?.scrollNext();
  const handlePrev = () => emblaApi?.scrollPrev();

  const handleClick = (value) => {
    const existingProducts = JSON.parse(localStorage.getItem("Products")) || [];
    existingProducts.push(value);
    localStorage.setItem("Products", JSON.stringify(existingProducts));
  };
  return (
    <div className="max-w-360 w-full lg:mt-32.5 md:mt-25 mt-10 2xl:px-0 sm:px-10 px-5">
      <div className="flex flex-col md:gap-12.5 gap-8">
        <ProductsHeading
          customize={
            "2xl:justify-between justify-center lg:text-left text-center 2xl:flex-row flex-col"
          }
          svg1={<Left onClick={handlePrev} />}
          svg2={<Right onClick={handleNext} />}
          heading={"Trending Product's"}
          desc={"Use this area to describe the collection."}
        />

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {trendingData.map((item, index) => (
              <div
                key={index}
                className="flex-none  w-full lg:w-1/2  xl:w-1/3 p-4 hover:shadow-[0_0_51.3px_0_rgba(0,0,0,0.1)]"
              >
                <ProductCard
                  onClick={() => handleClick(item)}
                  imageSrc={item.imageSrc}
                  height={"h-[441px] w-full"}
                  peerHeight={"h-[441px] w-full"}
                  price={item.price}
                  tag={
                    "bg-white px-6 py-2 rounded-[88px] border border-[#0000000D]"
                  }
                />
                <div className="flex flex-col items-start gap-3">
                  <h3 className="text-2xl font-medium flex justify-center mt-6">
                    {item.name}
                  </h3>
                  <p className="text-base font-normal tracking-widest opacity-75">
                    {item.desc}
                  </p>
                  <div className="flex justify-between w-full">
                    <span className="text-2xl font-bold">{item.price}</span>
                    <span>{item.ratingSrc}</span>
                  </div>
                  <button className="duration-200 ease-in w-full py-3.5 border border-[#000000] text-xl font-medium hover:bg-[#01C6B5] hover:text-white hover:border-none">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Featured;
