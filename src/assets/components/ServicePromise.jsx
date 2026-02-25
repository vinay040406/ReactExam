import React from "react";
import { Arc1, Arc2, Delivery, Secure, Support } from "../../Icons";
import { ServiceData } from "../Data/PageData";

const ServicePromise = () => {
  return (
    <div className="max-w-360 w-full lg:px-30 md:px-10 px-4 lg:py-20 flex flex-col items-center md:gap-8">
      <h2 className="md:text-[48px] text-[35px] font-semibold md:whitespace-nowrap md:text-left text-center">
        Our Service Promise
      </h2>
      <div className="flex w-full py-10 items-center justify-center md:gap-5 gap-2">
        <Delivery />
        <Arc1 />
        <Secure />
        <Arc2 classname={"lg:mt-25 md:mt-20 sm:mt-15 mt-10"} />
        <Support />
      </div>
      <div className="flex justify-center lg:justify-between w-full lg:px-10">
        {ServiceData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:gap-3 text-center max-w-70.25  w-full"
          >
            <h3 className="lg:text-2xl text-xl font-semibold m-2">
              {item.heading}
            </h3>
            <p className="lg:text-base text-sm font-normal">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePromise;
