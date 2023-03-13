import React, { useState, useEffect } from "react";
import Buttons from "../Buttons/Buttons";
import data from "../../data";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";

export default function Textarea({
  number,
  setNumber,
  isError,
  isCopied,
  handlePop,
  copyRef,
  resetRef,
  generateRef,
}) {
  const [text, setText] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    number > 50 ? handlePop() : "";
    number < 0 ? handlePop() : "";
  }, [number]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(number);
    if (amount === 0 || amount === "") setShow(true);
    if (amount <= 0 || amount > 50) {
      amount = 0;
      setShow(true);
    } else {
      setShow(false);
    }
    setText(data.slice(0, amount));
  };
  return (
    <>
      <section
        id="generateSection"
        className="max-w-[800px] grid gap-4 mx-auto scroll-smooth"
      >
        <Reveal effect="tracking-in">
          <h2 className="font-bold text-primary text-center text-2xl sm:text-3xl mb-2 sm:mb-5 lg:mb-6 mx-auto bg-primaryHover rounded-[100vmax] px-6 py-4 sm:px-8 w-fit transition-all duration-500">
            Dummy Text Generator...
          </h2>
        </Reveal>
        <Fade top duration={1500}>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              {/* <label
              htmlFor="amount"
              className="capitalize text-base font-medium text-slate-800 text-center sm:hidden"
            >
              <span>How many paragraphs?</span>
            </label> */}
              <div className="flex flex-col justify-center sm:flex-row gap-4">
                <input
                  className="p-2 py-3 font-medium rounded-lg border border-inputBorder text-onBackground text-lg w-fit bg-transparent transition-all duration-500 ease-in-out hover:border-hoverInputBorder focus:outline-none focus:border-primary focus-visible:outline-none mx-auto sm:mx-0"
                  type="number"
                  name="amount"
                  disabled={isError}
                  value={number}
                  pattern="[0=9]"
                  placeholder="Enter paragraphs count"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <Buttons
                text={text}
                setShow={setShow}
                setText={setText}
                setIsCopied={isCopied}
                setNumber={setNumber}
                // All the Button Refs
                copyRef={copyRef}
                resetRef={resetRef}
                generateRef={generateRef}
              />
            </div>
          </form>
        </Fade>
        <Reveal effect="slide-reveal">
          <div className="textarea | relative bg-tertiary  text-onTertiary rounded-xl h-80 shadow-md my-4 focus:outline-transparent focus-visible:outline-4 focus-visible:outline-slate-500  focus-visible:rounded-lg overflow-auto">
            <article
              className="grid gap-4 w-full font-medium p-4 sm:p-5 border-none bg-transparent sm:leading-relaxed text-justify"
              spellCheck="false"
              placeholder={"Generate your text now.."}
            >
              {text.map((items, index) => {
                return <p key={index}>{items}</p>;
              })}
            </article>
            <div
              className={`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition duration-300 ease-in-out max-[281px]:w-[260px] w-[280px] sm:w-[380px] ${
                show
                  ? "scale-100 translate-y-0 opacity-100"
                  : "scale-0 translate-y-4 opacity-0"
              }`}
            >
              <img src="/error-image.png" alt="Error Image" />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
