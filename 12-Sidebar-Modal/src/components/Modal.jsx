import React, { useRef } from "react";
import Button from "./Button";
import useRipple from "use-ripple-hook";
import { useGlobalContext } from "../context/Context";
import useClickOutside from "../hook/useClickOutside";

export default function Modal() {
  const [ripple, event] = useRipple({ color: "#0000001a", duration: 700 });
  const { showModal, CloseModal } = useGlobalContext();
  let modalRef = useRef();
  useClickOutside(modalRef, CloseModal);
  return (
    <>
      <article
        ref={modalRef}
        className={`fixed left-1/2 top-1/2 z-10 grid min-w-[300px] -translate-x-1/2 -translate-y-1/2 justify-center rounded-xl bg-white p-4 shadow-xl transition-all duration-500 max-[300px]:min-w-[250px] sm:p-8 ${
          showModal
            ? "visible -translate-y-1/2 opacity-100"
            : "invisible translate-y-1 opacity-0"
        }`}
      >
        <div className="mx-auto mt-4 rounded-full bg-red-200 p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 stroke-red-800 sm:h-8 sm:w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        </div>
        <div className="my-8 text-center md:max-w-[35ch]">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
            alias eveniet veritatis est voluptate eos nesciunt aperiam
            repellendus molestias quis.
          </p>
        </div>
        <div className="flex w-full justify-center gap-2 sm:gap-4">
          <Button
            text={"Activate"}
            customeColor="rgba(255, 255, 255, .3)"
            className={
              "rounded-[1.5rem] px-4 py-2 text-base font-normal active:rounded-xl"
            }
          />
          <Button
            text={"Cancel"}
            customeColor="rgba(0,0,0, .3)"
            onClick={CloseModal}
            className={
              "rounded-[1.5rem] border-2 border-slate-900 bg-transparent px-4 py-2 text-base font-normal text-slate-950 active:rounded-xl"
            }
          />
        </div>
        <button
          ref={ripple}
          onMouseDown={event}
          onClick={CloseModal}
          className="absolute right-3 top-3 rounded-full bg-slate-50 p-3 transition-all duration-300 hover:top-2 hover:bg-slate-100 hover:shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </article>
    </>
  );
}
