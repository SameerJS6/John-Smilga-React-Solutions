import React from "react";
import useRipple from "use-ripple-hook";

export default function Link({ id, url, icon, text }) {
  const [ripple, event] = useRipple({
    color: "#0000001d",
    duration: 500,
  });
  return (
    <li
      ref={ripple}
      onMouseDown={event}
      key={id}
      className="cursor-pointer rounded-e-full p-3 px-8 text-lg font-medium capitalize transition-all duration-300 ease-in-out hover:bg-slate-100"
    >
      <a href={url} className="flex items-center gap-4">
        {icon} {text}
      </a>
    </li>
  );
}
