import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="mt-5 bg-[--primary]">
        <div className="">
            <div className="px-[100px] pt-1 pb-5">
                <p className="font-medium mb-5 text-xl underline">About us</p>

                <div className="flex gap-10">
                    <div className="basis-1/3">
                    <h3 className="font-medium font-sm">Order and delivery</h3>
                    <div className="mt-2 flex flex-col gap-1">
                        <div className="">
                        <p className="text-sm">Delivery accross india</p>
                        </div>
                        <div className="">
                        <p className="text-sm">Delivery fee will apply</p>
                        </div>
                        <div className="">
                        <p className="text-sm">
                            All orders will be delivered by urbn.in
                        </p>
                        </div>
                        <div className="">
                        <p className="text-sm">Enter pincode details in homepage for estimated delivery timeline</p>
                        </div>
                    </div>
                    </div>

                    <div className="basis-1/3">
                    <h3 className="font-medium font-sm">Cancellation Policy</h3>
                    <div className="mt-2 flex flex-col gap-1">
                        <div className="">
                        <p className="text-sm">
                            Full refund if you cancel it before the order-is accepted by
                            us. For any queries on cancellation reach out to us via chat
                        </p>
                        </div>
                    </div>
                    </div>

                    <div className="basis-1/3">
                    <h3 className="font-medium font-sm">How to reach us</h3>
                    <div className="mt-2 flex flex-col gap-1">
                        <div className="">
                        <p className="text-sm">
                            Vice city, payyanur, near payyannur bus stand, kannur, kerala
                        </p>
                        </div>
                        <div className="">
                        <p className="text-sm">
                            urbanindia.in@gmail.com
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

          <div className="mt-10 bg-[--secondary] py-10 px-10 rounded-t-[50px] flex items-center justify-center">
            <div className="flex items-center justify-between bg-[--primary] px-16 py-10 rounded-2xl shadow-sm gap-[100px]">
                <p>Got any questions? Let's talk!</p>
                <button className="bg-[--third] text-white px-5 py-2 text-sm font-medium rounded-md">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
