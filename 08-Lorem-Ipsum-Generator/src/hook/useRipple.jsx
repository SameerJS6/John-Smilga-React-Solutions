import { useEffect } from "react";

export function useRipple(element, config) {
  const { duration = 1000, color = "white", size = 100 } = config;
  useEffect(() => {
    const applyContainer = () => {
      element.current.classList.add("effect-container");
    };

    const applyStyles = (e) => {
      const { offsetX, offsetY } = e;
      const { style } = element.current;
      const sizeOffset = size / 2;

      style.setProperty("--color", color);
      style.setProperty("--width", `${size}px`);
      style.setProperty("--height", `${size}px`);
      style.setProperty("--duration", `${duration}ms`);
      style.setProperty("--top", `${offsetY - sizeOffset}px`);
      style.setProperty("--left", `${offsetX - sizeOffset}px`);
    };

    const onClick = (e) => {
      element.current.classList.remove("active");
      applyStyles(e);
      // setTimeout(() => {
      element.current.classList.add("active");
      // }, 1);
    };

    applyContainer();

    element.current.addEventListener("mouseup", onClick);
    const cleanupRef = element.current;

    return () => {
      cleanupRef.removeEventListener("mouseup", onClick);
    };
  }, [element, color, duration, size]);
}
