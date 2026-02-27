import React from "react";
import ProductsHeading from "../common/ProductsHeading";
import ProductCard from "../common/ProductCard";
import { trendingData } from "../utils/PageData";
import Button from "../common/Button";
import { Left, Right } from "../common/Arrow";

const Trending = () => {
  const handleClick = (value) => {
    const existingProducts = JSON.parse(localStorage.getItem("Products")) || [];
    existingProducts.push(value);
    localStorage.setItem("Products", JSON.stringify(existingProducts));
  };
  return (
    <div className="max-w-285 lg:mt-35 md:mt-25 mt-10 2xl:px-0 px-10 w-full flex flex-col items-center md:gap-10 gap-7">
      <ProductsHeading
        customize={"lg:justify-between justify-center"}
        svg1={<Left />}
        svg2={<Right />}
        svgCustomize={"lg:flex hidden"}
        heading={"Trending Product's"}
        desc={"Use this area to describe the collection."}
      />
      <div className="flex  justify-center gap-6 flex-wrap ">
        {trendingData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col p-4 duration-200 ease-in h-132.5 gap-4 cursor-pointer border border-[#0000000D] hover:shadow-2xl md:w-91 "
          >
            <div className="h-68.75 overflow-hidden w-full flex justify-center">
              <ProductCard
                onClick={() => handleClick(item)}
                imageSrc={item.imageSrc}
                peerHeight={"h-[275px] max-w-91 w-full"}
                height={"h-[275px] w-[364px] object-cover"}
              />
            </div>
            <div className="flex flex-col gap-3 ">
              <h3 className="text-2xl font-medium">{item.name}</h3>
              <p className="text-base font-normal text-[#414143]">
                {item.desc}
              </p>
              <div className="flex justify-between">
                <span className="font-bold text-2xl">{item.price}</span>
                <span>{item.ratingSrc}</span>
              </div>
              <Button
                text={"Shop Now"}
                padding={
                  "py-3 border border-[#414143] text-black hover:bg-[rgba(1,198,181,1)] hover:text-white hover:border-none"
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
