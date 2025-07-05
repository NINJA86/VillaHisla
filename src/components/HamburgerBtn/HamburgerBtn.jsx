import React from 'react';

function HamburgerBtn({ scrolled, openNav }) {
  return (
    <div
      onClick={openNav}
      className={`group flex items-center ${
        scrolled ? 'bg-[#f2f4f1]' : 'bg-white'
      } px-3 rounded-full hover:bg-black hover:text-white cursor-pointer transition-colors`}
    >
      <button className="flex flex-col items-center justify-between w-6 h-5 focus:outline-none  cursor-pointer">
        <span className="block w-5 h-0.5 bg-gray-800 group-hover:bg-white"></span>
        <span className="block w-5 h-0.5 bg-gray-800 group-hover:bg-white"></span>
        <span className="block w-5 h-0.5 bg-gray-800 group-hover:bg-white"></span>
      </button>
    </div>
  );
}

export default HamburgerBtn;
