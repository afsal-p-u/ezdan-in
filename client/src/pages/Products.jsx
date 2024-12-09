import React from "react";
import { Link } from "react-router-dom";

const Products = ({ data }) => {

  return (
    <div className="min-h-[100vh] py-5 px-[100px] bg-[--secondary] w-full">
      <p className="font-medium">All Products</p>

      <div className="mt-3 bg-[--primary] px-5 py-5 rounded-md shadow-sm grid grid-cols-5 gap-5">
        {data?.map((item, i) => (
          <div className="w-[200px] cursor-pointer" key={i}>
            <Link to={`/product/${item._id}`}>
              <div className="rounded-md w-full h-[200px]">
                <img src={item?.image[0]} alt="" className="w-full h-full rounded-xl" />
              </div>
              <div className="">
                <h3 className="mt-2 font-medium text-sm">{item?.name}</h3>
                <p className="mt-1 text-xs">
                  {item?.sizes.length} Sizes, {item?.colors.length} Color
                </p>
                <h2 className="mt-2 text-lg font-semibold">₹{item?.price}</h2>
              </div>
            </Link>

            <button
              className="px-5 py-2 mt-2 text-xs font-medium text-[--third] border rounded-lg w-full
              hover:bg-[--third] hover:text-white"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
