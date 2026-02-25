import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import ProductsHeading from "../Common/ProductsHeading";
import { Minus, Plus, Trash } from "../../../Icons";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Common/Button";
import QuickLinks from "../Common/QuickLinks";

const Cart = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  useEffect(() => {
    const productsData = JSON.parse(localStorage.getItem("Products"));
    if (productsData) {
      navigate("/cart");
    } else {
      navigate("/");
    }
  }, []);

  let totalPrice = 0;
  const localData = JSON.parse(localStorage.getItem("Products")) || [];

  const [filteredItem, setFilteredItem] = useState(localData);

  filteredItem.map((item) => {
    let sliced = item.price.slice(1);
    totalPrice += Number(sliced);
  });

  const handleTrash = (value) => {
    let f = filteredItem.filter((item) => value !== item);
    setFilteredItem(f);
    console.log(f);
    localStorage.setItem("Products", JSON.stringify(f));
  };

  const handlePlus = () => {
    setValue(value + 1);
    console.log();
  };

  return (
    <div className="w-full flex justify-center flex-col gap-30 items-center">
      <Navbar navRight={<QuickLinks  custom={"flex gap-0.5 px-2"}  li={"xxl:flex hidden items-center whitespace-nowrap"}/>} navRightCss={"hidden"} />
      <div className="w-full max-w-360 flex flex-col gap-10 mb-20">
        <div className="flex md:justify-between  items-center">
          <ProductsHeading heading={"Your Cart "} />
          <Link to={"/"}>
            <li className="md:whitespace-nowrap list-none underline decoration-1 md:text-2xl text-xl font-medium md:mr-0 mr-10">
              Continue Shopping
            </li>
          </Link>
        </div>
        <div className="flex flex-col w-full max-w-360">
          <div className="flex bg-[rgba(244,244,244)] p-6 justify-between text-xl font-medium">
            <span>Product</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>
          <div className="flex flex-col md:p-6 p-2 md:gap-6 gap-4">
            {filteredItem.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex gap-3 items-center md:flex-row flex-col text-center">
                  <img
                    className="h-25 w-25 object-cover "
                    src={item.imageSrc}
                    alt=""
                  />
                  <div className="flex  flex-col gap-3 text-base font-normal">
                    <span className="w-30">{item.productName}</span>
                    <span>{item.price}</span>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="flex  items-center">
                    <Minus
                      onClick={() => {
                        value !== 0 && setValue(value - 1);
                      }}
                    />
                    <span className="md:px-5 p-3 md:py-3 md:text-xl text-base font-normal border border-[#4141431A]">
                      {value}
                    </span>
                    <Plus onClick={() => handlePlus()} />
                  </div>
                  <Trash onClick={() => handleTrash(item)} />
                </div>
                <span className="md:text-xl text-base font-medium">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-5 w-full">
            <div className="flex flex-col gap-4 max-w-82 w-full">
              <div className="flex justify-between text-lg font-semibold">
                <span>Estimated total </span>
                <span>Dhs.{totalPrice.toFixed(3)} AED </span>
              </div>
              <p className="text-base font-normal tracking-wide text-[#414143]">
                Taxes, discounts and shipping calculated at checkout.{" "}
              </p>
              <Button text={"Checkout"} padding={"py-3"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
