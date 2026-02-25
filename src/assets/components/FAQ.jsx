import React, { useState } from "react";
import ProductsHeading from "./Common/ProductsHeading";
import { DownArrow, UpArrow } from "../../Icons";

const FAQ = () => {
  const [open, setOpen] = useState();

  const questions = [
    {
      ques: "Our commitment to payment security",
      ans: "All direct payment gateways adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express, and Discover.",
    },
    {
      ques: "Our policy for returns and refunds",
      ans: "All direct payment gateways adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express, and Discover.",
    },
    {
      ques: "Product delivery times",
      ans: "All direct payment gateways adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express, and Discover.",
    },
    {
      ques: "Our warranty policy",
      ans: "All direct payment gateways adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express, and Discover.",
    },
  ];

  const handleToggle = (val) => {
    setOpen(open === val ? null : val);
  };
  return (
    <div className="max-w-360 lg:px-30 p-10 lg:py-20 w-full">
      <div className="flex flex-col gap-10">
        <ProductsHeading
          customize={"justify-center text-center"}
          heading={"Frequently Asked Questions"}
          desc={"Real Questions. Expert Answers. Total Confidence."}
        />
        <div className="flex flex-col gap-6">
          {questions.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col border gap-2 ${open === index ? " border-[rgba(1,198,181,1)]" : "border-[rgba(65,65,67,0.4)] "} lg:px-10 px-3 py-5`}
            >
              <div className="flex justify-between items-center">
                <h4 className="md:text-xl text-[20px] font-medium">{item.ques}</h4>
                <span
                  onClick={() => {
                    handleToggle(index);
                  }}
                >
                  {open === index ? <UpArrow /> : <DownArrow />}
                </span>
              </div>
              {open === index && (
                <p className="text-base font-normal tracking-wider">
                  {item.ans}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
