import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import { AiOutlineHome } from "react-icons/ai";
import { IoShirtOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { useAuthContext } from "../contexts/AuthContext";
import { useCartContext } from "../contexts/CartContext";
import apiRequest from "../lib/apiRequest";

const Navbar = () => {
  const { setRedirect } = useAuthContext();
  const { user, setUser } = useAuthContext();
  const { cart } = useCartContext();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    apiRequest.post('/auth/sign-out', {}).then((res) => {
      setUser(null)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="sticky top-0 left-0 shadow-sm bg-[--primary] z-[100]">
      <div className="px-[100px] py-5 bg-[var(--primary)] flex justify-between">
        <Link to="/">
          <h3 className="font-semibold text-xl">
            EZD<span className="text-[--third]">AN</span>
          </h3>
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
            <AiOutlineHome
              className={`text-lg
              ${location?.pathname == "/" ? "text-[--third]" : ""}`}
            />
            <p
              className={`text-sm
              ${location?.pathname == "/" ? "text-[--third]" : ""}`}
            >
              Home
            </p>
          </Link>
          <Link to="/products" className="font-medium flex gap-2 items-center">
            <IoShirtOutline
              className={`text-lg
              ${
                location?.pathname == "/products"
                  ? "text-[--third]"
                  : location.pathname.includes("/product/")
                  ? "text-[--third]"
                  : ""
              }`}
            />
            <p
              className={`text-sm
              ${
                location?.pathname == "/products"
                  ? "text-[--third]"
                  : location.pathname.includes("/product/")
                  ? "text-[--third]"
                  : ""
              }`}
            >
              Products
            </p>
          </Link>
          <Link to="/cart" className="relative">
            <RiShoppingCartLine
              className={`text-xl
              ${
                location?.pathname == "/cart"
                  ? "text-[--third]"
                  : location?.pathname.includes("/checkout")
                  ? "text-[--third]"
                  : ""
              }`}
            />
            {cart?.data?.length > 0 && (
              <div
                className={`absolute bg-[--third] text-white rounded-full px-1 py-1 text-xs w-[17px] h-[17px]
                flex items-center justify-center font-medium top-[-7px] right-[-7px]`}
              >
                {cart?.data?.length}
              </div>
            )}
          </Link>

          {!user ? (
            <div className="ml-5">
              <button
                className="text-sm font-medium flex items-center gap-2"
                onClick={() => setRedirect("sign-in")}
              >
                <LuUser2 className="text-xl" />
                <p>Login</p>
              </button>
            </div>
          ) : (
            <div className="relative">
              <div
                className="ml-5 w-[30px] h-[30px] bg-[--third] rounded-full cursor-pointer"
                onClick={() => setShowMenu((value) => !value)}
              ></div>

              {showMenu && (
                <div className="absolute top-[35px] left-[-40px] px-7 py-3 border-[1px] shadow-sm border-gray-100 bg-[--primary]">
                  <div className="flex gap-2 flex-col">
                    <button className="text-xs cursor-pointer">Orders</button>
                    <button className="text-xs cursor-pointer text-red-500" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
