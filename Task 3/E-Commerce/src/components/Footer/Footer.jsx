import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 px-8 md:px-20 lg:px-40 space-y-8 md:space-y-0">
        {/* Subscribe Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Exclusive</h3>
          <p>Get 10% off your first order</p>
          <div className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-t sm:rounded-l sm:rounded-t-none bg-gray-800 text-white w-full sm:w-auto"
            />
            <button className="bg-gray-600 px-4 py-2 rounded-b sm:rounded-r sm:rounded-b-none w-full sm:w-auto mt-2 sm:mt-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold">Support</h3>
          <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold">Account</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">My Account</a></li>
            <li><a href="#" className="hover:underline">Login / Register</a></li>
            <li><a href="#" className="hover:underline">Cart</a></li>
            <li><a href="#" className="hover:underline">Wishlist</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold">Quick Link</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms Of Use</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Download App Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Download App</h3>
          <p>Save $3 with App New User Only</p>
          <div className="flex space-x-4">
            <img src="google-play-badge.png" alt="Google Play" className="h-10 w-auto" />
            <img src="app-store-badge.png" alt="App Store" className="h-10 w-auto" />
          </div>
          <div className="flex space-x-4 justify-center lg:justify-start">
            <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8 text-gray-500">
        &copy; Copyright Exclusive 2022. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
