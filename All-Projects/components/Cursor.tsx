"use client";

import useMousePosition from "@/utils/useMousePosition";
import { motion } from "framer-motion";

export default function Cursor() {
  const { x, y } = useMousePosition();
  const size = 50;
  return (
    <motion.div
      className="fixed w-[50px] aspect-square rounded-full bg-white pointer-events-none hidden lg:block"
      animate={{ left: `${x - size / 2}px`, top: `${y - size / 2}px` }}
      transition={{ type: "tween", ease: "backOut" }}
    />
  );
}
