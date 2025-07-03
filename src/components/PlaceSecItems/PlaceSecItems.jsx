import React from "react";
import PricePlaceSec from "../PricePlaceSec/PricePlaceSec";
import PlaceSecOption from "../PlaceSecOption/PlaceSecOption";
import { formatNumber } from "../../func";

function PlaceSecItems(items) {
  const icons = {
    bed: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "1.5rem",
          height: "1.5rem",
          margin: 10,
        }}
        xmlSpace="preserve"
        viewBox="0 0 24 24"
      >
        <path d="M0 19.2v-5.9c.1-.6.6-1.1 1.2-1.2v-.5c0-.7.3-1.4.9-1.8.1-.1.2-.2.2-.4V4.7c0-1.3 1-2.4 2.3-2.5H19.4c.2 0 .5 0 .7.1 1.1.3 1.8 1.3 1.8 2.4v4.6c0 .2.1.3.2.4.5.4.8.9.9 1.5 0 .3 0 .6.1.9.7.2 1.1.8 1.1 1.5V19c0 .7-.5 1.3-1.2 1.5-.1 0-.2 0-.3.1v.6c0 .4-.3.7-.7.7h-.1c-.4 0-.7-.3-.7-.7v-.6H2.9v.6c0 .4-.3.7-.7.7-.4 0-.7-.3-.7-.7v-.6c-.5 0-.9-.3-1.2-.7-.1-.3-.2-.5-.3-.7m12-5.8H1.8c-.3 0-.4 0-.4.4v5c0 .3 0 .3.3.3h20.5c.3 0 .3 0 .3-.3v-5c0-.4 0-.4-.4-.4H12m8.3-4.2V4.7c.1-.5-.3-1-.9-1.1H4.8c-.5-.1-1 .3-1.1.9v4.8h.9V8.1c0-.9.7-1.6 1.5-1.6H9.9c.4 0 .8.1 1.1.4.3.3.5.7.5 1.2v1.2h1V8.1c0-.9.7-1.6 1.5-1.6h3.8c.8 0 1.5.6 1.5 1.4v1.4l1-.1zm1.2 2.8c0-.3-.1-.5-.1-.8-.2-.4-.6-.6-1.1-.6H3.5c-.4 0-.8.3-.9.7 0 .2-.1.5-.1.7h19zm-5.6-4.2h-1.8c-.2 0-.3.1-.3.3V9c0 .2.1.3.3.3h3.6c.2 0 .3-.1.3-.3v-.8c0-.2-.1-.3-.3-.3-.6-.1-1.2-.1-1.8-.1M8 9.2h1.8c.2 0 .3-.1.3-.3V8c0-.2-.1-.3-.3-.3H6.2c-.1.1-.2.2-.2.3v.8c0 .3 0 .4.4.4H8" />
      </svg>
    ),
    pool: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "1.5rem",
          height: "1.5rem",
          margin: 10,
        }}
        xmlSpace="preserve"
        viewBox="0 0 24 24"
      >
        <path d="M17.1 19.9h6.3c.3.1.6.4.6.8 0 .3-.2.6-.6.7H.7c-.4 0-.8-.4-.7-.8 0-.4.4-.7.8-.7H5.2V6.2c0-2.1 1.7-3.8 3.8-3.8 1.9 0 3.5 1.4 3.8 3.3v3.7c0 .4-.3.8-.7.9s-.8-.3-.9-.7V6.4c0-1.2-1-2.3-2.2-2.3-1.1 0-2 .7-2.2 1.8V13h8.8V6.3c0-2.1 1.7-3.8 3.8-3.8 2 0 3.6 1.5 3.8 3.4.1.9 0 1.7 0 2.6v.9c0 .4-.3.8-.8.8s-.8-.3-.8-.8V6.2c.1-1.2-.9-2.3-2.1-2.4-1.2.2-2.2 1-2.4 2.2v13.9M6.8 16.5h8.8v-1.9H6.8v1.9zm0 3.4h8.8V18H6.8v1.9z" />
      </svg>
    ),
    bathRoom: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "1.5rem",
          height: "1.5rem",
          margin: 10,
        }}
        xmlSpace="preserve"
        viewBox="0 0 24 24"
      >
        <path d="M3 24c-.2-.1-.3-.3-.5-.4-.1-.2-.1-.4 0-.6.1-.2.2-.4.4-.6-.1 0-.1-.1-.2-.1-1.4-.6-2.3-1.9-2.3-3.4V17c0-.1 0-.2-.1-.3-.2-.1-.3-.4-.3-.6v-2.3c0-.4.3-.7.7-.7h.7V2.8C1.4 1.3 2.5.1 4 0c1.1 0 2.1.6 2.5 1.7.1.2.2.5.3.8 0 .1.1.2.2.2 1.5 0 2.8 1 3.1 2.4.1.2.1.4.2.5.1.4-.1.8-.4.9h-.1c-1.5.4-3.1.9-4.6 1.3-.4.1-.8-.1-.9-.4v-.1c-.2-.5-.3-1-.4-1.6 0-1.1.5-2 1.4-2.6.2-.1.2-.1.2-.3-.1-.2-.2-.4-.2-.5-.2-.7-.9-1-1.6-.8-.5.1-.9.6-.8 1.2V13.1h1.3l.1-.1c.1-.3.4-.5.7-.5h3.7c.4 0 .7.2.8.6H23.2c.4-.1.8.2.9.5v2.7c-.1.2-.2.3-.4.4-.1.1-.1.2-.1.3v1.9c0 1.5-.9 2.8-2.3 3.4l-.3.1c.1.2.3.4.4.6.1.2.1.4 0 .6-.1.2-.3.3-.5.4h-.3c-.2-.1-.4-.3-.5-.5-.1-.2-.3-.5-.5-.7-.1-.1-.2-.2-.4-.2H5.5c-.3 0-.7-.1-1 0-.3.1-.4.5-.6.8-.1.2-.3.4-.6.5L3 24zm6.4-9.5V19c0 .6-.2.9-.9.9H5.1c-.6 0-.9-.2-.9-.9v-4.5H1.4v1c0 .1 0 .1.1.2.3.3.4.7.4 1.1v1.9c-.1 1.3.9 2.4 2.3 2.5H19.5c1.3.1 2.4-1 2.5-2.3v-2.2c0-.4.1-.7.4-1 .1 0 .1-.1.1-.2v-1H9.4zm-3.7-.6v4.5H8v-4.5H5.7m3.1-8.6c-.3-.9-1.2-1.5-2.1-1.2-1 .2-1.5 1.1-1.3 2v.1l3.4-.9" />
      </svg>
    ),
    meterage: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "1.5rem",
          height: "1.5rem",
          margin: 10,
        }}
        xmlSpace="preserve"
        viewBox="0 0 24 24"
      >
        <path d="M4.7 24c-2.5 0-4.6-2-4.6-4.5V4.7C0 2.1 2 0 4.5 0h14.8c2.2 0 4.2 1.6 4.6 3.8.1.3.1.5.1.8v14.7c0 2.5-2 4.6-4.5 4.6H12.1c-2.5.1-5 .1-7.4.1zM1.6 4.7v14.6c-.1 1.6 1.2 3 2.9 3.1H19.3c1.6.1 3-1.2 3.1-2.9V4.7c.1-1.6-1.2-3-2.9-3.1H4.7c-1.6-.1-3 1.2-3.1 2.9v.2zM14.3 20c-.4 0-.8-.3-.9-.7v-.1c0-.4.4-.8.8-.8h2.9L5.6 6.8V9.6c0 .4-.3.8-.7.9h-.1c-.4 0-.8-.3-.8-.8V4.6c0-.3.2-.5.5-.6h5.2c.4 0 .8.3.9.7v.1c0 .4-.4.8-.8.8h-3l11.6 11.6V14.4c0-.4.3-.8.7-.9h.1c.4 0 .8.4.8.8v5.1c0 .5-.2.7-.7.7h-2.5l-2.5-.1z" />
      </svg>
    ),
  };

  return (
    <div className="hover:scale-[1.03] transition-transform duration-300 ease-in-out cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <PricePlaceSec children={formatNumber(items.price)} />
        <img
          className="size-[25.658rem] object-cover"
          src={items.img}
          alt={items.title}
        />
      </div>
      <div className="py-[45px] px-[40px]">
        <a href="" className="text-2xl font-bold mb-4 block">
          {items.title}
        </a>
        <div className="text-text-green text-sm border-b border-gray-100 pb-10">
          Lorem ipsum dolor sit amet, consectetur
        </div>
        <div className="flex justify-between mt-6">
          <PlaceSecOption
            count={items.bedrooms}
            icon={icons.bed}
            subject={"bedrooms"}
          />
          <PlaceSecOption
            count={items.bathrooms}
            icon={icons.bathRoom}
            subject={"bathrooms"}
          />
          <PlaceSecOption
            count={items.pool ? 1 : "-"}
            icon={icons.pool}
            subject={"pool"}
          />
          <PlaceSecOption
            count={items.totalArea}
            icon={icons.meterage}
            subject={"Total Area"}
          />
        </div>
      </div>
    </div>
  );
}

export default PlaceSecItems;
