import React, { useState, useEffect } from "react";
import Buttons from "./components/Buttons";
import Slider from "./components/Slider";
import Title from "./components/Title";
import data from "./data";

export default function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  const handleLeft = () => {
    index <= 0
      ? setIndex(people.length - 1)
      : setIndex((prevIndex) => prevIndex - 1);
  };

  const handleRight = () => {
    index >= people.length - 1
      ? setIndex(0)
      : setIndex((prevIndex) => prevIndex + 1);
  };
  // Function for left and right key
  const handleKey = (event) => {
    if (event.keyCode === 37) handleLeft();
    if (event.keyCode === 39) handleRight();
  };

  useEffect(() => {
    let slider = setInterval(() => {
      handleRight();
    }, 4500);
    window.addEventListener("keydown", handleKey); //Adding the Arrow Keys event listener

    return () => {
      window.removeEventListener("keydown", handleKey); //Removing the Arrow keys event listener, so that it doesn't listen continuous even when the keys are not pressed
      clearInterval(slider);
    };
  }, [index]);

  return (
    <>
      <main>
        <Title />
        <section className="section-center | flex relative overflow-hidden opa">
          <Slider people={people} index={index} />
          <Buttons handleLeft={handleLeft} handleRight={handleRight} />

          <div className="none opa | absolute top-[-26%] left-[-23%] lg:top-[-110px] lg:left-[-15%] rotate-45 w-[350px] pointer-events-none -z-[1]">
            <img src="/rate-icon.png" alt="" />
          </div>
          <div className="none-1 opa | absolute bottom-[-150px] right-[-28%] rotate-[-103deg] w-[450px] pointer-events-none -z-[1]">
            <img src="/woman.png" alt="" />
          </div>
        </section>
      </main>
    </>
  );
}
