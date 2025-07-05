import React from 'react';
import TitlePlaceSuggestion from '../TitlePlaceSuggestion/TitlePlaceSuggestion';
import Button from '../Button/Button';
import PicturePlaceSuggestion from '../PicturePlaceSuggestion/PicturePlaceSuggestion';

function SecondPlaceSuggestion() {
  return (
    <div className="flex items-center justify-between text-text-green">
      <div className="">
        <div className="flex items-center gap-6">
          <span className="attribute">Exercitationem</span>
          <span className="text-sm">Scelerisque dignissim in leo at magna</span>
        </div>
        <TitlePlaceSuggestion children="find your own price of paradise" />
        <p className="max-w-[30rem] text-lg mb-12">
          Dicta illum fugiat quaerat enim ratione quibusdam eius. Voluptates
          amet fugiat consectetur rerum magnam veritatis. Accusantium ut hic
          quidem voluptas. Ut itaque dolores amet et velit maiores odit ea non
          odio rerum voluptas velit.
        </p>
        <Button children="Explore Now" />
      </div>
      <div className="">
        <PicturePlaceSuggestion url="img/hotel/placeSuggestionPicture.jpg" />
      </div>
    </div>
  );
}

export default SecondPlaceSuggestion;
