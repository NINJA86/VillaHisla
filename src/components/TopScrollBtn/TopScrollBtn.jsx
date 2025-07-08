import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function TopScrollBtn() {
  const [hasScroll, setHasScroll] = useState(false);
  useEffect(() => {
    const toggleBtn = () => {
      if (window.scrollY > 40) {
        setHasScroll(true);
      } else {
        setHasScroll(false);
      }
    };
    window.addEventListener('scroll', toggleBtn);
    return () => window.removeEventListener('scroll', toggleBtn);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <button
        onClick={handleScrollTop}
        className={`bg-light-green text-white p-3 rounded-full fixed right-6 bottom-6 shadow-lg hover:bg-dark-green transition-all duration-500 ease-in-out transform ${
          hasScroll
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
      >
        <FaArrowUp />
      </button>
    </>
  );
}

export default TopScrollBtn;
