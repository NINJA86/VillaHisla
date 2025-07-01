import React from 'react';
import Button from '../Button/Button';
import PicturePlaceSuggestion from '../PicturePlaceSuggestion/PicturePlaceSuggestion';
import TitlePlaceSuggestion from '../TitlePlaceSuggestion/TitlePlaceSuggestion';
import AttributePlaceSuggestion from '../AttributePlaceSuggestion/AttributePlaceSuggestion';
import OptionsPlaceSuggestion from '../OptionsPlaceSuggestion/OptionsPlaceSuggestion';

function PlaceSuggestion() {
  return (
    <>
      <PicturePlaceSuggestion url="img/hotel/home-best-interiors.jpg" />
      <div className="basis-[36rem]">
        <AttributePlaceSuggestion children="Best Interiors" />
        <TitlePlaceSuggestion children="find your own price of paradise" />
        <p className="max-w-[29rem] text-lg text-text-green border-b pb-10 border-gray-200">
          Scelerisque dignissim in leo at magna donec mi metus ipsum luctus nam
          elit sociis luctus et aliquam libero.
        </p>
        <ul className="mt-20 mb-[50px] flex flex-col gap-10">
          <OptionsPlaceSuggestion children="Praesent sapien massa, convallis a pellentesque nec, egestas non nisi sed porttitor lectus nibh." />
          <OptionsPlaceSuggestion children="Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          <OptionsPlaceSuggestion children="Scelerisque dignissim in leo at magna donec mi metus ipsum luctus nam elit sociis luctus et aliquam libero." />
        </ul>
        <Button children="Explore Now" />
      </div>
    </>
  );
}

export default PlaceSuggestion;
