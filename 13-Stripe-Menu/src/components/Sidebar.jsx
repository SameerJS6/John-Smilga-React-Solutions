import React, {useRef} from "react";
import useRipple from "use-ripple-hook";
import { useGlobalContext } from "../context/context";
import useClickOutside from "../hook/useClickOutside";

export default function Sidebar() {
  let SidebarRef = useRef()
  
  const [ripple, event] = useRipple({ color: "#0000001a", duration: 700 });
  const { isSidebarOpen, CloseSidebar } = useGlobalContext();
  useClickOutside(SidebarRef, CloseSidebar)
  return (
    <aside ref={SidebarRef}
      className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-8 text-4xl shadow-lg transition-all duration-300 ease-in-out lg:hidden ${
        isSidebarOpen
          ? "visible z-10 -translate-y-1/2 opacity-100"
          : "invisible z-0 -translate-y-8 opacity-0"
      }`}
    >
      <button
        ref={ripple}
        onMouseDown={event}
        onClick={CloseSidebar}
        className="aspect-square rounded-full p-3 transition-all duration-300 ease-in-out hover:bg-slate-50 hover:shadow"
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
      <p>Sidebar</p>
    </aside>
  );
}
