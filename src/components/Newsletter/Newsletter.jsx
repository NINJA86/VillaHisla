import React from 'react';
import Button from '../Button/Button';
import EmailInp from '../EmailInp/EmailInp';

function Newsletter() {
  return (
    <div className="bg-dark-green p-16 text-white">
      <div className="flex items-center justify-between">
        <h4 className="text-lg">Phasellus risus turpis pretium</h4>
        <svg
          className="hover:fill-blue-700 fill-gray-300 hover:opacity-100 opacity-10 cursor-grab"
          style={{
            width: '5rem',
            height: '5rem',
            margin: 10,
          }}
          xmlSpace="preserve"
          viewBox="0 0 40 40"
        >
          <path d="M20.3 0c.6.3 1 .9.9 1.5v14.8c.7.1 1.3.2 2 .3 6.8 1.3 12.2 6.5 13.7 13.3.2 1.2.3 2.4.4 3.6.1.6-.4 1.2-1 1.3H27c-.3 0-.5.1-.6.4-.9 3.5-4.4 5.6-7.8 4.7-2.3-.6-4.1-2.4-4.7-4.8 0-.1-.1-.2-.1-.3H4.1c-1 0-1.4-.4-1.4-1.4C2.8 25.8 7.8 19.2 15 17c.6-.2 1.2-.3 1.9-.4.6-.1 1.3-.2 1.9-.3V1.6c-.1-.6.3-1.3.9-1.5h.6zM5.2 32.3h29.7c-.7-8.2-7.8-14.3-16-13.6-7.4.6-13.1 6.3-13.7 13.6M24 34.7h-7.7c.2 1.5 2.1 3 3.9 2.9 1.8 0 3.7-1.4 3.8-2.9" />
        </svg>
      </div>
      <h2 className="text-5xl font-black leading-16 max-w-[59rem] mb-12">
        We will find a reliable lessee and take care of the entire rental
        process
      </h2>
      <div className="flex items-center gap-3">
        <EmailInp classes={'w-[36rem]'} />
        <Button children="Subscribe" />
      </div>
    </div>
  );
}

export default Newsletter;
