import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
export default function Cards({ id, name, info, image, price, removeCard }) {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("section", { duration: 0, css: { visibility: "visible" } }).fromTo(
      ".tour",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "Power2.inout",
        stagger: 0.2,
      }
    );
  }, []);
  return (
    <>
      <section className="invisible">
        <div className="shadow-xl rounded-lg">
          <div className="tour | relative rounded-lg bg-white">
            <div className="image-wrapper | relative overflow-hidden rounded-t-lg ">
              <img
                className="w-full rounded-t-lg mx-auto aspect-square object-cover shadow-lg hover:scale-110 transition-all duration-[1s] ease-in-out"
                src={image}
                alt={name}
              />
            </div>
            <p className="absolute right-0 top-0 transition-all duration-500 ease-in-out cursor-default font-semibold shadow-md bg-blue-50 text-blue-600 p-2 rounded-bl-lg rounded-tr-lg hover:bg-blue-500 hover:text-blue-50">
              $ {price}
            </p>

            <div className="grid gap-4 p-4 lg:p-8">
              <h3 className="font-bold tracking-[1px] text-xl">{name}</h3>

              <p className="text-gray-500 text-sm leading-snug lg:pb-4">
                {showMore ? info : info.substring(0, 200).concat("", "....")}
              </p>

              <div className="flex items-center flex-row-reverse justify-evenly">
                <button
                  className="flex gap-2 items-center text-blue-500 border border-transparent rounded-md transition-all duration-500 ease-in-out px-4 py-3 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm hover:-translate-y-1 text-sm xl:text-base"
                  onClick={() => setShowMore(!showMore)}
                >
                  {!showMore && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                      />
                    </svg>
                  )}
                  {showMore && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  {showMore ? "Show Less" : "Read More"}
                </button>

                <button
                  onClick={() => removeCard(id)}
                  className="flex items-center gap-2 border rounded-md font-semibold border-red-600 transition-all duration-500 ease-in-out px-4 py-3 capitalize bg-red-600 text-white hover:-translate-y-1 hover:scale-105 hover:shadow-md text-sm xl:text-base"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.72 5.66l11.62 11.62A8.25 8.25 0 006.72 5.66zm10.56 12.68L5.66 6.72a8.25 8.25 0 0011.62 11.62zM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788z"
                      clipRule="evenodd"
                    />
                  </svg>
                  not interested
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
