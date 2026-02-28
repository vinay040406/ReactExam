import React, { useRef, useState, useEffect } from "react";
import { Cart, FreeIcon, Search, User } from "../utils/Icons";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const navigate = useNavigate();
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState();
  const [hamburgerState, setHamburgerState] = useState(false);

  const existingProducts = JSON.parse(localStorage.getItem("Products"));

  const handleSearchClick = () => {
    inputRef.current.style.display = "block";
    inputRef.current.focus();
  };

  function MobileMenu() {
    useEffect(() => {
      if (hamburgerState) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }, [hamburgerState]);
  }
  MobileMenu();

  return (
    <div className="sticky top-0 flex flex-col max-w-417.5 w-full z-1000 ">
      <div className="w-full bg-white flex md:justify-between justify-center 2xl:px-30 sm:px-10 px-5 py-2">
        <div className="flex items-center gap-2 text-center ">
          <FreeIcon />
          <p className="tracking-wide text-base font-normal text-[#414143]">
            Free Delivery & Free Returns Within 15 Days
          </p>
        </div>
        <input
          ref={inputRef}
          type="text "
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          className="border border-[rgba(1,198,181,1)] hidden max-w-100 px-3 py-.5 w-full rounded-lg outline-[#01C6B5]"
          placeholder="Search for Products"
        />
        <div className="gap-2 hidden md:flex">
          <Search onClick={handleSearchClick} />
          <User />
          <div className=" border relative border-[rgba(1,198,181,1)] text-[rgba(1,198,181,1)] flex justify-center items-center w-[29.96px] rounded-full">
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
      <div className="w-full text-white lg:py-5 md:py-4 py-2 font-medium text-lg bg-[rgba(1,198,181,1)] 2xl:px-30 sm:px-10 px-5  flex justify-between items-center">
        <Link to={"/"}>
          <span>Logo</span>
        </Link>
        <ul className={` ${hamburgerState ? "show" : ""} flex gap-6 menu`}>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link>
            <li>Contact</li>
          </Link>
          <Link to={"/cart"}>
            <li>Cart</li>
          </Link>

          {hamburgerState && (
            <ul className="flex flex-col gap-6 text-center">
              <Link to={"/cart"}>
                <li className="relative flex justify-center items-center">
                  <Cart
                    onClick={() => {
                      navigate("/cart");
                    }}
                  />
                  <sup className="absolute -top-1 right-[40%] text-white">
                    {existingProducts?.length}
                  </sup>
                </li>
              </Link>
              <li>Search Products</li>
              <li>Profile</li>
            </ul>
          )}
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
