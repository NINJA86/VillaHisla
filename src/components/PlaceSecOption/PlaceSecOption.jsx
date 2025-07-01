import React from 'react';

function PlaceSecOption({ icon, count, subject }) {
  return (
    <div className="">
      <div className="flex items-center">
        <div className="">{icon}</div>
        <span className="font-black text-xl">{count}</span>
      </div>
      <span className="text-[12px] font-semibold">{subject}</span>
    </div>
  );
}

export default PlaceSecOption;
