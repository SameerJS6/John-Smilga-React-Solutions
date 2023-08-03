import React from "react";
import { useGlobalContext } from "../context/context";

export default function Hero() {
  const { CloseMenu } = useGlobalContext();
  return (
    <div onMouseOver={CloseMenu} className="min-h-[570px]">
      Hero
    </div>
  );
}
