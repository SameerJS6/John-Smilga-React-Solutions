import React, { useState, useEffect } from "react";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Notification from "./components/Notification";
import Popup from "./components/Popup";
import Textarea from "./components/Textarea";

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
  return (
    <main className="max-w-[1440px] mx-auto">
      <div data-overlay={isError ? "true" : "false"} className="section | p-4">
        <Navbar />
        <div className="my-8 sm:my-6 lg:my-12 xl:my-14 grid place-content-center">
          <Herosection />
          <Textarea
            number={number}
            isError={isError}
            setNumber={setNumber}
            isCopied={setIsCopied}
            handlePop={handlePop}
            handleNoti={handleNoti}
          />
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
