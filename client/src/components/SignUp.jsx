import React, { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import axios from "axios";
import apiRequest from "../lib/apiRequest";

const SignUp = () => {
  const [data, setData] = useState(null);
  const { setRedirect, setUser } = useAuthContext();

  const setDatas = (e) => {
    setData(() => {
      return { ...data, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    apiRequest.post('/auth/sign-up', data).then((res) => {
      setUser(res.data)
      setRedirect('')
    }).catch((err) => {
      console.log(err)
    });
  }

  return (
    <div className="w-full h-[100vh] flex items-center justify-center fixed top-0 left-0">
      <form className="px-10 py-5 bg-[--primary] border-[1px] shadow-sm rounded-md w-[430px]" onSubmit={handleSubmit}>
        <h2 className="text-center font-semibold text-xl">SignUp</h2>
        <div className="mt-2">
          <p className="text-xs text-gray-500 mb-1">Enter Email</p>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="px-5 py-2 text-sm rounded-md w-full border-[1px] outline-none "
            required
            onChange={(e) => setDatas(e)}
          />
        </div>
        <div className="mt-2">
          <p className="text-xs text-gray-500 mb-1">Phone Number</p>
          <input
            type="number"
            name="phone"
            placeholder="Phone number"
            className="px-5 py-2 text-sm rounded-md w-full border-[1px] outline-none "
            required
            onChange={(e) => setDatas(e)}
          />
        </div>
        <div className="mt-2">
          <p className="text-xs text-gray-500 mb-1">Enter Password</p>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="px-5 py-2 text-sm rounded-md w-full border-[1px] outline-none "
            required
            onChange={(e) => setDatas(e)}
          />
        </div>
        <div className="mt-2">
          <p className="text-end text-xs">
            Already have an account?{" "}
            <span className="font-medium underline cursor-pointer" onClick={() => setRedirect('sign-in')}>Signin</span>
          </p>
        </div>
        <div className="mt-4 flex justify-center">
          <button className="text-sm font-medium px-7 py-2 bg-[--third] text-white rounded-md">
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
