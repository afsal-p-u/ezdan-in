import React, { useState } from "react";
import { load } from "@cashfreepayments/cashfree-js";
import apiRequest from "../lib/apiRequest";

const Checkout = () => {
  const [data, setData] = useState(null);
  const [session, setSession] = useState(null);

  const setDatas = (e) => {
    setData(() => {
      return { ...data, [e.target.name]: e.target.value };
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
          <p className="font-medium text-gray-700 mb-2">Enter Address</p>

          <div className="grid grid-cols-2 gap-5">
            <div className="mt-2">
              <p className="text-xs mb-1">Name:</p>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Enter name"
                className="px-7 py-2 rounded-md w-full text-sm border-[1px] outline-none"
                onChange={(e) => setDatas(e)}
                required
              />
            </div>
            <div className="mt-2">
              <p className="text-xs mb-1">Phone:</p>
              <input
                type="number"
                name="phone"
                id=""
                placeholder="Phone number"
                className="px-7 py-2 rounded-md w-full text-sm border-[1px] outline-none"
                onChange={(e) => setDatas(e)}
                required
              />
            </div>
            <div className="mt-2">
              <p className="text-xs mb-1">Email:</p>
              <input
                type="email"
                name="email"
                id=""
                placeholder="Enter email"
                className="px-7 py-2 rounded-md w-full text-sm border-[1px] outline-none"
                onChange={(e) => setDatas(e)}
                required
              />
            </div>
            <div className="mt-2">
              <p className="text-xs mb-1">Pincode:</p>
              <input
                type="number"
                name="pincode"
                id=""
                placeholder="Enter pincode"
                className="px-7 py-2 rounded-md w-full text-sm border-[1px] outline-none"
                onChange={(e) => setDatas(e)}
                required
              />
            </div>
            <div className="mt-2">
              <p className="text-xs mb-1">Address 1:</p>
              <input
                type="text"
                name="address1"
                id=""
                placeholder="Enter address 1"
                className="px-7 py-2 rounded-md w-full text-sm border-[1px] outline-none"
                onChange={(e) => setDatas(e)}
                required
              />
            </div>
            <div className="mt-2">
              <p className="text-xs mb-1">Address 2:</p>
              <input
                type="text"
                name="address2"
                id=""
                placeholder="Enter address 2"
                className="px-7 py-2 rounded-md w-full text-sm border-[1px] outline-none"
                onChange={(e) => setDatas(e)}
                required
              />
            </div>
            <div className="mt-2">
              <p className="text-xs mb-1">Address 3:</p>
              <input
                type="text"
                name="address3"
                id=""
                placeholder="Enter address 3"
                className="px-7 py-2 rounded-md w-full text-sm border-[1px] outline-none"
                onChange={(e) => setDatas(e)}
                required
              />
            </div>
            <div className="mt-2">
              <p className="text-xs mb-1">State:</p>
              <input
                type="text"
                name="state"
                id=""
                placeholder="Enter state"
                className="px-7 py-2 rounded-md w-full text-sm border-[1px] outline-none"
                onChange={(e) => setDatas(e)}
                required
              />
            </div>
            <div className="mt-2">
              <p className="text-xs mb-1">District:</p>
              <input
                type="text"
                name="district"
                id=""
                placeholder="Enter district"
                className="px-7 py-2 rounded-md w-full text-sm border-[1px] outline-none"
                onChange={(e) => setDatas(e)}
                required
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
