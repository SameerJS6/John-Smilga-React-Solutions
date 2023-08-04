import React from "react";
import useRipple from "use-ripple-hook";
import { useGlobalContext } from "../context/context";
import Animation from "./Gradient-Animation/Animation";

export default function Hero() {
  const [ripple, event] = useRipple({ color: "#0000001a", duration: 700 });
  const { CloseMenu } = useGlobalContext();
  return (
    <main onMouseOver={CloseMenu} className="">
      <h1>Payments infrastructure for the internet</h1>
      <p>
        Millions of businesses of all sizes—from startups to large
        enterprises—use Stripe’s software and APIs to accept payments, send
        payouts, and manage their businesses online.
      </p>
      <button ref={ripple} onMouseDown={event}>
        Click Me
      </button>
      <Animation />
    </main>
  );
}
