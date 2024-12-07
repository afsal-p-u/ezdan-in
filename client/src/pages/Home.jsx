import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import img1 from "../assets/1.webp";
import { SignIn, SignUp } from "../components";
import apiRequest from "../lib/apiRequest";

const Home = () => {
  const [data, setData] = useState(null)

  const getAllProducts = () => {
    apiRequest.get('/product').then((res) => {
      setData(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <>
      <div>
        <div className="px-[100px] py-5 bg-[--secondary]">
          {/* banner */}
          <div className="min-h-[50vh] bg-[--primary] rounded-md"></div>

          <div className="mt-5 bg-[--primary] px-5 py-5 rounded-md min-h-[100vh]">
            <div className="flex justify-between">
              <h3 className="text-md font-medium">New Arrival</h3>
              <p className="text-sm">See all</p>
            </div>
            <div className="mt-3 flex justify-between">
              {data?.map((item, i) => (
                <Link to={`/product/${item._id}`} key={i}>
                  <div className="w-[200px] h-[250px] cursor-pointer">
                    <div className="rounded-md">
                      <img src={img1} alt="" className="w-full h-full rounded-xl" />
                    </div>
                    <h3 className="mt-2 font-medium text-sm">{item?.name}</h3>
                    <p className="mt-1 text-xs">{item?.sizes.length} Sizes, {item?.colors.length} Color</p>
                    <h2 className="mt-2 text-lg font-semibold">₹{item?.price}</h2>

                    <button className="px-5 py-2 mt-2 text-sm font-medium text-[--third] border rounded-lg w-full">
                      Add to Cart
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <SignUp /> */}
    </>
  );
};

export default Home;
