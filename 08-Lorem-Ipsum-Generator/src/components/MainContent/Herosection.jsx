import React from "react";
import "../Animation.css";

export default function Herosection() {
  return (
    <>
      <section>
        <div className="grid gap-4 text-center ">
          <span className="rounded-[100vmax] bg-green-50 text-green-900 font-bold shadow text-sm w-fit px-5 py-2 mx-auto mb-4">
            Introducing
          </span>
          <h1 className="title-stroke border-style | overflow-hidden relative capitalize text-5xl sm:text-[5rem] lg:text-8xl font-bold px-1 py-4 sm:p-4 lg:p-5 lg:px-7 sm:w-fit sm:mx-auto">
            dummy text
          </h1>
          <span className="capitalize text-5xl sm:text-[5rem] lg:text-7xl text-green-900 font-bold">
            generator<span className="blink">|</span>
          </span>
          <p className="text-xs sm:text-sm xl:text-base font-medium text-green-900 sm:w-[45ch] mx-auto">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            & publishing industries for previewing layouts & visual mockups.
          </p>
          <a
            className="flex gap-2 items-center rounded-lg px-6 py-2 font-medium bg-green-900 text-green-50 shadow-md text-sm sm:text-lg group transition-all duration-300 ease-in-out w-fit mx-auto active:rounded-2xl  hover:shadow-lg hover:scale-105"
            href="#generateSection"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 15l-6 6m0 0l-6-6m6 6V9a6 6 0 0112 0v3"
              />
            </svg>
            Generate
          </a>
        </div>

        <article className="border-style | relative overflow-hidden grid gap-5 text-center px-3 py-5 sm:px-4 sm:py-8 max-w-[900px] my-16 xl:my-32">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-green-900 font-bold">
            What is Lorem Ipsum??
          </h2>
          <div className="grid gap-4 font-medium text-xs lg:text-sm xl:text-base">
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book. It usually begins with:
            </p>
            <div>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua".
              </p>
              <p>
                The purpose of lorem ipsum is to create a natural looking block
                of text (sentence, paragraph, page, etc.) that doesn't distract
                from the layout. A practice not without controversy, laying out
                pages with meaningless filler text can be very useful when the
                focus is meant to be on design, not content.
              </p>
            </div>
            <p>
              The passage experienced a surge in popularity during the 1960s
              when Letraset used it on their dry-transfer-sheets, and again
              during the 90s as desktop publishers bundled the text with their
              software. Today it's seen all around the web; on templates,
              websites, and stock designs. Use our generator to get your own, or
              read on for the authoritative history of lorem ipsum
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
