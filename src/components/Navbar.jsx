import React from "react";
import { Link } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import { AiOutlineHome } from "react-icons/ai";
import { IoShirtOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 shadow-sm">
      <div className="px-[100px] py-5 bg-[var(--primary)] flex justify-between">
        <Link to="/">
            <h3 className="font-semibold text-xl">SQ<span className="text-[--third]">DX7</span></h3>
        </Link>

        <div className="flex gap-7 items-center">
          {/* <div className="flex items-center gap-2 border-[1px] px-3 py-1 rounded-full border-md mr-10">
            <GoSearch />
            <input
              type="search"
              name=""
              id=""
              placeholder="Search in sqdx7.in"
              className="bg-transparent text-sm border-none outline-none"
            />
          </div> */}

          <Link to="/" className="font-medium flex gap-2 items-center">
            <AiOutlineHome className="text-lg text-[--third]" />
            <p className="text-sm text-[--third]">Home</p>
          </Link>
          <Link to="/products" className="font-medium flex gap-2 items-center">
            <IoShirtOutline className="text-lg" />
            <p className="text-sm">Products</p>
          </Link>
          <Link to="/cart">
            <RiShoppingCartLine className="text-xl" />
          </Link>

            <div className="ml-10">
                <button className="text-sm font-medium flex items-center gap-2">
                    <LuUser2 className="text-xl" />
                    <p>Login</p>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
