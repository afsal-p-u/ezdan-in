import React, { useState } from "react";
import { load } from "@cashfreepayments/cashfree-js";
import apiRequest from "../lib/apiRequest";
import { useCartContext } from "../contexts/CartContext";

const Checkout = () => {
  const [data, setData] = useState(null);
  const [session, setSession] = useState(null);
  const { cart } = useCartContext()

  const setDatas = (e) => {
    setData(() => {
      return { ...data, [e.target.name]: e.target.value, orderedItems: cart?.data };
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();

    apiRequest
      .post("/payment/create", { ...data, amount: 1.0 })
      .then((res) => {
        setSession(res.data.payment_session_id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let cashfree;
  var initializeSDK = async function () {
    cashfree = await load({
      mode: import.meta.env.VITE_CASHFREE_MODE == "production" ? "production" : "sandbox",
      // mode: "sandbox",
      // mode: "production" 
    });
  };
  initializeSDK();

  const doPayment = async () => {
    let checkoutOptions = {
      paymentSessionId: session,
      redirectTarget: "_self",
    };
    cashfree.checkout(checkoutOptions);
  };

  return (
    <div className="py-5 px-[100px] bg-[--secondary] w-full flex">
      <div className="bg-[--primary] flex w-full px-5 py-5 rounded-md shadow-sm gap-3 mb-10 flex-col">
        <div className="">
          <p className="font-medium text-gray-700 mb-2">Delivery</p>

          <div className="grid grid-cols-2 gap-5">
            <div className="mt-2">
              <p className="text-xs mb-1">First Name</p>
              <input
                type="text"
                name="firstName"
                id=""
                placeholder="First name"
                className="px-7 py-2 rounded-md w-full text-sm border-[1px] outline-none"
                onChange={(e) => setDatas(e)}
                required
                autoComplete="off"
              />
            </div>
            <div className="mt-2">
              <p className="text-xs mb-1">Last Name</p>
              <input
                type="text"
                name="lastName"
                id=""
                placeholder="Last name"
                className="px-7 py-2 rounded-md w-full text-sm border-[1px] outline-none"
                onChange={(e) => setDatas(e)}
                required
                autoComplete="off"
              />
            </div>
            <div className="mt-2">
              <p className="text-xs mb-1">Address</p>
              <input
                type="text"
                name="address"
                id=""
                placeholder="Address"
                className="px-7 py-2 rounded-md w-full text-sm border-[1px] outline-none"
                onChange={(e) => setDatas(e)}
                required
                autoComplete="off"
              />
            </div>
            <div className="mt-2">
              <p className="text-xs mb-1">Appartment, house no, etc {"("}optional{")"}</p>
              <input
                type="text"
                name="otherInfo"
                id=""
                placeholder="Appartment, house no, etc"
                className="px-7 py-2 rounded-md w-full text-sm border-[1px] outline-none"
                onChange={(e) => setDatas(e)}
                required
                autoComplete="off"
              />
            </div>
            <div className="mt-2">
              <p className="text-xs mb-1">City</p>
              <input
                type="text"
                name="city" 
                id=""
                placeholder="City"
                className="px-7 py-2 rounded-md w-full text-sm border-[1px] outline-none"
                onChange={(e) => setDatas(e)}
                required
                autoComplete="off"
              />
            </div>
            <div className="mt-2">
              <p className="text-xs mb-1">Pincode</p>
              <input
                type="number"
                name="pincode"
                id=""
                placeholder="Pincode"
                className="px-7 py-2 rounded-md w-full text-sm border-[1px] outline-none"
                onChange={(e) => setDatas(e)}
                required
                autoComplete="off"
              />
            </div>
            <div className="mt-2">
              <p className="text-xs mb-1">State</p>
              <input
                type="text"
                name="state"
                id=""
                placeholder="State"
                className="px-7 py-2 rounded-md w-full text-sm border-[1px] outline-none"
                onChange={(e) => setDatas(e)}
                required
                autoComplete="off"
              />
            </div>
            <div className="mt-2">
              <p className="text-xs mb-1">Phone</p>
              <input
                type="number"
                name="phone"
                id=""
                placeholder="Phone"
                className="px-7 py-2 rounded-md w-full text-sm border-[1px] outline-none"
                onChange={(e) => setDatas(e)}
                required
                autoComplete="off"
              />
            </div>
            <div className="mt-2">
              <p className="text-xs mb-1">Email</p>
              <input
                type="email"
                name="email"
                id=""
                placeholder="Email"
                className="px-7 py-2 rounded-md w-full text-sm border-[1px] outline-none"
                onChange={(e) => setDatas(e)}
                required
                autoComplete="off"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end flex-col">
          {session ? (
            <div className="flex items-center justify-end gap-5">
              <button
                type="submit"
                className="px-7 py-2 font-medium text-xs rounded-md bg-[--third] text-white"
                id="renderBtn"
                onClick={doPayment}
              >
                Pay Now
              </button>
            </div>
          ) : (
            <div className="flex justify-end">
              <button
                className="px-7 py-2 font-medium text-xs rounded-md bg-[--third] text-white"
                onClick={handleSubmit}
              >
              Verify Order
            </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
