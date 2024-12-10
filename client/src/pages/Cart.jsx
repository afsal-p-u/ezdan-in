import React, { useState, useEffect } from "react";

import { Link, Navigate, useNavigate } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";
import { useAuthContext } from "../contexts/AuthContext";

const Cart = () => {
  const { cart, setCart, removeCartItem } = useCartContext();
  const { user, setRedirect } = useAuthContext();
  const navigate = useNavigate()
  const shippingCharge = 40;
  const discount = 0;

  useEffect(() => {}, [cart]);

  const handleRemove = (id) => {
    removeCartItem(id);
  };

  const checkoutControl = () => {
    if (user) {
      navigate("/checkout")
    } else {
      setRedirect('sign-in')
    }
  }

  return (
    <div className="py-5 px-[100px] bg-[--secondary] w-full">
      <div className="bg-[--primary] min-h-[50vh] w-full flex rounded-md mb-4 shadow-sm">
        {cart?.data?.length > 0 ? (
          <>
            <div className="basis-4/5 grid grid-cols-2 items-start">
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

            <div className="basis-1/5 px-5 py-3 flex flex-col gap-1 justify-between">
              <div className="flex gap-2 flex-col items-start border-[1px] px-5 py-5 rounded-md">
                <div className="flex gap-5 items-center w-[180px] justify-between">
                  <p className="text-sm text-gray-900">Shipping Charge:</p>
                  <p className="text-sm text-black font-medium">₹{shippingCharge}</p>
                </div>
                <div className="flex gap-5 items-center w-[180px] justify-between">
                  <p className="text-sm text-gray-900">Cart Value:</p>
                  <p className="text-sm text-black font-medium">₹{cart?.cartValue}</p>
                </div>
                <div className="flex gap-5 items-center w-[180px] justify-between">
                  <p className="text-sm text-gray-900">Discount:</p>
                  <p className="text-sm text-black font-medium">₹0</p>
                </div>
              </div>

              <div className="flex items-end flex-col">
                <div className="flex gap-5 mt-3 items-center">
                  <p className="text-lg font-semibold">Total:</p>
                  <p className="text-lg font-medium text-gray-700">
                    ₹{cart?.cartValue
                      ? cart?.cartValue + shippingCharge - discount
                      : 0}
                  </p>
                </div>

                <div className="">
                  {/* <Link to="/checkout"> */}
                    <button 
                      className="px-5 py-2 rounded-md  mt-2 text-white border-md bg-blue-500 font-medium"
                      onClick={checkoutControl}
                    >
                      Checkout
                    </button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="px-10 py-5">
            <p className="text-sm font-medim text-gray-500">Cart is empty!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
