import React, { useRef } from "react";
import useRipple from "use-ripple-hook";
import { links, social } from "../data";
import { useGlobalContext } from "../context/Context";
import useClickOutside from "../hook/useClickOutside";
import Link from "./Elements/Link";

export default function Sidebar() {
  const [ripple, event] = useRipple({ color: "#0000001d", duration: 700 });
  const { showSidebar, CloseSidebar } = useGlobalContext();

  let menuRef = useRef();
  useClickOutside(menuRef, CloseSidebar);
  return (
    <aside
      ref={menuRef}
      className={`fixed left-0 top-0 z-10 flex h-[100dvh] w-[90%] max-w-[300px] flex-col rounded-e-3xl bg-white shadow-2xl transition-all duration-500 ease-in-out sm:max-w-[350px] ${
        showSidebar
          ? "pointer-events-auto visible translate-x-0 opacity-100"
          : "pointer-events-none invisible -translate-x-28 opacity-0"
      }`}
    >
      <div className="flex items-center justify-between py-3 pl-5 pr-2">
        <h1 className="text-4xl">Sameer</h1>
        <button
          ref={ripple}
          onMouseDown={event}
          onClick={CloseSidebar}
          className="aspect-square rounded-full p-3 transition-all duration-300 ease-in-out hover:bg-slate-100 hover:shadow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="32px"
            viewBox="0 0 24 24"
            width="32px"
            fill="#000000"
          >
            <path d="M0,0h24v24H0V0z" fill="none" />
            <path d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z" />
          </svg>
        </button>
      </div>

      <nav className="flex h-full flex-col justify-between pb-20 pt-4 sm:pb-12">
        <ul>
          {links.map((link) => {
            return <Link key={link.id} {...link} />;
          })}
        </ul>

        <ul className="flex items-center justify-center ">
          {social.map((social) => {
            const { id, url, icon } = social;
            return (
              <li
                className="rounded-full  p-2 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100 hover:shadow-lg"
                key={id}
              >
                <a target="_blank" href={url}>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
