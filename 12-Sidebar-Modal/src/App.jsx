import React from "react";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <main className="mx-auto max-w-[1440px]">
      <Home />
      {/* <Modal /> */}
      {/* <Sidebar /> */}
      {/* <div className="bg-overlay show-overlay"></div> */}
    </main>
  );
}
