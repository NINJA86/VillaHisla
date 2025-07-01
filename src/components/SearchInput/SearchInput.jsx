import React, { useState, useEffect, useContext } from 'react';
import properties from '../../data';
// remidn use context for catching data
function SearchInput() {
  const [showResults, setShowResults] = useState(false); //  show the result
  const [query, setQuery] = useState(''); //  it trigger when the user type sth
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    // if the user didn't type anything return and do nothing
    if (query.trim() === '') {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const timeout = setTimeout(() => {
      const searchResultArr = properties.filter((place) =>
        place.title.toLowerCase().includes(query.trim().toLowerCase())
      );
      setResult(searchResultArr);
      setShowResults(true);
      setIsLoading(false);
    }, 1000); // شبیه‌سازی درخواست

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="rounded relative w-[540px] bg-white">
      <input
        // onBlur={() => setTimeout(() => setShowResults(false), 100)}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="outline-0 text-black px-[1.8rem] py-[1.4rem] w-72 placeholder:text-black placeholder:opacity-25"
        type="text"
        placeholder="Search now..."
      />

      <select
        name="category"
        className="absolute outline-0 font-[200] text-black right-0 bottom-0 top-0 h-8 m-auto mr-32 cursor-pointer"
      >
        <option>Select Category</option>
        <option value="Apartments">Apartment</option>
        <option value="Houses">Houses</option>
        <option value="Villas">Villas</option>
      </select>

      <button className="right-[11px] absolute text-white bottom-0 top-0 bg-light-green h-12 w-24 m-auto cursor-pointer hover:bg-dark-green transition-colors flex items-center justify-center">
        {isLoading ? (
          <svg id="searchIcon" className="w-6 h-6" viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50" />
          </svg>
        ) : (
          'Search'
        )}
      </button>

      <ul
        className={`
          absolute left-0 top-full -my-2 mx-0 bg-white w-full shadow-md overflow-hidden rounded-b
          transition-all duration-300 origin-top 
          ${
            showResults && query
              ? 'scale-y-100 opacity-100'
              : 'scale-y-0 opacity-0'
          } 
        `}
      >
        {!isLoading && (
          <>
            {result.slice(0, 4).map((item) => (
              <li
                key={item.id}
                className="border-b text-black last:border-0 p-3 flex items-center gap-4 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <img className=" h-10 w-12 " src={item.img} alt="" />
                <span>{item.title}</span>
              </li>
            ))}

            {result.length > 4 && (
              <li className="text-dark-green cursor-pointer p-3 hover:underline">
                Show more
              </li>
            )}
          </>
        )}
      </ul>

      {/* Loader CSS in <style> */}
      <style jsx>{`
        #searchIcon {
          width: 1.5em;
          height: 1.5em;
          transform-origin: center;
          animation: rotate4 2s linear infinite;
        }

        circle {
          fill: none;
          stroke: #fff;
          stroke-width: 2;
          stroke-dasharray: 1, 200;
          stroke-dashoffset: 0;
          stroke-linecap: round;
          animation: dash4 1.5s ease-in-out infinite;
        }

        @keyframes rotate4 {
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes dash4 {
          0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 90, 200;
            stroke-dashoffset: -35px;
          }
          100% {
            stroke-dashoffset: -125px;
          }
        }
      `}</style>
    </div>
  );
}

export default SearchInput;
