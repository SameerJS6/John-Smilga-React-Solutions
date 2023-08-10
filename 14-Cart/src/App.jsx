import React from "react";
import Navbar from "./components/Navbar";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import CartContainer from "./components/Cart/CartContainer";

export default function App() {
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
