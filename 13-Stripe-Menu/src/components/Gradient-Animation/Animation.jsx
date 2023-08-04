import React, { useRef, useEffect, useState } from "react";

export default function Animation() {
  const canvasRef = useRef(null);
  const [t, setT] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const col = (x, y, r, g, b) => {
      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.fillRect(x, y, 1, 1);
    };

    const R = (x, y, t) => {
      return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
    };

    const G = (x, y, t) => {
      return Math.floor(
        192 +
          64 *
            Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
      );
    };

    const B = (x, y, t) => {
      return Math.floor(
        192 +
          64 *
            Math.sin(
              5 * Math.sin(t / 9) +
                ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
            )
      );
    };

    const run = () => {
      for (let x = 0; x <= 35; x++) {
        for (let y = 0; y <= 35; y++) {
          col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        }
      }
      setT((prevT) => prevT + 0.02);
    };

    // Start the animation
    const animationFrameId = requestAnimationFrame(run);

    // Clean up the animation frame when the component unmounts
    return () => cancelAnimationFrame(animationFrameId);
  }, [t]);

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} width={36} height={36}></canvas>
    </div>
  );
}
