import React from "react";
import { DownArrow } from "../../../Icons";

const QuickLinks = ({ custom }) => {
  return (
    <div className={` ${custom}`}>
      <ul className="md:text-base text-sm font-normal">
        <li>
          Leggings <DownArrow />
        </li>
        <li>
          Women’s Clothing <DownArrow />
        </li>
        <li>
          Men’s Clothing <DownArrow />
        </li>
        <li className="md:flex hidden">
          Yoga & Pilates Equipment <DownArrow />
        </li>
        <li className="md:flex hidden">
          Jewelry & Wellness <DownArrow />
        </li>
        <li className="md:flex hidden">
          Accessories <DownArrow />
        </li>
        <li className="md:flex hidden">Size Guide</li>
      </ul>
    </div>
  );
};

export default QuickLinks;
