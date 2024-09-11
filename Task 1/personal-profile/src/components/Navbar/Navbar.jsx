import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-custom-light-beige flex items-center justify-between px-8 py-4 flex-wrap'>
      {/* Brand Name */}
      <div className='font-mono font-extrabold text-3xl'>
        Luqman Jafir
      </div>

      {/* Links and Button */}
      <div className='flex items-center space-x-6 font-mono text-xl'>
        {/* Mobile Menu Icon */}
        <div className='lg:hidden'>
          <button className='text-3xl'>
            ☰
          </button>
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:flex items-center space-x-6'>
          <p className='hover:text-gray-400 cursor-pointer'>About</p>
          <p className='hover:text-gray-400 cursor-pointer'>Hobbies</p>
          <button className='bg-butoon-bg text-white px-4 py-2 rounded-full'>
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
