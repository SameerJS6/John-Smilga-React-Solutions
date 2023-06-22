import React, { useState, useEffect, useRef } from "react";

import { links, social } from "./data";
import { Rotate as Hamburger } from "hamburger-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  let LinksContainerRef = useRef(null);
  let LinksRef = useRef(null);

  useEffect(() => {
    const linksHeight = LinksRef.current.getBoundingClientRect().height;
    if (isOpen) {
      LinksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      LinksContainerRef.current.style.height = "0px";
    }
  }, [isOpen]);
  return (
    <nav className="mx-auto flex max-w-[1440px] flex-col justify-between bg-slate-100 p-4 sm:flex-row sm:px-8 min-[800px]:items-center lg:px-20 xl:px-28">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium sm:text-2xl md:text-3xl lg:text-3xl">
          Sameer
        </h1>
        <button className="sm:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={25} rounded />
        </button>
      </div>

      <div className="linkContainer" ref={LinksContainerRef}>
        <ul
          className="flex flex-col items-center font-medium sm:flex-row xl:text-lg"
          ref={LinksRef}
        >
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li
                key={id}
                className="rounded-full bg-transparent px-4 py-2 capitalize transition-all duration-300 hover:bg-slate-300"
              >
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <ul className="hidden items-center min-[800px]:flex ">
        {social.map((social) => {
          const { id, url, icon } = social;
          return (
            <li
              key={id}
              className="rounded-full bg-transparent px-2 py-2 transition-all duration-300 hover:bg-slate-300"
            >
              <a target="_blank" href={url}>
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
