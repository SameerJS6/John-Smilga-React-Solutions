import React, { useState, useEffect, useRef } from "react";
import Herosection from "./components/MainContent/Herosection";
import Navbar from "./components/MainContent/Navbar";
import Notification from "./components/Modals/Notification";
import Popup from "./components/Modals/Popup";
import Textarea from "./components/MainContent/Textarea";
import { useRipple } from "./hook/useRipple";
import Footer from "./components/Footer/Footer";
import Fade from "react-reveal/Fade";

export default function App() {
  const [isError, setIsError] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [number, setNumber] = useState("");

  // Function to handle the state of Copied Notification
  const handleNoti = () => {
    setIsCopied((preisCopied) => !preisCopied);
  };

  // Function to handle the state of Error or Invalid Popup
  const handlePop = () => {
    setIsError((preisError) => !preisError);
  };

  // useEffect for the Error or Invalid Notification
  useEffect(() => {
    let Error = setTimeout(() => {
      setIsError(false);
    }, 4050);

    return () => clearTimeout(Error);
  }, [isError]);

  // useEffect for the Copied Notification
  useEffect(() => {
    let Noti = setTimeout(() => {
      setIsCopied(false);
    }, 2550);

    return () => clearTimeout(Noti);
  }, [isCopied]);

  let context;
  number > 50
    ? (context =
        "Ae Gandu, yedhar sirf aur sirf 50 paragraphs hi generate kar sakta hai")
    : "";
  number < 0
    ? (context = `Tere baap ne ${number} paragraph generate, kiya tha kya kabhi, Chal aab peche jaa.`)
    : "";

  // All the Ref for the Ripple Effect
  const themebtnRef = useRef();
  const copybtnRef = useRef();
  const resetbtnRef = useRef();
  const generatebtnRef = useRef();

  useRipple(themebtnRef, {});
  useRipple(copybtnRef, {
    color: "rgb(var(--primary) / 0.75)",
  });
  useRipple(resetbtnRef, {
    color: "rgb(var(--error) / 0.5)",
  });
  useRipple(generatebtnRef, {
    color: "var(--on-background)",
  });
  return (
    <main className="max-w-[1440px] mx-auto">
      <div data-overlay={isError ? "true" : "false"} className="section | p-4">
        <Navbar themeRef={themebtnRef} />
        <div className="my-8 mb-2 sm:my-6 sm:mb-2 lg:my-12 lg:mb-4 xl:my-14 xl:mb-2 grid place-content-center">
          <Herosection />
          <Textarea
            number={number}
            isError={isError}
            setNumber={setNumber}
            isCopied={setIsCopied}
            handlePop={handlePop}
            handleNoti={handleNoti}
            // All the Button Refs
            copyRef={copybtnRef}
            resetRef={resetbtnRef}
            generateRef={generatebtnRef}
          />
          <Fade bottom>
            <Footer />
          </Fade>
          <Popup
            number={number}
            context={context}
            isError={isError}
            handlePop={handlePop}
          />
          <Notification isCopied={isCopied} handleNoti={handleNoti} />
        </div>
      </div>
    </main>
  );
}
