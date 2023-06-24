import React from "react";
import Button from "./Button";
import useRipple from "use-ripple-hook";

export default function Home() {
  const [ripple, event] = useRipple({ color: "#0000001a", duration: 700 });
  return (
    <div>
      <button
        ref={ripple}
        onMouseDown={event}
        className="fixed left-8 top-6 aspect-square rounded-full bg-slate-100 p-3 shadow-md transition-all duration-300 ease-in-out hover:bg-slate-200 hover:shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </button>
      <Button customeColor="rgba(255, 255, 255, .3)" text={"Show Modal"} />
    </div>
  );
}
