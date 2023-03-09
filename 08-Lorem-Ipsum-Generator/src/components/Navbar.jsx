import React from "react";
import Darkmode from "./Darkmode";

export default function Navbar() {
  return (
    <>
      <header className="flex items-center justify-between py-4 sm:px-6 sm:py-5 lg:px-12 lg:py-2 xl:px-24 xl:py-4">
        <span className="capitalize font-bold text-green-900 cursor-default text-xl sm:text-2xl">
          dummy text...
        </span>
        <div className="flex gap-1 items-center">
          <a
            className="transition-all duration-[350ms] ease-in-out hover:bg-slate-50 hover:-translate-y-1 hover:scale-110 hover:shadow rounded-[50%] p-2"
            href="https://github.com/SameerJS6"
            target={"_blank"}
          >
            <img
              className="w-5 sm:w-6"
              src="/github-mark.png"
              alt="Github Logo"
            />
          </a>
          <Darkmode />
        </div>
      </header>
    </>
  );
}
