import { useEffect } from "react";

export function useRipple(element, config) {
  // Adding the default value for the ripple
  const {
    duration = 1000,
    color = "rgb(var(--primary) / 1)",
    size = 100,
  } = config;
  useEffect(() => {
    // Adding the ripple to the provided element
    const applyContainer = () => {
      element.current.classList.add("effect-container");
    };
    // Below, function applys styles to the  element, by using event object
    const applyStyles = (e) => {
      const { offsetX, offsetY } = e;
      const { style } = element.current;
      const sizeOffset = size / 2;
      // Setting up all the information (i.e:- Clicked position and subtracting it by the half of width & height to center it on the element)
      style.setProperty("--color", color);
      style.setProperty("--width", `${size}px`);
      style.setProperty("--height", `${size}px`);
      style.setProperty("--duration", `${duration}ms`);
      style.setProperty("--top", `${offsetY - sizeOffset}px`);
      style.setProperty("--left", `${offsetX - sizeOffset}px`);
    };
    // Below, Function is Adding & Removing the Active class
    const onClick = (e) => {
      element.current.classList.remove("active");
      applyStyles(e);
      element.current.classList.add("active");
    };

    applyContainer();
    // Listening the mouseup (i.e similar to click) and adding the Above function to it
    element.current.addEventListener("mouseup", onClick);
    const cleanupRef = element.current;
    // Cleaning up the event listener
    return () => {
      cleanupRef.removeEventListener("mouseup", onClick);
    };
  }, [element, color, duration, size]);
}
