import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useGlobalContext } from "./context/context";
import Spinner from "./components/Loader/Spinner";

export default function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <main className="grid place-content-center h-[100dvh]">
        <Spinner />
      </main>
    );
  }

  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <Navbar />
        <CartContainer />
      </div>
    </>
  );
}
