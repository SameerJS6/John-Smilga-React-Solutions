import React from "react";
import Image from "/cake.png";

export default function Menus({ menu }) {
  return (
    <>
      <article className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {menu.map((items) => {
          const { id, title, price, img, desc } = items;
          return (
            <div
              key={id}
              className="card-container slide-in | relative overflow-hidden bg-yellow-50 rounded-3xl md:rounded-[36px] transition-all duration-300 ease-in-out hover:bg-yellow-100 hover:shadow-lg"
            >
              <div className="min-h-[150px] md:min-h-[200px] lg:min-h-[150px] xl:min-h-[200px] bg-yellow-300 rounded-3xl md:rounded-[36px]">
                <img
                  className="w-full min-h-[150px] md:min-h-[200px] lg:min-h-[150px] xl:min-h-[200px] rounded-3xl md:rounded-[36px] aspect-video object-cover"
                  src={img}
                  alt={title}
                />
              </div>

              <section className="grid gap-4 p-4">
                <header className="flex justify-between items-center font-medium pb-4 border-b-2 border-slate-200 rounded-sm">
                  <span className="capitalize text-2xl">{title}</span>
                  <span className="text-yellow-500 text-xl">${price}</span>
                </header>
                <p className="z-[1]">{desc}</p>
              </section>

              <div className="Pizza | absolute right-[-45%] bottom-[-50%] md:bottom-[-48%] md:right-[-42%] xl:bottom-[-45%] xl:right-[-40%] pointer-events-none opacity-0 rotate-0 w-[400px] translate-x-24 transition-all duration-500 ease-in-out">
                <img src={Image} alt="A slice of Pizza Image " />
              </div>
            </div>
          );
        })}
      </article>
    </>
  );
}
