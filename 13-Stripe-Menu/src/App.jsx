import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import BackgroundOverlay from "./components/Elements/BackgroundOverlay";
import Submenu from "./components/Submenu";

export default function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <BackgroundOverlay />
      <Submenu />
    </>
  );
}
