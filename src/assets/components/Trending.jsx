import React from "react";
import ProductsHeading from "./Common/ProductsHeading";
import ProductCard from "./Common/ProductCard";
import { trendingData } from "../Data/PageData";
import Button from "./Common/Button";
import { Left, Right } from "./Common/Arrow";

const Trending = () => {
  const handleClick = (value) => {
    const existingProducts = JSON.parse(localStorage.getItem("Products")) || [];
    existingProducts.push(value);
    localStorage.setItem("Products", JSON.stringify(existingProducts));
  };
  return (
    <div className="max-w-360 w-full lg:px-30 p-10 lg:py-20 flex flex-col gap-10 items-center">
      <ProductsHeading
        customize={"justify-between"}
        svg1={<Left />}
        svg2={<Right />}
        heading={"Trending Product's"}
        desc={"Use this area to describe the collection."}
      />
      <div className="flex lg:flex-row flex-col justify-center max-w-100 lg:max-w-360 w-full ">
        {trendingData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col p-4 duration-200 ease-in h-132.5 gap-4 cursor-pointer hover:shadow-2xl hover:rounded-2xl"
          >
            <div className="h-68.75 overflow-hidden max-w-93 w-full flex">
              <ProductCard
                onClick={() => handleClick(item)}
                imageSrc={item.imageSrc}
                peerHeight={"lg:h-67 lg:w-93"}
              />
            </div>
            <div className="flex flex-col gap-3 ">
              <h3 className="text-2xl font-medium">{item.name}</h3>
              <p className="text-base font-normal text-[#414143]">{item.desc}</p>
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
