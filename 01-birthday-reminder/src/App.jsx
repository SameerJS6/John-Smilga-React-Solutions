import React, { useState } from "react";
import data from "./data";
import Ripples from "react-ripples";
import NoResultImage from "../no-result.png";

export default function App() {
  const [hide, sethide] = useState(false);
  const handleClick = () => {
    sethide(true);
  };
  return (
    <>
      <main className="w-[90vw] max-w-md mx-auto p-4 md:p-8 slide-in">
        <div className="grid gap-8 bg-white border-none rounded-lg shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-4 p-4 md:p-8">
          <h2 className="font-semibold text-3xl ">
            {hide ? "0" : "5"} Birthdays Today
          </h2>

          <div className="overflow-hidden grid gap-6">
            {data.map((items) => {
              return (
                <div
                  className={`flex gap-4 items-center transition-all duration-500 ${
                    hide ? "width hidden" : ""
                  }`}
                  key={items.id}
                >
                  <div className="max-w-[75px] overflow-hidden rounded-full border-none">
                    <img
                      className="w-14 lg:w-16 rounded-[50%] aspect-square object-cover shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 ease-in-out"
                      src={items.image}
                      alt={`Profile Picture of ${items.name}`}
                    />
                  </div>
                  <div className="">
                    <h3 className="font-semibold text-lg">{items.name}</h3>
                    <p className="text-sm text-gray-500">{items.age} years</p>
                  </div>
                </div>
              );
            })}

            <div
              className={`text-center transition-all duration-500 ease-in-out ${
                hide ? "block translate-x-0" : "translate-x-24 hidden"
              }`}
            >
              <img
                className="mx-auto"
                src={NoResultImage}
                alt="No-Result Image"
              />
              <p className="text-2xl md:text-3xl text-pink-600 font-bold">
                You've No Birthdays
              </p>
            </div>
          </div>
          <Ripples>
            <button
              onClick={handleClick}
              disabled={hide}
              className="w-full bg-pink-500 text-white border-none rounded-lg p-4 hover:bg-pink-600 transition-colors"
            >
              Clear All
            </button>
          </Ripples>
        </div>
      </main>
    </>
  );
}
