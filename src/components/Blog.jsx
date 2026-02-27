import React from "react";

import Button from "../common/Button";
import { ReadMoreArrow } from "../Icons";
import { blogData } from "../utils/PageData";
import ProductsHeading from "../common/ProductsHeading";

const Blog = () => {
  return (
    <div className="max-w-285 lg:mt-35 md:mt-25 mt-10 2xl:px-0 px-10 md:gap-12.5 gap-8 w-full flex flex-col">
      <div className="flex flex-col lg:gap-5 gap-8">
        <ProductsHeading
          customize={"lg:justify-between"}
          heading={"From The Blog"}
          svg1={
            <Button
              text={"View All Blogs"}
              padding={"px-6 lg:flex hidden py-3 bg-[rgba(1,198,181,1)] text-white"}
            />
          }
        />
      </div>
      <div className="w-full flex justify-center flex-wrap lg:gap-6 gap-10">
        {blogData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col  gap-2 max-w-91 w-full cursor-pointer duration-300 ease-in "
          >
            <img
              className="object-cover h-full w-full"
              src={item.imageSrc}
              alt=""
            />
            <span className="text-base font-normal">May 25, 2025</span>
            <h3 className="text-2xl font-semibold">{item.heading}</h3>
            <p className="text-base font-normal tracking-wide text-[#414143]">
              {item.desc}
            </p>
            <span
              className="cursor-pointer flex items-center gap-2 text-base font-medium text-[rgba(1,198,181,1)]"
              onClick={() => {
                navigate("/");
              }}
            >
              Read More <ReadMoreArrow />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
