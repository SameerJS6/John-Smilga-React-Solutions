import React from "react";
import useRipple from "use-ripple-hook";
import { links, social } from "../data";

export default function Sidebar() {
  const [ripple, event] = useRipple({ color: "#0000001d", duration: 700 });
  return (
    <aside className="fixed left-0 top-0 z-10 flex h-[100vh] w-[90%] max-w-[350px] flex-col bg-white shadow-2xl ">
      <div className="flex items-center justify-between py-3 pl-5 pr-2">
        <h1 className="text-4xl">Sameer</h1>
        <button
          ref={ripple}
          onMouseDown={event}
          className="aspect-square rounded-full p-3 transition-all duration-300 ease-in-out hover:bg-slate-100 hover:shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
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

      <nav className="flex h-full flex-col justify-between pb-12 pt-4">
        <ul>
          {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li key={id}>
                <a
                  className="ease-in-ou flex items-center gap-4 rounded-e-full p-3 px-8 text-lg font-medium capitalize transition-all duration-300 hover:bg-slate-100"
                  href={url}
                >
                  {icon} {text}
                </a>
              </li>
            );
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
