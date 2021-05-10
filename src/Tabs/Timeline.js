import React, {useState, useEffect} from "react";
import "./Timeline.css";

export default function Timeline() {
  const [value, onChange] = useState(1);
  const [value2, onChange2] = useState(1);
  // const [value2, onChange2] = useState(1);

  useEffect(() => {
    const ele = document.querySelector(".buble");
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
  });

  return (
    <>
      {" "}
      {value}
      <div className="slider-parent Timeline">
        <input
          type="range"
          min="1"
          max="100"
          value={value}
          onChange={({target: {value: num}}) => {
            onChange(num);
          }}
        />
      </div>
      <div> {value2}</div>
      <div className="slider-parent2 Timeline">
        <input
          type="range"
          min="1"
          max="500"
          step=".25"
          value={value2}
          onChange={({target: {value: num}}) => {
            onChange2(num);
          }}
        />

        {/* <input
        type="range"
        min="1"
        max="500"
        value={value2}
        onChange={({target: {value2: radius}}) => {
          onChange2(radius);
        }}
      /> */}
        {/* <div className="buble">{value2}</div> */}
      </div>
      <div className="buble">{value}</div>
      <div className="estimate">
        You could earn between ${parseFloat(value) + parseFloat(value2)} and
        $129,600 per month*
      </div>
    </>
  );
}
