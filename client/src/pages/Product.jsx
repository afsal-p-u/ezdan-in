import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import apiRequest from "../lib/apiRequest";
import { useCartContext } from "../contexts/CartContext";

const Product = () => {
  const location = useLocation();
  const [data, setData] = useState(location?.state?.item);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, _setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  console.log(location?.state?.item)

  const { cart, setCart, removeCartItem } = useCartContext();

  const setQuantity = (value) => {
    if (value == "add") {
      if (quantity < 5) {
        _setQuantity(quantity + 1);
      } else {
        setQuantity(5);
      }
    }
    if (value == "remove") {
      if (quantity != 1) {
        _setQuantity(quantity - 1);
      } else {
        setQuantity(1);
      }
    }
  };

  const handleCart = () => {
    const { colors, sizes, ...rest } = data;

    if (selectedColor != null && selectedSize != null) {
      setCart({
        ...rest,
        quantity: quantity,
        color: selectedColor,
        size: selectedSize,
        id: selectedSize + selectedSize + data._id,
      });
    }
  };

  return (
    <div className="px-[100px] py-5 bg-[var(--secondary)]">
      <div
        className={`bg-[var(--primary)] gap-10 rounded-md px-5 py-5 flex mb-10 shadow-sm`}
      >
        <div className="basis-2/5 flex flex-col items-center justify-center">
          <div className=" h-[300px] w-[300px]">
            {loading ? (
              <div className="w-full h-full"></div>
            ) : (
              <>
                <img
                  src={data?.image[0]}
                  alt=""
                  className="w-full h-full object-contain cursor-pointer"
                />
              </>
            )}
          </div>
          <div className="mt-5 flex gap-5 justify-center">
            {loading ? (
              <>
                <div className="w-[80px] h-[80px] cursor-pointer">
                  
                </div>
              </>
            ) : (
              <>
                {data?.image.map((item, i) => (
                  <div className="w-[80px] h-[80px] cursor-pointer" key={i}>
                    <img src={item} alt="" />
                  </div>
                ))}
              </>  
            )}
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
                              ${
                                selectedSize == item &&
                                "border-[1px] border-gray-400"
                              }`}
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
                              ${
                                selectedColor == item &&
                                "border-[2px] border-gray-700"
                              }`}
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

          <button
            className="mt-5 px-7 py-2 text-sm font-medium bg-[--third] text-white cursor-pointer rounded-md
                        hover:border-[1px] hover:border-[--third] hover:bg-transparent hover:text-[--third]"
            onClick={() => handleCart()}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
