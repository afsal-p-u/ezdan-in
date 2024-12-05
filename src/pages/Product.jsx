import React from "react";

import img1 from "../assets/1.webp";

const Product = () => {
  return (
    <div className="px-[100px] min-h-[100vh] py-5 bg-[var(--secondary)]">
      <div className="bg-[var(--primary)] gap-10 rounded-md px-5 py-5 flex">
        <div className="basis-2/5 flex flex-col items-center justify-center">
          <div className=" h-[300px] w-[300px]">
            <img src={img1} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="mt-5 flex gap-5">
            <div className="w-[80px] h-[80px]">
              <img src={img1} alt="" />
            </div>
            <div className="w-[80px] h-[80px]">
              <img src={img1} alt="" />
            </div>
            <div className="w-[80px] h-[80px]">
              <img src={img1} alt="" />
            </div>
            <div className="w-[80px] h-[80px]">
              <img src={img1} alt="" />
            </div>
            <div className="w-[80px] h-[80px]">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>

        <div className="basis-3/5">
          <h3 className="text-xl font-medium">Urben black five sleeves</h3>
          <p className="text-sm mt-2 text-gray-700">Ultra fit</p>

          <div className="mt-3 flex">
            <h1 className="text-2xl font-semibold">₹788</h1>
          </div>

          <p className="mt-5 font-medium text-sm">Sizes:</p>
          <div className="mt-1 flex gap-5">
            <div className="w-[40px] h-[30px] cursor-pointer rounded-lg flex items-center justify-center bg-[--secondary]">
              <p className="font-medium text-sm">M</p>
            </div>
            <div className="w-[40px] h-[30px] cursor-pointer rounded-lg flex items-center justify-center bg-[--secondary]">
              <p className="font-medium text-sm">L</p>
            </div>
            <div className="w-[40px] h-[30px] cursor-pointer rounded-lg flex items-center justify-center bg-[--secondary]">
              <p className="font-medium text-sm">XL</p>
            </div>
          </div>

          <p className="mt-5 text-sm font-medium">Colors:</p>
          <div className="flex gap-5 mt-1">
            <div className="w-[30px] h-[30px] bg-red-500 rounded-full cursor-pointer"></div>
            <div className="w-[30px] h-[30px] bg-blue-500 rounded-full cursor-pointer"></div>
            <div className="w-[30px] h-[30px] bg-yellow-500 rounded-full cursor-pointer"></div>
            <div className="w-[30px] h-[30px] bg-green-500 rounded-full cursor-pointer"></div>
            <div className="w-[30px] h-[30px] bg-black rounded-full cursor-pointer"></div>
          </div>

          <div className="flex gap-2 items-center mt-5">
            <p className='text-sm font-medium'>Quantity:</p>

            <div className="flex items-center gap-3">
              <div className="text-xl cursor-pointer">-</div>
              <p>1</p>
              <div className="text-xl cursor-pointer">+</div>
            </div>
          </div>

          <button className="mt-5 px-7 py-2 text-sm font-medium bg-[--third] text-white cursor-pointer rounded-md">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
