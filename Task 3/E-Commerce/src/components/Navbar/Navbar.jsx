import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='py-5 px-4 md:px-20'>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <h1 className='font-extrabold text-3xl md:text-4xl'>Exclusive</h1>
        <div className='flex flex-wrap space-x-6 mt-4 md:mt-0'>
          <p className='cursor-pointer hover:text-blue-500 text-lg md:text-base'>Home</p>
          <p className='cursor-pointer hover:text-blue-500 text-lg md:text-base'>Contact</p>
          <p className='cursor-pointer hover:text-blue-500 text-lg md:text-base'>About</p>
          <p className='cursor-pointer hover:text-blue-500 text-lg md:text-base'>Signup</p>
        </div>
        <div className='flex items-center space-x-8 mt-4 md:mt-0'>
          <div className='relative'>
            <input
              type='text'
              placeholder='What are you looking for?'
              className='border border-gray-300 pl-5 pr-4 rounded-md py-2 w-64 md:w-80 lg:w-96 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <button>
              <IoIosSearch className='absolute right-3 top-3 text-gray-500 text-xl' />
            </button>
          </div>
          <CiHeart className='text-2xl cursor-pointer hover:text-blue-500' />
          <FiShoppingCart className='text-2xl cursor-pointer hover:text-blue-500' />
          <FaRegUser className='text-2xl cursor-pointer hover:text-blue-500' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
