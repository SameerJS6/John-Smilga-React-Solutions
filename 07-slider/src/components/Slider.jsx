import React from "react";

export default function Slider({ people, index }) {
  return (
    <>
      {people.map((person, personIndex) => {
        const { id, name, image, title, quote } = person;
        let position = "NextSlide";
        index === personIndex ? (position = "ActiveSlide") : "";
        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === people.length - 1)
        ) {
          position = "PrevSlide";
        }

        return (
          <article
            key={id}
            className={`${position} grid place-content-center gap-4 md:gap-6 lg:gap-8 text-center`}
          >
            <div className="image-container | max-w-[150px] rounded-[50%] shadow-xl mx-auto">
              <img
                className="rounded-[50%] aspect-square object-cover w-full"
                src={image}
                alt={name + "Image"}
              />
            </div>

            <div className="text-center">
              <h2 className="tracking-in | font-semibold text-xl md:text-2xl capitalize text-[#f2e66a]">
                {name}
              </h2>
              <span className="tracking-in | font-medium capitalize text-sm">
                {title}
              </span>
            </div>

            <p className="slide-in | text-sm md:text-base">{quote}</p>
          </article>
        );
      })}
    </>
  );
}
