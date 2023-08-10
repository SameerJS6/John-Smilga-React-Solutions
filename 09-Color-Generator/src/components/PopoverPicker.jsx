import React, { useState, useRef } from "react";
import { HexColorPicker } from "react-colorful";
import useClickOutside from "../hook/useClickOutside";

export default function PopoverPicker({ color, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  let PickerRef = useRef();

  useClickOutside(PickerRef, () => setIsOpen(false));
  return (
    <div className="picker z-10">
      <div
        className="swatch"
        style={{ backgroundColor: color }}
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <div ref={PickerRef} className="popover">
          <HexColorPicker color={color} onChange={onChange} />
        </div>
      )}
    </div>
  );
}
