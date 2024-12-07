import React from "react";

import img1 from "../assets/1.webp";

const Products = () => {
  return (
    <div className="min-h-[100vh] py-5 px-[100px] bg-[--secondary] w-full">
      <p className="font-medium">All Products</p>

      <div className="mt-3 flex justify-between bg-[--primary] px-5 py-5 min-h-[100vh] rounded-md">
        <div className="w-[200px] h-[250px] cursor-pointer">
          <div className="rounded-md">
            <img src={img1} alt="" className="w-full h-full rounded-xl" />
          </div>
          <h3 className="mt-2 font-medium text-sm">Acid Wash Tees</h3>
          <p className="mt-1 text-xs">3 Sizes, 1 Color</p>
          <h2 className="mt-2 text-lg font-semibold">₹788</h2>

          <button className="px-5 py-2 mt-2 text-sm font-medium text-[--third] border rounded-lg w-full">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
