"use client";

import useMousePosition from "@/utils/useMousePosition";
import { motion } from "framer-motion";

export default function Cursor() {
  const { x, y } = useMousePosition();
  const size = 50;
  return (
    <motion.div
      className="fixed w-[50px] aspect-square rounded-full pointer-events-none hidden lg:block bg-white z-10"
      animate={{ left: `${x - size / 2}px`, top: `${y - size / 2}px` }}
      transition={{ type: "tween", ease: "backOut" }}
    />
  );
}
