import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";

const Cart = () => {
  const { cart, setCart, removeCartItem } = useCartContext();
  const shippingCharge = 40
  const discount = 0;

  useEffect(() => {
  }, [cart])
  

  const handleRemove = (id) => {
    removeCartItem(id);
  };

  return (
    <div className="min-h-[100vh] py-5 px-[100px] bg-[--secondary] w-full">
      <div className="bg-[--primary] w-full flex rounded-md">
        <div className="basis-2/4 gap-5">
          {cart?.data?.map((item, i) => (
            <div
              className="flex items-center gap-3 px-5 py-3 rounded-md"
              key={i}
            >
              <div className="w-[120px] h-[120px]">
                <img
                  src={item?.image[0]}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="">
                <p className="font-medium">{item?.name}</p>
                <h3 className="mt-1 font-semibold">₹{item?.price}</h3>

                <div className="mt-1">
                  <p className="text-xs font-medium">
                    Color: {item?.color} {" , "} Size: {item?.size}
                  </p>
                </div>

                <div className="mt-1 flex gap-2 items-center">
                  <p className="text-xs font-medium">Quantity:</p>

                  <div className="flex items-center gap-3">
                    {/* <div className="text-xl cursor-pointer">-</div> */}
                    <p className="text-sm">{item?.quantity}</p>
                    {/* <div className="text-xl cursor-pointer">+</div> */}
                  </div>
                </div>

                <button
                  className="text-red-500 font-medium text-xs"
                  onClick={() => handleRemove(item?.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="basis-2/4 px-5 py-3 flex flex-col gap-1">
          <div className="flex gap-5 items-center justify-start">
            <p className="text-sm font-medium">Shipping Charge:</p>
            <p className="text-sm font-medium">{shippingCharge}</p>
          </div>
          <div className="flex gap-5 items-center">
            <p className="text-sm font-medium">Cart Value:</p>
            <p className="text-sm font-medium">{cart?.cartValue}</p>
          </div>
          <div className="flex gap-5 items-center">
            <p className="text-sm font-medium">Discount:</p>
            <p className="text-sm font-medium">0</p>
          </div>
          <div className="flex gap-5 mt-3 items-center">
            <p className="text-lg font-medium">Total:</p>
            <p className="text-lg font-medium">{cart?.cartValue ? cart?.cartValue + shippingCharge - discount : 0}</p>
          </div>

          <div className="">
            <Link to="/checkout">
              <button className="px-5 py-2 rounded-md  mt-2 text-white border-md bg-blue-500 font-medium">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
