import PlaceSecItems from '../PlaceSecItems/PlaceSecItems';
import IconButton from '../IconButton/IconButton';
import hotelData from '../../data';

function PlaceSec() {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h3 className="capitalize text-text-black text-3xl font-black">
          featured properties
        </h3>
        <IconButton text={'VIEW ALL'} />
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
