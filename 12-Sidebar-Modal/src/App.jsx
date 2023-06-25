import React from "react";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import { useGlobalContext } from "./context/Context";

export default function App() {
  const { showModal, showSidebar } = useGlobalContext();
  return (
    <main className="mx-auto max-w-[1440px]">
      <Home />
      <Modal />
      <Sidebar />
      <div
        className={` ${
          showModal || showSidebar ? "bg-overlay show-overlay" : "bg-overlay"
        }`}
      ></div>
    </main>
  );
}
