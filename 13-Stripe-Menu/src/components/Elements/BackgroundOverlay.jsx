import React from "react";
import { useGlobalContext } from "../../context/context";

export default function BackgroundOverlay() {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <div
      className={`${isSidebarOpen ? "bg-overlay show-overlay" : "bg-overlay"}`}
    ></div>
  );
}
