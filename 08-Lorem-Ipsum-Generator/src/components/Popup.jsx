import React, { useRef } from "react";
import "./Animation.css";

export default function Popup({ isError, handlePop, context }) {
  return (
    <>
      <div
        data-bar={isError ? "true" : "false"}
        className={`popup | absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] grid gap-6 justify-center bg-slate-50 rounded-2xl shadow-xl text-center p-4 sm:p-8 transition-all duration-500 hover:shadow-2xl ease-in-out w-[260px] min-[320px]:w-[290px] min-[370px]:w-[350px] sm:w-[500px] overflow-hidden ${
          isError
            ? "scale-100 translate-y-0 opacity-100 z-10"
            : "scale-0 translate-y-8 opacity-0"
        }`}
      >
        <div
          className={`${
            isError ? "slide-in" : ""
          } rounded-[50%] bg-red-200 p-4 w-fit mx-auto shadow`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="rgb(220 38 38)"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
            />
          </svg>
        </div>
        <div className="grid gap-4">
          <span
            className={`${
              isError ? "tracking-in" : ""
            } | font-bold text-xl capitalize`}
          >
            invaild count
          </span>
          <p className={isError ? "slide-in" : ""}>{context}</p>
        </div>

        <button
          onClick={handlePop}
          className={`${
            isError ? "slide-in" : ""
          } btn btn-2 | rounded-[100vmax] bg-sky-500 text-purple-50 font-medium capitalize px-4 py-2 w-fit text-sm mx-auto shadow-lg`}
        >
          <span className="flex relative overflow-hidden">
            <span className="flex relative overflow-hidden gap-2 justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              go back
            </span>
          </span>
        </button>
      </div>
    </>
  );
}
