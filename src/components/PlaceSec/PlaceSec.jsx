import { useContext } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import PricePlaceSec from '../PricePlaceSec/PricePlaceSec';
import { HotelData } from '../../context/ContextHotel';
import PlaceSecOption from '../PlaceSecOption/PlaceSecOption';
import PlaceSecItems from '../PlaceSecItems/PlaceSecItems';
import useHotelData from '../../hooks/useHotelData';

function PlaceSec() {
  const [hotelData, setHotelData] = useHotelData();
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h3 className="capitalize text-text-black text-3xl font-black">
          featured properties
        </h3>
        <a className="flex gap-2 items-center uppercase hover:text-light-green cursor-pointer text-text-black font-bold">
          view all <FaArrowRight />
        </a>
      </div>
      <div className="flex items-center gap-6">
        {hotelData.slice(2, 5).map((place) => (
          <PlaceSecItems key={place.id} {...place} />
        ))}
      </div>
    </>
  );
}

export default PlaceSec;
