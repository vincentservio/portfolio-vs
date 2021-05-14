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
      {/* {value} */}
      <div className="slider-parent">
        <input
          type="range"
          min="0000"
          max="1000000"
          step="1000"
          value={value}
          onChange={({target: {value: num}}) => {
            onChange(num);
          }}
        />
        <div className="buble">{value}</div>
        <br />
      </div>
      {/* <div> {value2}</div> */}
      <div className="slider-parent">
        <input
          type="range"
          min="4.99"
          max="49.99"
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
      <div>{value2}</div>
      <div className="estimate">
        You could earn between $
        {Math.floor((parseFloat(value) / 100) * parseFloat(value2))
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
        and ${" "}
        {Math.floor((parseFloat(value) / 20) * parseFloat(value2))
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
        per month*
      </div>
      hello
    </>
  );
}
