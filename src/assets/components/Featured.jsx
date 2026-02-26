import React from "react";
import ProductsHeading from "./Common/ProductsHeading";
import ProductCard from "./Common/ProductCard";
import { featuredData } from "../Data/PageData";
import { Left, Right } from "./Common/Arrow";
import { useRef } from "react";

const Featured = () => {
  const productRef = useRef();
  const handleClick = (value) => {
    const existingProducts = JSON.parse(localStorage.getItem("Products")) || [];
    existingProducts.push(value);
    localStorage.setItem("Products", JSON.stringify(existingProducts));
  };
  return (
    <div className="max-w-360 lg:px-30 lg:py-20 p-10  w-full">
      <div className="flex flex-col lg:gap-5 gap-8">
        <ProductsHeading
          customize={"justify-between"}
          svg1={
            <Left
              onClick={() => {
              }}
            />
          }
          svg2={<Right onClick={() => {}} />}
          heading={"Featured Products"}
          desc={"Use this area to describe the collection."}
        />
        <div className="flex gap-13 flex-wrap justify-center">
          {featuredData.slice(0, 3).map((item, index) => (
            <ProductCard
              ref={productRef}
              onClick={() => handleClick(item)}
              key={index}
              price={item.price}
              imageSrc={item.imageSrc}
              productName={item.productName}
              height={"h-110.25 sm:w-91 w-70"}
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
