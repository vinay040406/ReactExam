import React from "react";
import { Arc1, Arc2, Delivery, Secure, Support } from "../../Icons";
import { ServiceData } from "../Data/PageData";

const ServicePromise = () => {
  return (
    <div className="max-w-360 w-full lg:px-30 md:px-10 px-4 sm:py-10 flex flex-col items-center md:gap-8">
      <h2 className="text-[48px]  font-semibold md:whitespace-nowrap md:text-left text-center">
        Our Service Promise
      </h2>
      <div className="flex w-full items-center lg:justify-center justify-around md:px-0 lg:px-0 px-10 md:gap-5 md:pb-0 pb-2 gap-4 md:mt-0 mt-4">
        <Delivery />
        <Arc1 className={"lg:flex hidden"} />
        <Secure />
        <Arc2 classname={"lg:mt-25 md:mt-20 sm:mt-15 mt-10 lg:flex hidden"} />
        <Support />
      </div>
      <div className="flex justify-center lg:justify-around w-full">
        {ServiceData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:gap-3 text-center max-w-70.25  w-full"
          >
            <h3 className="lg:text-2xl md:text-xl text-lg font-semibold m-2">
              {item.heading}
            </h3>
            <p className="lg:text-base text-sm font-normal hidden md:flex">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePromise;
