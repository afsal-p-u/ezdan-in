import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import apiRequest from "../lib/apiRequest";

const Product = () => {
  const [data, setData] = useState();
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, _setQuantity] = useState(1);

  
  const setQuantity = (value) => {
    if (value == "add") {
      if (quantity < 5) {
        _setQuantity(quantity + 1);
      }
    }
    if (value == "remove") {
      if (quantity != 1) {
        _setQuantity(quantity - 1);
      }
    }
  };

  const location = useLocation();

  const getProduct = () => {
    apiRequest
      .get(`/product/${location?.pathname?.split("/")[2]}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="px-[100px] min-h-[100vh] py-5 bg-[var(--secondary)]">
      <div className="bg-[var(--primary)] gap-10 rounded-md px-5 py-5 flex">
        <div className="basis-2/5 flex flex-col items-center justify-center">
          <div className=" h-[300px] w-[300px]">
            <img
              src={data?.image[0]}
              alt=""
              className="w-full h-full object-contain cursor-pointer"
            />
          </div>
          <div className="mt-5 flex gap-5 justify-center">
            {data?.image.map((item, i) => (
              <div className="w-[80px] h-[80px] cursor-pointer" key={i}>
                <img src={item} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="basis-3/5">
          <h3 className="text-xl font-medium">{data?.name}</h3>
          <p className="text-sm mt-2 text-gray-700">{data?.description}</p>

          <div className="mt-3 flex">
            <h1 className="text-2xl font-semibold">₹{data?.price}</h1>
          </div>

          <p className="mt-5 font-medium text-sm">Sizes:</p>
          <div className="mt-1 flex gap-5">
            {data?.sizes.map((item, i) => (
              <div
                className={`w-[40px] h-[30px] cursor-pointer rounded-lg flex items-center justify-center bg-[--secondary]
                  ${selectedSize == item && "border-[1px] border-black"}`}
                key={i}
                onClick={() => setSelectedSize(item)}
              >
                <p className="font-medium text-sm">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm font-medium">Colors:</p>
          <div className="flex gap-5 mt-1">
            {data?.colors.map((item, i) => (
              <div
                key={i}
                className={`w-[30px] h-[30px] rounded-full cursor-pointer
                  ${selectedColor == item && "border-[2px] border-gray-700"}`}
                style={{ background: item?.toLowerCase() }}
                onClick={() => setSelectedColor(item)}
              ></div>
            ))}
          </div>

          <div className="flex gap-2 items-center mt-5">
            <p className="text-sm font-medium">Quantity:</p>

            <div className="flex items-center gap-3">
              <div
                className="text-xl cursor-pointer"
                onClick={() => setQuantity("remove")}
              >
                -
              </div>
              <p>{quantity}</p>
              <div
                className="text-xl cursor-pointer"
                onClick={() => setQuantity("add")}
              >
                +
              </div>
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