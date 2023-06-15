import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

export default function PopoverPicker({ color, onChange }) {
  const [isOpen, toggle] = useState(false);
  return (
    <div className="picker z-10">
      <div
        className="swatch"
        style={{ backgroundColor: color }}
        onClick={() => toggle(!isOpen)}
      />

      {isOpen && (
        <div className="popover">
          <HexColorPicker color={color} onChange={onChange} />
        </div>
      )}
    </div>
  );
}
