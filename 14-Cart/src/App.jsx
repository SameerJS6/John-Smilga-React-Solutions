import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useGlobalContext } from "./context/context";
import Spinner from "./components/Loader/Spinner";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

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
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
        />
      </div>
    </>
  );
}
