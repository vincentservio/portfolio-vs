import React, {useState, useEffect} from "react";
import "./Timeline.css";

export default function Timeline() {
  const [value, onChange] = useState(1);

  useEffect(() => {
    const ele = document.querySelector(".buble");
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
  });

  return (
    <div className="slider-parent Timeline">
      <input
        type="range"
        min="1"
        max="500"
        value={value}
        onChange={({target: {value: radius}}) => {
          onChange(radius);
        }}
      />
      <div className="buble">{value}</div>
    </div>
  );
}
