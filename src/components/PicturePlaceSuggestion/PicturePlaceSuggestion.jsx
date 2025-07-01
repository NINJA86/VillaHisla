import React from 'react';

function PicturePlaceSuggestion({ url = 'img/hotel/home-best-interiors.jpg' }) {
  return (
    <img
      className="bg-cover h-[48.5rem] w-[37.2rem]"
      src={url}
      alt="best interiors home"
    />
  );
}

export default PicturePlaceSuggestion;
