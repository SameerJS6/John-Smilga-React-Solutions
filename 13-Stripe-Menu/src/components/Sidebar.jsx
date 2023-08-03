import React, { useRef } from "react";
import sublinks from "../data";
import useRipple from "use-ripple-hook";
import { useGlobalContext } from "../context/context";
import useClickOutside from "../hook/useClickOutside";
import Link from "./Elements/Link";

export default function Sidebar() {
  let SidebarRef = useRef();

  const [ripple, event] = useRipple({ color: "#0000001a", duration: 700 });
  const { isSidebarOpen, CloseSidebar } = useGlobalContext();
  useClickOutside(SidebarRef, CloseSidebar);
  return (
    <aside
      ref={SidebarRef}
      className={`fixed left-1/2 top-1/2 w-[90%] max-w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-8 pt-10 shadow-lg transition-all duration-300 ease-in-out max-[330px]:px-6 lg:hidden ${
        isSidebarOpen
          ? "visible z-10 -translate-y-1/2 opacity-100"
          : "invisible z-0 -translate-y-8 opacity-0"
      }`}
    >
      <button
        ref={ripple}
        onMouseDown={event}
        onClick={CloseSidebar}
        className="absolute right-2 top-2 aspect-square rounded-3xl p-2 transition-all duration-300 ease-in-out active:rounded-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 sm:h-7 sm:w-7"
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div className="space-y-4">
        {sublinks.map((item, index) => {
          const { links, page } = item;
          return (
            <article className="space-y-2" key={index}>
              <h5 className="text-xl font-medium capitalize">{page}</h5>
              <div className="grid grid-cols-2 gap-1">
                {links.map((link, index) => {
                  return <Link key={index} {...link} />;
                })}
              </div>
            </article>
          );
        })}
      </div>
    </aside>
  );
}
