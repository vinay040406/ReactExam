import React from "react";
import ProductsHeading from "../common/ProductsHeading";
import ProductCard from "../common/ProductCard";
import { featuredData } from "../utils/PageData";
import { Left, Right } from "../common/Arrow";
import { useRef } from "react";

const Featured = () => {
  const productRef = useRef();
  const handleClick = (value) => {
    const existingProducts = JSON.parse(localStorage.getItem("Products")) || [];
    existingProducts.push(value);
    localStorage.setItem("Products", JSON.stringify(existingProducts));
  };
  return (
    <div className="max-w-285 w-full lg:mt-32.5 md:mt-25 mt-10 2xl:px-0 px-10">
      <div className="flex flex-col md:gap-12.5 gap-8">
        <ProductsHeading
          customize={"2xl:justify-between"}
          svg1={<Left onClick={() => {}} />}
          svg2={<Right onClick={() => {}} />}
          svgCustomize={"2xl:flex hidden"}
          heading={"Featured Products"}
          desc={"Use this area to describe the collection."}
        />
        <div className="flex  gap-6 flex-wrap justify-center">
          {featuredData.slice(0, 3).map((item, index) => (
            <ProductCard
              ref={productRef}
              onClick={() => handleClick(item)}
              key={index}
              price={item.price}
              imageSrc={item.imageSrc}
              productName={item.productName}
              height={"h-110.25 w-[364px]"}
              peerHeight={"max-w-[364px] w-full h-110.25"}
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
