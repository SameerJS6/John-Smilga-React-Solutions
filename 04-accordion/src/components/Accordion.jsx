import React, { useState } from "react";
import Ripples from "react-ripples";

export default function Accordion({ title, info }) {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <article>
        <Ripples color="#dfc2a2" during={1200}>
          <div className="content-container | px-4 py-2 md:py-3 border border-[var(--outline)] transition-all duration-300 ease-in-out rounded-md lg:rounded-lg hover:bg-[var(--hover)]">
            <div className="Question-container | grid gap-2">
              <div
                onClick={() => setisOpen(!isOpen)}
                className="heading | flex gap-4 md:gap-8 items-center justify-between hover:cursor-pointer"
              >
                <h2 className="text-lg lg:text-xl font-medium text-[var(--on-background)]">
                  {title}
                </h2>
                <div
                  onClick={() => setisOpen(!isOpen)}
                  className="bg-[var(--on-secondary-container)] rounded-[50%] p-1 cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="var(--on-secondary)"
                    className={`w-5 h-5 | transition-all duration-300 ease-in-out hover:translate-y-[2px] ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all overflow-hidden duration-300 ease-in-out px-1 ${
                  !isOpen ? "hidden" : "none"
                } `}
              >
                <p className="text-[var(--on-background)] text-sm transition-all duration-300 ease-in-out">
                  {info}
                </p>
              </div>
            </div>
          </div>
        </Ripples>
      </article>
    </>
  );
}
