import React from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../components";

const Home = ({ data }) => {

  return (
    <>
      <div>
        <div className="px-[100px] py-5 bg-[--secondary]">
          {/* banner */}
          {/* <div className="min-h-[50vh] bg-[--primary] rounded-md"></div> */}

          <div className="mt-5 bg-[--primary] px-5 py-5 rounded-md shadow-sm">
            <div className="">
              <div className="flex items-center justify-between">
                <h3 className="text-md font-medium">New Arrival</h3>
                <Link to="/products">
                  <p className="text-xs cursor-pointer underline">See all</p>
                </Link>
              </div>
              <div className="mt-3 grid grid-cols-5 gap-5">
                {data?.map((item, i) => (
                  <ProductCard item={item} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <SignUp /> */}
    </>
  );
};

export default Home;
