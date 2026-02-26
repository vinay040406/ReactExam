import React from "react";
import ProductsHeading from "./Common/ProductsHeading";
import Button from "./Common/Button";
import { ReadMoreArrow } from "../../Icons";
import { blogData } from "../Data/PageData";

const Blog = () => {
  return (
    <div className="max-w-360 lg:px-30 p-10 lg:py-20 w-full">
      <div className="flex flex-col lg:gap-5 gap-8">
        <ProductsHeading
          customize={"justify-between"}
          heading={"From The Blog"}
          svg1={
            <Button
              text={"View All Blogs"}
              padding={"px-6 py-3 bg-[rgba(1,198,181,1)] text-white"}
            />
          }
        />
      </div>
      <div className="w-full flex justify-center md:mt-10 flex-wrap md:gap-13">
        {blogData.map((item, index) => (
          <div
            key={index}
            className="flex group flex-col  gap-2 max-w-91 w-full cursor-pointer duration-300 ease-in hover:shadow-2xl hover:rounded:lg p-3"
          >
            <img
              className="object-cover group-hover:scale-102 h-full w-full"
              src={item.imageSrc}
              alt=""
            />
            <span className="text-base font-normal">May 25, 2025</span>
            <h3 className="text-2xl font-semibold">{item.heading}</h3>
            <p className="text-base font-normal tracking-wide text-[#414143]">{item.desc}</p>
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
