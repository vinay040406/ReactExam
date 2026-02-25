import React, { useState } from "react";
import { Cart, FreeIcon, Search, User } from "../../Icons";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({ navRightCss, navRight }) => {
  const [hamburgerState, setHamburgerState] = useState(false);
  const existingProducts = JSON.parse(localStorage.getItem("Products"));
  

  const navigate = useNavigate();
  return (
    <div className="sticky top-0 flex flex-col max-w-360 w-full z-100 ">
      <div className="w-full bg-white flex md:justify-between justify-center xl:px-30  md:px-10 py-3">
        <div className="flex items-center gap-2 text-center ">
          <FreeIcon />
          <p className="tracking-wide">
            Free Delivery & Free Returns Within 15 Days
          </p>
        </div>
        <div className="gap-2 hidden md:flex">
          <Search />
          <User />
          <div className=" border relative border-[rgba(1,198,181,1)] flex justify-center items-center w-[29.96px] rounded-full">
            <Cart
              onClick={() => {
                navigate("/cart");
              }}
            />
            <sup className="absolute right-0 top-[0.2px] text-[rgba(1,198,181,1)]">
              {existingProducts?.length}
            </sup>
          </div>
        </div>
      </div>
      <div className="w-full text-white font-medium text-lg bg-[rgba(1,198,181,1)] xl:px-30  px-10 flex justify-between items-center">
        <Link to={"/"}>
          <img
            src="/Images/Logo.png"
            alt=""
            className="h-15 w-15 object-cover"
          />
        </Link>
        {navRight}
        <ul
          // className={`md:flex hidden gap-6 py-5 md:relative fixed top-0 left-0  menu  duration-200 ease-in md:flex-row flex-col md:h-auto md:w-auto justify-center items-center h-screen w-screen  md:bg-transparent bg-[rgba(1,198,181,1)] ${hamburgerState ? "" : ""}`}
          className={` ${hamburgerState ? "show" : ""} flex gap-6 menu py-5 ${navRightCss}`}
        >
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link>
            <li>Contact</li>
          </Link>
          <Link to={"/cart"}>
            <li>Cart</li>
          </Link>
        </ul>
        {hamburgerState ? (
          <RxCross2
            className="z-10000 md:hidden"
            onClick={() => {
              setHamburgerState(!hamburgerState);
            }}
          />
        ) : (
          <GiHamburgerMenu
            onClick={() => {
              setHamburgerState(!hamburgerState);
            }}
            className=" md:hidden z-10000"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
