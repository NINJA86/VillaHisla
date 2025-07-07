import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { twMerge } from 'tailwind-merge';

function IconButton({ text, classes }) {
  return (
    <a
      className={twMerge(
        'flex gap-2 items-center uppercase hover:text-light-green cursor-pointer text-text-black font-bold',
        classes
      )}
    >
      {text} <FaArrowRight />
    </a>
  );
}

export default IconButton;
