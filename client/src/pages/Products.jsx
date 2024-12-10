import React from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../components";

const Products = ({ data }) => {
  return (
    <div className="min-h-[100vh] py-5 px-[100px] bg-[--secondary] w-full">
      <p className="font-medium">All Products</p>

      <div className="mt-3 bg-[--primary] px-5 py-5 rounded-md shadow-sm grid grid-cols-5 gap-5">
        {data?.map((item, i) => (
          <ProductCard item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Products;
