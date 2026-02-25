import React from "react";
import ProductsHeading from "./Common/ProductsHeading";
import Button from "./Common/Button";
import { Facebook, LinkedIn, Twitter, Youtube } from "../../Icons";
import QuickLinks from "./Common/QuickLinks";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-[rgba(241,241,241)] xl:h-113.5 h-fit max-w-full md:px-10 px-3 flex xl:flex-row flex-col justify-between items-center">
        <img
          className="h-full max-w-93 w-full object-fit "
          src="/Images/footer1.png"
          alt=""
        />
        <div className="flex flex-col items-center px-3">
          <ProductsHeading
            heading={"Subscribe To Our Newsletter"}
            customize={"justify-center w-fit lg:mt-0 mt-8"}
          />
          <p className="text-base font-normal tracking-wider max-w-135.25 w-full text-center text-[rgba(65,65,67,1)]">
            Get weekly updates on the newest design stories, case studies and
            tips right in your mailbox.{" "}
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex max-w-133 w-full justify-between mt-10 border border-[#4141431A] p-2"
          >
            <input
              className="w-full px-3 mr-3 outline-[#01C6B5]"
              type="text"
              placeholder="Email Address"
            />
            <Button type={"submit"} text={"Subscribe"} padding={"px-6 py-3"} />
          </form>
        </div>
        <img
          className="h-full w-fit object-cover  "
          src="/Images/footer2.png"
          alt=""
        />
      </div>
      <div className="flex flex-col bg-[#414143] w-full lg:px-30 md:px-10 md:pt-20 pt-8 px-3 text-white">
        <div className="flex justify-between">
          <div className="flex flex-col gap-4 max-w-81.5 w-full">
            <h5 className="md:text-xl text-base mr-3 font-normal">
              Eco-friendly yoga mats that blend-high performance.
            </h5>
            <span className="text-xl font-medium">Follow us On :</span>
            <div className="flex gap-3 flex-wrap">
              <Youtube /> <Facebook /> <LinkedIn /> <Twitter />
            </div>
          </div>
          <div className="flex justify-between max-w-120 w-full">
            <div className="flex flex-col gap-3">
              <h5 className="text-xl font-medium">Quick Links</h5>
              <QuickLinks />
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="text-xl font-medium">Other Links</h5>
              <ul className="flex flex-col gap-3">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-t-[#878585] mt-8 py-4 justify-center flex">
          <span className="text-sm  tracking-wide font-normal">
            Copyright © 2025 Yogalis. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
