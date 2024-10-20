import React from 'react';
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <div className='py-8 flex flex-col md:flex-row items-center'>
      <div className='flex justify-center items-center w-full md:w-1/2'>
        <img 
          src='https://img.freepik.com/premium-photo/3d-shopping-cart-with-mobile-phone-megaphone-shopping-bags-online-shopping-ecommerce-digital_820340-40717.jpg' 
          className='w-3/4 md:w-full max-w-md' // Adjust image size for responsiveness
          alt='Signup Illustration'
        />
      </div>
      <div className='w-full md:w-1/2 px-6 md:px-10 lg:px-20 py-10 md:py-20'>
        <p className='text-3xl md:text-4xl font-semibold'>Create an account</p>
        <div className='mt-3 ml-1'>
          <p>Enter your details below</p>
        </div>
        <div className='ml-1 mt-4'>
          <input 
            type='text' 
            placeholder='Name' 
            className="border-b-2 border-gray-300 w-full py-2 focus:outline-none focus:border-blue-500" 
          />
          <input 
            type='text' 
            placeholder='Email or Phone Number' 
            className="mt-4 border-b-2 border-gray-300 w-full py-2 focus:outline-none focus:border-blue-500" 
          />
          <input 
            type='password' 
            placeholder='Password' 
            className="mt-4 border-b-2 border-gray-300 w-full py-2 focus:outline-none focus:border-blue-500" 
          />
          
          <button className='mt-5 bg-red-400 w-full py-2 rounded-md text-white'>
            Create Account
          </button>

          {/* Sign up with Google button */}
          <button className='flex items-center justify-center mt-5 border border-black w-full py-2 rounded-md text-black hover:bg-gray-100'>
            <FcGoogle className='text-xl mr-4' /> {/* Icon with margin */}
            <span>Sign up with Google</span>
          </button>
        </div>

        <div className='ml-1 mt-4 flex justify-center items-center'>
          <p className='underline px-2'>Already have an account?</p>
          <button className='underline ml-2'>Log in</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
