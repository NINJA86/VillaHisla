import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { twMerge } from 'tailwind-merge';

function CommentSecAdv({
  bg = 'img/bgs/testimonials-section-img-1.jpg', // حتماً از / شروع کن چون تو public هست
  title = '',
  txt = '',
  classes = '', // امکان اضافه کردن کلاس از بیرون
}) {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className={twMerge(
        `w-[37.5rem] h-[24rem] bg-cover flex flex-col justify-center p-12 font-bold relative`,
        classes
      )}
    >
      <a href="#" className="mt-37 text-3xl">
        {title}
      </a>
      <p className="mt-8 text-sm">{txt}</p>
      <button className="flex justify-center items-center bg-dark-green w-16 h-16 absolute bottom-0 right-0 cursor-pointer hover:bg-light-green transition-colors">
        <BiRightArrowAlt />
      </button>
    </div>
  );
}

export default CommentSecAdv;
