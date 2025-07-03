function PricePlaceSec({ children }) {
  return (
    <span
      className="top-0 absolute mt-[1.2rem] ml-[1.2rem] py-2.5 px-3 bg-dark-green text-white text-xl font-bold"
    >
      ${children}
    </span>
  );
}

export default PricePlaceSec;
