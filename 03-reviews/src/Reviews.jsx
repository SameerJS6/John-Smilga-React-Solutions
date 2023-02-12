import React, { useState } from "react";
import reviews from "./data";
import { FaQuoteRight } from "react-icons/fa";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { name, job, image, text } = reviews[currentIndex];

  const checkNumber = (number) => {
    // First, if checks if the number is greather than the length of data Array, and if it is grether, then set it back to 0
    if (number > reviews.length - 1) return 0;
    // Second, if checks  if the number is smaller than the 0, and if it is smaller, then set it to the last index of array
    if (number < 0) return reviews.length - 1;
    // But, if doesn't match any condition mention above, then the number must be between 0 to reviews.length -1 i.e. 3, so just return it
    return number;
  };
  const prevSlide = () => {
    // currentIndex === 0
    //   ? setCurrentIndex(reviews.length - 1)
    //   : setCurrentIndex(currentIndex - 1);

    let newIndex = currentIndex - 1;
    return setCurrentIndex(checkNumber(newIndex));
  };
  const nextSlide = () => {
    // currentIndex === reviews.length - 1
    //   ? setCurrentIndex(0)
    //   : setCurrentIndex(currentIndex + 1);

    let newIndex = currentIndex + 1;
    return setCurrentIndex(checkNumber(newIndex));
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === currentIndex) randomNumber = currentIndex - 1;
    setCurrentIndex(checkNumber(randomNumber));
  };
  return (
    <article className="p-4 | anime">
      <div className="main-container | grid gap-4 text-center p-8 rounded-xl shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-xl">
        <div className="image-section | relative rounded-full w-fit mx-auto hover:-translate-y-1 transition-all duration-500 ease-in-out drop-shadow-lg md:drop-shadow-md">
          <img
            className="profile-image | max-w-[150px] rounded-[50%] aspect-square object-cover mx-auto"
            src={image}
            alt={`${name} Profile Picture`}
          />
          <div className="absolute top-1 left-1 bg-emerald-500 p-2 rounded-[50%] shadow-md">
            <FaQuoteRight className="text-emerald-50 text-sm md:text-base " />
          </div>
        </div>
        <div>
          <h3 className="heading | font-semibold capitalize">{name}</h3>
          <p className="pro | text-emerald-500 uppercase font-medium text-sm">
            {job}
          </p>
        </div>
        <p className="text-emerald-800 text-sm">{text}</p>
        <div className="buttons | flex gap-1 justify-center">
          <button onClick={prevSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill=""
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke=""
              className="w-7 h-7 md:w-9 md:h-9 | arrows-icon shadow hover:shadow-lg rounded-[50%]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <button onClick={nextSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill=""
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke=""
              className="w-7 h-7 md:w-9 md:h-9 | arrows-icon shadow hover:shadow-lg rounded-[50%]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <button
          onClick={randomPerson}
          className="random-btn | border-none rounded-lg bg-emerald-100 text-emerald-500 font-medium px-4 py-2 mx-auto w-fit transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 hover:bg-emerald-500 hover:text-emerald-100 lg:py-3 lg:px-8 lg:rounded-xl md:text-lg"
        >
          Suprise Me
        </button>
      </div>
    </article>
  );
}
