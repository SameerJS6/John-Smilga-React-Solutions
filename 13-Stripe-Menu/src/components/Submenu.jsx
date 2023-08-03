import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "../context/context";
import Link from "./Elements/Link";

export default function Submenu() {
  const { isMenuOpen, coordinates, page } = useGlobalContext();
  const [grid, setGrid] = useState("grid-2");
  const MenuRef = useRef(null);

  useEffect(() => {
    setGrid("grid-2");
    const { center, bottom } = coordinates;
    const submenu = MenuRef.current;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (page.links.length === 3) {
      setGrid("grid-3");
    }
  }, [coordinates, page.links]);
  return (
    <aside
      ref={MenuRef}
      className={`${
        isMenuOpen
          ? "scale-100  opacity-100 "
          : "pointer-events-none scale-0 opacity-0"
      }  arrow-up absolute left-1/2 top-16 w-fit origin-bottom -translate-x-1/2 rounded-xl bg-white p-8 text-lg font-medium shadow-lg transition-all duration-300 ease-in-out`}
    >
      <h4 className="mb-4 text-xl font-medium capitalize">{page.page}</h4>
      <article className={`grid ${grid} gap-4`}>
        {page.links.map((link, index) => {
          return <Link key={index} {...link} />;
        })}
      </article>
    </aside>
  );
}
