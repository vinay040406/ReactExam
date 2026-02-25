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
}) => {
  return (
    <div className="flex flex-col gap-5 text-center">
      <div
        className={`bg-[rgba(245,245,245,1)] ${height} flex justify-center items-center relative  peer duration-200 ease-in`}
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
              className="overflow-hidden"
            />
          </div>
        </div>
        <img
          className="object-contain object-center h-full w-full"
          src={imageSrc}
          alt=""
        />
      </div>
      <div
        className={`bg-[rgba(0,0,0,0.3)] absolute ${peerHeight} peer-hover:flex hidden duration-200 ease-in p-10 justify-center items-center`}
      >
        <Button
          onClick={onClick}
          text={"Add To Cart"}
          padding={"px-8 py-4 z-10000 bg-[rgba(1,198,181,1)] text-white"}
        />
      </div>
      <span
        className={`${spanText} font-normal tracking-wide flex justify-center   `}
      >
        {productName} <p>{spanPrice}</p>
      </span>
    </div>
  );
};

export default ProductCard;
