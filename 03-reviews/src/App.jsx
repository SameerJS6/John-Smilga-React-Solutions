import React from "react";
import Reviews from "./Reviews";

export default function App() {
  return (
    <>
      <main className="max-w-md grid gap-8 pt-8 pb-4">
        <h1 className="title anime | relative w-fit mx-auto text-3xl font-semibold text-center transition-all duration-300 cursor-default text-emerald-900">
          Our Reviews
        </h1>
        <div>
          <Reviews />
        </div>
      </main>
    </>
  );
}
