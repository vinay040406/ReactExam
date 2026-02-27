import React, { useState } from "react";
import Button from "./Button";
import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({
  price,
  imageSrc,
  productName,
  height,
  peerHeight,
  tag,
  spanText,
  spanPrice,
  onClick,
  ref,
  pText,
}) => {
  return (
    <div ref={ref} className="flex flex-col gap-5 text-center group">
      <div
        className={`bg-[rgba(245,245,245,1)]  flex justify-center items-center relative duration-200 ease-in`}
      >
        <div className="flex justify-between px-5 absolute w-full top-6 items-center">
          <span className={`text-xl font-normal px-7 py-2 ${tag}`}>
            {price}
          </span>
          <div className="h-8.75 w-8.75 cursor-pointer flex justify-center items-center rounded-full bg-white">
            <FaRegHeart
              onClick={(e) => {}}
              stroke="green"
              fill="#01C6B5"
              className="overflow-hidden z-101"
            />
          </div>
        </div>
        <img
          className={`object-contain object-center ${height}`}
          src={imageSrc}
          alt=""
        />
      </div>
      <div
        className={`bg-[rgba(0,0,0,0.3)] absolute ${peerHeight} hidden group-hover:flex duration-200 ease-in p-10 justify-center items-center`}
      >
        <Button
          onClick={onClick}
          text={"Add To Cart"}
          padding={"px-8 py-4 z-100 bg-[rgba(1,198,181,1)] text-white"}
        />
      </div>
      <span
        className={`${spanText} tracking-wide flex   `}
      >
        {productName} <p className={`${pText}`}>{spanPrice}</p>
      </span>
    </div>
  );
};

export default ProductCard;
