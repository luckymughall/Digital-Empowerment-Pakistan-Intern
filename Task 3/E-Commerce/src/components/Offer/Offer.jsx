import React from 'react';

const Offer = () => {
  return (
    <div className='bg-black py-3 max-w-full'>
      <div className='text-white flex flex-col md:flex-row items-center justify-center text-center px-4'>
        <p className='text-sm md:text-lg lg:text-xl mr-0 md:mr-2 mb-2 md:mb-0'>
          Summer Sale For All Products and Free Express Delivery - OFF 50%!
        </p>
        <button className='px-4 py-2 bg-white text-black rounded underline text-sm md:text-base hover:bg-gray-200'>
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Offer;
