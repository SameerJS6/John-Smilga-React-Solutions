import React from "react";
import questions from "./data";
import "./components/Animations.css";
import Accordion from "./components/Accordion";
import illustration from "./illustration.png";

export default function App() {
  return (
    <>
      <main className="relative max-w-4xl grid gap-8 pt-8 pb-4 px-4">
        <h1 className="title tracking-in | relative w-fit mx-auto text-3xl md:text-4xl font-medium transition-all duration-300 cursor-default text-[var(--on-background)]">
          Our Reviews
        </h1>

        <div className="wrapper slide-in | grid gap-6 md:gap-8 md:grid-cols-2 p-4 md:p-8 bg-[var(--on-surface)] text-[var(--on-background) rounded-xl">
          <div className="container-title flex flex-col justify-center items-end">
            <h1 className="text-2xl text-center md:text-left xl:text-3xl font-bold text-[var(--on-background)]">
              Question and Answers about our services
            </h1>
            <div>
              <img
                src={illustration}
                alt="A Person Sitting on top on Books illustration"
              />
            </div>
          </div>

          <div className="grid gap-4">
            {questions.map((items) => {
              return <Accordion key={items.id} {...items} />;
            })}
          </div>
        </div>

        <div className="scale-in | absolute top-[8%] -left-[5%] -z-10">
          <svg
            fill="#3c4c28"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="150px"
            height="150px"
            viewBox="0 0 26.361 26.361"
            xmlSpace="preserve"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path d="M26.36,2v22.36c0,1.104-0.895,2.001-2,2.001H2c-1.104,0-2-0.896-2-2.001V2c0-1.104,0.896-2,2-2h22.36 C25.466,0,26.36,0.896,26.36,2z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>

        <div className="scale-in | absolute -z-10 -bottom-0.5 right-[-63px] hidden lg:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#3c4c28"
            className="w-48 h-48"
          >
            <path
              fillRule="#3c4c28"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </main>
    </>
  );
}
