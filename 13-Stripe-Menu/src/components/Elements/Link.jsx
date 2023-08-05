import React from "react";
import useRipple from "use-ripple-hook";

export default function Link({ url, icon, label }) {
  const [ripple, event] = useRipple({ color: "#0000001a", duration: 700 });
  return (
    <a
      ref={ripple}
      onMouseDown={event}
      href={url}
      className="flex items-center gap-2 rounded-full px-2 py-1 capitalize hover:bg-slate-50 transition-all duration-200 ease-in-out"
    >
      {icon}
      {label}
    </a>
  );
}
