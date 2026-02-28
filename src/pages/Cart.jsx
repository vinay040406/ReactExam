import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductsHeading from "../components/common/ProductsHeading";
import { Minus, Plus, Trash } from "../utils/Icons";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/common/Button";

const Cart = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(1);

  // useEffect(() => {
  //   const productsData = JSON.parse(localStorage.getItem("Products"));
  //   if (productsData?.length > 0) {
  //     navigate("/cart");
  //   } else {
  //     navigate("/");
  //   }
  // }, []);

  let totalPrice = 0;
  const localData = JSON.parse(localStorage.getItem("Products")) || [];

  const [filteredItem, setFilteredItem] = useState(localData);

  filteredItem.map((item) => {
    let sliced = Number(item.price.slice(1));
    totalPrice += Number(sliced);
  });

  const handleTrash = (value) => {
    let f = filteredItem.filter((item) => value !== item);
    setFilteredItem(f);
    localStorage.setItem("Products", JSON.stringify(f));
  };

  return (
    <div className="w-full flex justify-center flex-col gap-30 items-center">
      <Navbar />
      <div className="w-full max-w-360 flex flex-col gap-10 mb-20">
        <div className="flex md:justify-between  items-center">
          <ProductsHeading heading={"Your Cart "} customize={"px-5 lg:justify-start"} />
          <Link to={"/"}>
            <li className="md:whitespace-nowrap list-none underline decoration-1 md:text-2xl text-xl font-medium md:mr-0 mr-10 px-5">
              Continue Shopping
            </li>
          </Link>
        </div>
        {localData.length > 0 ? (
          <div className="flex flex-col w-full max-w-360">
            <div className="flex bg-[rgba(244,244,244)] p-6 justify-between text-xl font-medium">
              <span>Product</span>
              <span>Quantity</span>
              <span>Total</span>
            </div>
            <div className="flex flex-col md:p-6 p-2 md:gap-6 gap-4">
              {filteredItem?.map((item, index) => (
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
                      <Plus
                        onClick={() => {
                          value && setValue(value + 1);
                        }}
                      />
                    </div>
                    <Trash onClick={() => handleTrash(item)} />
                  </div>
                  <span className="md:text-xl text-base font-medium">
                    {Number(item.price.slice(1)).toPrecision(3) * value}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-5 w-full">
              <div className="flex flex-col gap-4 max-w-82 w-full">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Estimated total </span>
                  <span>Dhs.{totalPrice.toPrecision(3) * value} AED </span>
                </div>
                <p className="text-base font-normal tracking-wide text-[#414143]">
                  Taxes, discounts and shipping calculated at checkout.{" "}
                </p>
                <Button
                  text={"Checkout"}
                  padding={"py-3 bg-[rgba(1,198,181,1)] text-white"}
                />
              </div>
            </div>
          </div>
        ) : (
          <p className="text-xl font-normal text-[#414143] px-10">
            Your Cart is Empty
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
