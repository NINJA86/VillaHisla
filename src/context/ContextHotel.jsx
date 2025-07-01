import React, { createContext } from 'react';

export const HotelData = createContext();

function HotelProvider({ value, children }) {
  return <HotelData.Provider value={value}>{children}</HotelData.Provider>;
}
export default HotelProvider;
