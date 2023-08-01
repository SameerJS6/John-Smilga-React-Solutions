import React from "react";
import useRipple from "use-ripple-hook";
import { twMerge } from "tailwind-merge";

export default function Button({ content, className, duration }) {
  const [ripple, event] = useRipple({ color: "#0000001a", duration: duration });
  return (
    <button
      ref={ripple}
      onMouseDown={event}
      className={twMerge(
        "group flex items-center gap-1 rounded-full px-4 py-2 font-medium transition-all duration-300 ease-in-out hover:-translate-y-1",
        className
      )}
    >
      {content}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5 group-hover:hidden"
      >
        <path
          fillRule="evenodd"
          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
          clipRule="evenodd"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="hidden  h-5 w-5 opacity-0 transition-all duration-300 ease-in-out group-hover:block group-hover:translate-x-1 group-hover:opacity-100"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
        />
      </svg>
    </button>
  );
}
