import React from "react";
import { twMerge } from "tailwind-merge";
import useRipple from "use-ripple-hook";

export default function Button({ text, className, customeColor }) {
  const [ripple, event] = useRipple({ color: customeColor, duration: 650 });
  return (
    <button
      ref={ripple}
      onMouseDown={event}
      className={twMerge(
        "rounded-[1.7rem] bg-emerald-600 px-6 py-3 text-lg font-medium text-white shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-opacity-90 hover:shadow-md active:rounded-2xl",
        className
      )}
    >
      {text}
    </button>
  );
}
