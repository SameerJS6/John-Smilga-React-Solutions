import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

export default function App() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <Navbar />
        <CartContainer />
      </div>
    </>
  );
}
