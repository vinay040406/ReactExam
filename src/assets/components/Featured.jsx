import React from "react";
import ProductsHeading from "./Common/ProductsHeading";
import ProductCard from "./Common/ProductCard";
import { LeftArrow, RightArrow } from "../../Icons";
import { featuredData } from "../Data/PageData";

const Featured = () => {
  const handleClick = (value) => {
    const existingProducts = JSON.parse(localStorage.getItem("Products")) || [];
    existingProducts.push(value);
    localStorage.setItem("Products", JSON.stringify(existingProducts));
  };
  return (
    <div className="max-w-360 lg:p-30  p-10  w-full">
      <div className="flex flex-col lg:gap-5 gap-8">
        <ProductsHeading
          customize={"justify-between"}
          svg1={<LeftArrow />}
          svg2={<RightArrow />}
          heading={"Featured Products"}
          desc={"Use this area to describe the collection."}
        />
        <div className="flex gap-13 flex-wrap justify-center">
          {featuredData.map((item, index) => (
            <ProductCard
              onClick={() => handleClick(item)}
              key={index}
              price={item.price}
              imageSrc={item.imageSrc}
              productName={item.productName}
              height={"h-110.25 w-91"}
              peerHeight={"h-110.25 w-91"}
              tag={"border-[rgba(255,255,255,1)] rounded-4xl bg-white"}
              spanText={"text-2xl"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
