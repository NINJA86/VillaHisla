import React from 'react';

function HamburgerBtn({ openNav }) {
  return (
    <div
      onClick={openNav}
      className="flex items-center bg-white px-3 rounded-full"
    >
      <button className="flex flex-col items-center justify-between w-6 h-5 focus:outline-none">
        <span className="block w-5 h-0.5 bg-gray-800"></span>
        <span className="block w-5 h-0.5 bg-gray-800"></span>
        <span className="block w-5 h-0.5 bg-gray-800"></span>
      </button>
    </div>
  );
}

export default HamburgerBtn;
