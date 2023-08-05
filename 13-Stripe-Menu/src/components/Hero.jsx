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
      className="grid min-h-screen place-content-center py-8 pt-16 sm:pt-40 xl:py-16 xl:pt-44"
    >
      <div className="slide-in-bottom grid gap-12 px-8 sm:grid-cols-2 sm:gap-4 sm:pr-0 lg:px-20 xl:px-32">
        <div className="space-y-12">
          <div className="relative">
            <h1 className="text-4xl font-bold text-[#0A2540] mix-blend-overlay sm:text-5xl lg:text-6xl xl:text-7xl">
              Payments infrastructure for the internet
            </h1>
            <span className="absolute left-0 top-0 text-4xl font-bold mix-blend-overlay sm:text-5xl lg:text-6xl xl:text-7xl">
              Payments infrastructure for the internet
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500 md:text-base">
            Millions of businesses of all sizes—from startups to large
            enterprises—use Stripe’s software and APIs to accept payments, send
            payouts, and manage their businesses online.
          </p>
          <div className="flex items-center gap-4 text-sm sm:text-base">
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
              className="flex px-3 py-1 text-[#0A2540]"
            />
          </div>
        </div>

        <div className="mx-auto hidden sm:ml-auto sm:block">
          <img src={PhoneImg} alt="An Image of Stripe's UI" />
        </div>
      </div>
      <Animation />
    </main>
  );
}
