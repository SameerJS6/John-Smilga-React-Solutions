import React from "react";
import { useGlobalContext } from "../context/context";
import Animation from "./Gradient-Animation/Animation";
import Button from "./Elements/Button";
import PhoneImg from "../phone.svg";

export default function Hero() {
  const { CloseMenu } = useGlobalContext();
  return (
    <main
      onMouseOver={CloseMenu}
      className="grid min-h-screen place-content-center pt-16 sm:pt-40 py-8 xl:py-16 xl:pt-44"
    >
      <div className="grid sm:grid-cols-2 gap-12 sm:gap-4 px-8 sm:pr-0 lg:px-20 xl:px-32">
        <div className="space-y-12">
          <div className="relative">
            <h1 className="text-[#0A2540] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mix-blend-overlay">
              Payments infrastructure for the internet
            </h1>
            <span className="absolute left-0 top-0 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mix-blend-overlay">
              Payments infrastructure for the internet
            </span>
          </div>
          <p className="font-medium text-slate-500 text-sm md:text-base">
            Millions of businesses of all sizes—from startups to large
            enterprises—use Stripe’s software and APIs to accept payments, send
            payouts, and manage their businesses online.
          </p>
          <div className="items-center gap-4 flex text-sm sm:text-base">
            <Button
              content="Start now"
              className={
                "bg-[#0A2540] px-3 py-1 text-white hover:bg-opacity-90 hover:shadow-md"
              }
              duration={750}
            />
            <Button
              content="Contact sales"
              duration={700}
              className="px-3 py-1 text-[#0A2540] flex"
            />
          </div>
        </div>

        <div className="sm:ml-auto mx-auto hidden sm:block">
          <img src={PhoneImg} alt="An Image of Stripe's UI" />
        </div>
      </div>
      <Animation />
    </main>
  );
}
