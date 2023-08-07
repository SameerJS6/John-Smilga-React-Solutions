import React from "react";
import EmptyImg from "../Asset/Empty.png";

export default function EmptyCart() {
  return (
    <main>
      <div className="mx-auto w-fit max-w-lg">
        <img src={EmptyImg} alt="A Empty Cart" />;
      </div>
      <div className="text-4xl px-4 lg:text-5xl text-center">
        <p>
          Your Cart is{" "}
          <span className="uppercase text-red-500 font-semibold text-5xl lg:text-6xl border-b-2 border-red-500 rounded-ld">
            empty..
          </span>
        </p>
      </div>
    </main>
  );
}
