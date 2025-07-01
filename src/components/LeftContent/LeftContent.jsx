import React from 'react';
import SearchInput from '../SearchInput/SearchInput';

function LeftContent() {
  return (
    <div className="items-baseline justify-center flex flex-col h-screen">
      <h1 className="capitalize text-[80px] max-w-xl mb-12 ">
        find your dream house
      </h1>
      <SearchInput />
      <p className="mt-9 max-w-[34rem] font-light">
        Dicta illum fugiat quaerat enim ratione quibusdam eius voluptates amet
        fugiat consectetur rerum magnam veritatis.
      </p>
    </div>
  );
}

export default LeftContent;
