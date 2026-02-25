import React from "react";
import { DownArrow } from "../../../Icons";

const QuickLinks = ({ custom, li }) => {
  return (
    <div>
      <ul className={`md:text-base text-sm font-normal ${custom}`}>
        <li className={`${li}`}>
          Leggings <DownArrow />
        </li>
        <li className={`${li}`}>
          Women’s Clothing <DownArrow />
        </li>
        <li className={`lg:flex items-center hidden `}>
          Men’s Clothing <DownArrow />
        </li>
        <li className="md:flex hidden items-center whitespace-nowrap">
          Yoga & Pilates Equipment <DownArrow />
        </li>
        <li className="md:flex hidden items-center whitespace-nowrap">
          Jewelry & Wellness <DownArrow />
        </li>
        <li
          className={`md:flex hidden items-center whitespace-nowrap`}
        >
          Accessories <DownArrow />
        </li>
        <li className={`md:flex hidden whitespace-nowrap`}>Size Guide</li>
      </ul>
    </div>
  );
};

export default QuickLinks;
