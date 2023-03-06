import React from "react";

export default function Buttons({ handleLeft, handleRight }) {
  return (
    <>
      <button
        onClick={handleLeft}
        className="left-arrow | absolute top-[50%] left-2 md:left-4 lg:left-8 translate-y-[-50%] bg-[#1d1c16] rounded-[50%] p-2 scale-95 md:scale-100 shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-2xl active:scale-90"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#f2e66a"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <button
        onClick={handleRight}
        className="right-arrow | absolute top-[50%] right-2 md:right-4 lg:right-8 translate-y-[-50%] bg-[#1d1c16] rounded-[50%] p-2 scale-95 md:scale-100 shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-2xl active:scale-90"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#f2e66a"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </>
  );
}
