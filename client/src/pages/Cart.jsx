import React from 'react'

import img1 from "../assets/1.webp";
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className='min-h-[100vh] py-5 px-[100px] bg-[--secondary] w-full'>
      <div className="bg-[--primary] w-full flex rounded-md">
        <div className="basis-2/4 gap-5">
          <div className="flex gap-3 px-5 py-3 rounded-md">
            <div className="w-[110px] h-[110px]">
              <img src={img1} alt="" className='w-full h-full object-cover' />
            </div>
            
            <div className="">
              <p className='font-medium'>Urben black five sleeves</p>
              <h3 className='mt-1 font-semibold'>₹788</h3>

              <div className="mt-1 flex gap-2 items-center">
                <p className='text-xs font-medium'>Quantity:</p>

                <div className="flex items-center gap-3">
                  <div className="text-xl cursor-pointer">-</div>
                  <p>1</p>
                  <div className="text-xl cursor-pointer">+</div>
                </div>
              </div>

              <button className='text-red-500 font-medium text-xs'>Remove</button>
            </div>
          </div>
          <div className="flex gap-3 px-5 py-3 rounded-md">
            <div className="w-[110px] h-[110px]">
              <img src={img1} alt="" className='w-full h-full object-cover' />
            </div>
            
            <div className="">
              <p className='font-medium'>Urben black five sleeves</p>
              <h3 className='mt-1 font-semibold'>₹788</h3>

              <div className="mt-1 flex gap-2 items-center">
                <p className='text-xs font-medium'>Quantity:</p>

                <div className="flex items-center gap-3">
                  <div className="text-xl cursor-pointer">-</div>
                  <p>1</p>
                  <div className="text-xl cursor-pointer">+</div>
                </div>
              </div>

              <button className='text-red-500 font-medium text-xs'>Remove</button>
            </div>
          </div>
        </div>

        <div className="basis-2/4 px-5 py-3 flex flex-col gap-1">
          <div className="flex gap-5 items-center justify-start">
            <p className='text-sm font-medium'>Shipping Charge:</p>
            <p className='text-sm font-medium'>40</p>
          </div>
          <div className="flex gap-5 items-center">
            <p className='text-sm font-medium'>Cart Value:</p>
            <p className='text-sm font-medium'>440</p>
          </div>
          <div className="flex gap-5 items-center">
            <p className='text-sm font-medium'>Discount:</p>
            <p className='text-sm font-medium'>40</p>
          </div>
          <div className="flex gap-5 mt-3 items-center">
            <p className='text-lg font-medium'>Total:</p>
            <p className='text-lg font-medium'>520</p>
          </div>

          <div className=""> 
            <Link to="/checkout">
              <button className='px-5 py-2 rounded-md  mt-2 text-white border-md bg-blue-500 font-medium'>
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
