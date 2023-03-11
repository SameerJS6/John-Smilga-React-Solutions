import React from "react";
import "../Animation.css";

export default function Notification({ isCopied, handleNoti }) {
  return (
    <>
      <div
        data-line={isCopied ? "true" : "false"}
        className={`notifications | fixed top-12 right-4 sm:top-16 sm:right-8 w-[250px] sm:w-[300px] flex items-center justify-between bg-slate-50 shadow-md px-3 py-2 sm:px-4 sm:py-3 rounded-xl border border-slate-200 transitio-all duration-500 ease-in-out overflow-hidden ${
          isCopied
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-24 opacity-0 scale-0 pointer-events-none"
        }`}
      >
        <div
          className={`${
            isCopied ? "tracking-in-bottom" : ""
          } | flex items-center gap-2 font-medium capitalize text-sm sm:text-base`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="rgb(34, 197, 94)"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
            />
          </svg>
          Copied to Clipboard!
        </div>
        <button
          onClick={handleNoti}
          className={`${
            isCopied ? "slide-in" : ""
          } | cursor-pointer rounded-[50%] p-1 transition-all duration-300 ease-in-out hover:shadow-md hover:scale-110 hover:-translate-y-1 hover:bg-slate-100`}
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
