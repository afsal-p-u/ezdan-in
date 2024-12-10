import React, { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import apiRequest from "../lib/apiRequest";
import { IoMdClose } from "react-icons/io";

const SignIn = () => {
  const [data, setData] = useState(null);
  const { setRedirect, setUser } = useAuthContext();

  const setDatas = (e) => {
    setData(() => {
      return { ...data, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    apiRequest.post('/auth/sign-in', data).then((res) => {
      setUser(res.data)
      setRedirect('')
    }).catch((err) => {
      console.log(err)
    });
  }

  return (
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <form className="px-10 py-5 bg-[--primary] border-[1px] shadow-sm rounded-md w-[430px]" onSubmit={handleSubmit}>
        <div className="flex justify-between items-center">
          <p></p>
          <h2 className="text-center font-semibold text-xl">SignIn</h2>
          <IoMdClose className="cursor-pointer" onClick={() => setRedirect('')} />
        </div>
          
        <div className="mt-2">
          <p className="text-xs text-gray-500 mb-1">Enter Email</p>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter email"
            className="px-5 py-2 text-sm rounded-md w-full border-[1px] outline-none "
            onChange={(e) => setDatas(e)}
            autoComplete="off"
          />
        </div>
        <div className="mt-2">
          <p className="text-xs text-gray-500 mb-1">Enter Password</p>
          <input
            type="password"
            name="password"
            id=""
            placeholder="Password"
            className="px-5 py-2 text-sm rounded-md w-full border-[1px] outline-none "
            onChange={(e) => setDatas(e)}
            autoComplete="off"
          />
        </div>
        <div className="mt-2">
          <p className="text-end text-xs">
            Don't have an account?{" "}
            <span
              className="font-medium underline cursor-pointer"
              onClick={() => setRedirect("sign-up")}
            >
              Signup
            </span>
          </p>
          <p className="mt-1 text-xs text-end text-blue-700">
            Forgot password?
          </p>
        </div>
        <div className="mt-4 flex justify-center">
          <button className="text-sm font-medium px-7 py-2 bg-[--third] text-white rounded-md">
            SignIn
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
