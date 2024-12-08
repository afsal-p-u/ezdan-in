import React from "react";
import { FiBox } from "react-icons/fi";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { BsHandbag } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { RiRefund2Line } from "react-icons/ri";
import { GrMapLocation } from "react-icons/gr";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <div>
      <div className="mt-5 bg-[--primary]">
        <div className="">
          <div className="px-[100px] pt-1 pb-5">
            <p className="font-medium mb-5 text-xl underline">About us</p>

            <div className="flex gap-10">
              <div className="basis-1/3">
                <h3 className="font-medium text-sm">Order and delivery</h3>
                <div className="mt-2 flex flex-col gap-1">
                  <div className="flex gap-2 items-center">
                    <FiBox className="text-xs text-gray-500" />
                    <p className="text-xs font-medium text-gray-500">
                      Delivery accross india
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <MdOutlineStarBorderPurple500 className="text-xs text-gray-500" />
                    <p className="text-xs font-medium text-gray-500">
                      Delivery fee will apply
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <BsHandbag className="text-xs text-gray-500" />
                    <p className="text-xs font-medium text-gray-500">
                      All orders will be delivered by ezdan.shop
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <SlLocationPin className="text-xs text-gray-500" />
                    <p className="text-xs font-medium text-gray-500">
                      Enter pincode details in homepage for estimated delivery
                      timeline
                    </p>
                  </div>
                </div>
              </div>

              <div className="basis-1/3">
                <h3 className="font-medium text-sm">Cancellation Policy</h3>
                <div className="mt-2 flex flex-col gap-1">
                  <div className="flex items-start gap-1">
                    <RiRefund2Line className="text-2xl text-gray-500" />
                    <p className="text-xs font-medium text-gray-500">
                      Full refund if you cancel it before the order-is accepted
                      by us. For any queries on cancellation reach out to us via
                      chat
                    </p>
                  </div>
                </div>
              </div>

              <div className="basis-1/3">
                <h3 className="font-medium text-sm">How to reach us</h3>
                <div className="mt-2 flex flex-col gap-1">
                  <div className="flex items-start gap-1">
                    <GrMapLocation className="text-xs text-gray-500" />
                    <p className="text-xs font-medium text-gray-500">
                      Vice city, payyanur, near payyannur bus stand, kannur,
                      kerala
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <CgMail className="text-xs text-gray-500" />
                    <p className="text-xs font-medium text-gray-500">
                      ezdan.in@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-[--secondary] py-10 px-10 rounded-t-[50px] flex items-center justify-center">
            <div className="flex items-center justify-between bg-[--primary] px-16 py-10 rounded-2xl shadow-sm gap-[100px]">
              <p className="font-medium text-sm">Got any questions? Let's talk!</p>
              <button className="bg-[--third] text-white px-5 py-2 text-sm font-medium rounded-md">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
