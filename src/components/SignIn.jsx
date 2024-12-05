import React from "react";

const SignIn = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center fixed top-0 left-0">
      <div className="px-10 py-5 bg-[--primary] border-[1px] shadow-sm rounded-md w-[430px]">
        <h2 className="text-center font-semibold text-xl">SignIn</h2>
        <div className="mt-2">
          <p className="text-xs text-gray-500 mb-1">Enter Email</p>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter email"
            className="px-5 py-2 text-sm rounded-md w-full border-[1px] outline-none "
          />
        </div>
        <div className="mt-2">
          <p className="text-xs text-gray-500 mb-1">Enter Password</p>
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            className="px-5 py-2 text-sm rounded-md w-full border-[1px] outline-none "
          />
        </div>
        <div className="mt-2">
            <p className="text-end text-xs">Don't have an account? Signup</p>
            <p className="mt-1 text-xs text-end text-blue-700">Forgot password?</p>
        </div>
        <div className="mt-4 flex justify-center">
            <button className="text-sm font-medium px-7 py-2 bg-[--third] text-white rounded-md">
                SignIn
            </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
