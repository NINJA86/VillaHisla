import React from 'react';
import { twMerge } from 'tailwind-merge';

function EmailInp({ classes }) {
  return (
    <input
      className={twMerge('bg-white py-3.5 text-text-green w-full', classes)}
      placeholder="Your email*"
      type="email"
      name="email"
      id="email"
    />
  );
}

export default EmailInp;
