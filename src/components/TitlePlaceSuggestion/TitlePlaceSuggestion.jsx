import React from 'react';

function TitlePlaceSuggestion({
  children = 'find your own price of paradise',
}) {
  return (
    <h3 className="text-6xl text-[#011412] font-bold max-w-[32rem] mt-5 mb-[30px] leading-23 capitalize">
      {children}
    </h3>
  );
}

export default TitlePlaceSuggestion;
