import { useContext } from 'react';
import { HotelData } from '../context/ContextHotel';
function useHotelData() {
  const context = useContext(HotelData);
  if (context === undefined) {
    throw Error('useHotelData must be define within a HotelProvider');
  }

  return [context.hotelData, context.setHotelData];
}
export default useHotelData;
