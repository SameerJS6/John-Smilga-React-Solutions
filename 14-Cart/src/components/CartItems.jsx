import React from "react";
import Button from "./Elements/Button";
import { useGlobalContext } from "../context/context";

export default function CartItems({ id, title, price, img, amount }) {
  const { removeItem } = useGlobalContext();
  return (
    <article className="relative flex flex-col gap-8 sm:gap-4 sm:flex-row items-center justify-between sm:pl-8 px-4 sm:pr-20 py-4 bg-purple-100 max-w-2xl mx-auto rounded-xl my-4 overflow-hidden">
      <div className="flex gap-8 items-center">
        <div className="max-w-[100px]">
          <img
            className="mix-blend-multiply"
            src={img}
            alt={`${title} Image`}
          />
        </div>
        <div className="font-medium text-lg tracking-wide">
          <p className="phone-title">{title}</p>
          <p>${price}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <div className="flex bg-purple-200 items-center rounded-full overflow-hidden border-2 border-purple-300">
          <Button
            RippleColor="rgb(147 51 234 / 0.4)"
            duration={350}
            className="p-1 border-white border-r-[1px] hover:bg-purple-300 hover:bg-opacity-50 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </Button>
          <p className="font-medium w-[4ch] text-center">{amount}</p>
          <Button
            RippleColor="rgb(147 51 234 / 0.4)"
            duration={350}
            className="p-1 border-white border-l-[1px] hover:bg-purple-300 hover:bg-opacity-40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </Button>
        </div>
        <div className="sm:hidden">
          <Button
            RippleColor="rgba(243, 113, 113, .5)"
            className="p-2 py-1 rounded-md text-sm font-medium transition-all duration-300 ease-in-out hover:bg-red-100 active:rounded-full text-red-500 "
          >
            Remove
          </Button>
        </div>
      </div>

      <Button
        onClick={()=> removeItem(id)}
        RippleColor="rgba(243, 113, 113, .5)"
        className="hidden sm:grid place-content-center bor absolute -right-1 top-0 h-full px-3 py-1 border-l-2 border-white text-lg font-medium transition-all duration-300 ease-in-out hover:bg-red-50 text-red-500 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Button>
    </article>
  );
}
