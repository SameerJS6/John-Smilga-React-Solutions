import React, { useEffect, useState } from "react";
import copy from "copy-to-clipboard";

export default function SingleColor({ bcg, weight, hex, type }) {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    setIsCopied(true);
    copy("#" + hex);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCopied(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isCopied]);
  return (
    <article
      className="p-4 aspect-square transition-all duration-300 hover:cursor-pointer relative"
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={handleCopy}
    >
      <div className="flex flex-col gap-2 font-medium">
        <p>{weight}%</p>
        <p>{type}</p>
        <h2>#{hex}</h2>
      </div>

      <p
        className={`absolute left-2 transition-all duration-300 bg-white text-black rounded-full py-1 px-3 ${
          isCopied ? "bottom-5 opacity-100" : "bottom-0 opacity-0"
        }`}
      >
        Copy to Clipboard
      </p>
    </article>
  );
}
