import React from "react";
import { twMerge } from "tailwind-merge";
import useRipple from "use-ripple-hook";

export default function Button({
  children,
  className,
  onClick,
  RippleColor = "#0000001a",
  duration = 500,
}) {
  const [ripple, event] = useRipple({ color: RippleColor, duration: duration });
  return (
    <button
      ref={ripple}
      onMouseDown={event}
      onClick={onClick}
      className={twMerge(
        "transition-all duration-[350ms] ease-in-out",
        className
      )}
    >
      {children}
    </button>
  );
}
