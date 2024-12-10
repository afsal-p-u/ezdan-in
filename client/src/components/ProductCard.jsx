import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";

const ProductCard = ({ item }) => {
  const { setCart } = useCartContext();

  const handleCart = () => {
    const { colors, sizes, ...rest } = item;

    setCart({
      ...rest,
      quantity: 1,
      color: item?.colors[0],
      size: item?.sizes[0],
      id: item?.sizes[0] + item?.colors[0] + item._id,
    });
  };

  return (
    <div className="w-[200px] cursor-pointer relative">
      <Link to={`/product/${item._id}`} state={{ item }}>
        <div className="rounded-md w-full h-[200px]">
          <img
            src={item?.image[0]}
            alt=""
            className="w-full h-full rounded-xl"
          />
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
        onClick={handleCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
