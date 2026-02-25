import React, { useState } from "react";
import { Like } from "../../../Icons";
import Button from "./Button";

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
        onClick={onClick}
        className={`bg-[rgba(245,245,245,1)] ${height} flex justify-center items-center relative  peer duration-200 ease-in`}
      >
        <div className="flex justify-between px-5 absolute w-full top-6 items-center">
          <span className={`text-xl font-normal px-7 py-2 ${tag}`}>
            {price}
          </span>
          <div className="h-8.75 w-8.75 cursor-pointer flex justify-center items-center rounded-full bg-white">
            <Like />
          </div>
        </div>
        <img
          className="object-contain object-center h-full w-full"
          src={imageSrc}
          alt=""
        />
      </div>
      <div
        className={`bg-[rgba(0,0,0,0.3)] absolute ${peerHeight} peer-hover:flex hidden p-10 justify-center items-center`}
      >
        <Button text={"Add To Cart"} padding={"px-8 py-4"} />
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
