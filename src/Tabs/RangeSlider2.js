import React, {memo, useState, useEffect} from "react";
import {render} from "react-dom";

const RangeSlider2 = memo(
  ({classes, label, onChange, value, ...sliderProps2}) => {
    const [sliderVal2, setSliderVal2] = useState(0);
    const [mouseState, setMouseState] = useState(null);

    useEffect(() => {
      setSliderVal2(value);
    }, [value]);

    const changeCallback = (e) => {
      setSliderVal2(e.target.value);
    };

    useEffect(() => {
      if (mouseState === "up") {
        onChange(sliderVal2);
      }
    }, [mouseState]);
    console.log("RENDER");
    return (
      <div className="range-slider">
        <p>{label}</p>
        <h3>value: {sliderVal2}</h3>
        <input
          type="range"
          value={sliderVal2}
          {...sliderProps2}
          className={`slider ${classes}`}
          id="myRange"
          onChange={changeCallback}
          onMouseDown={() => setMouseState("down")}
          onMouseUp={() => setMouseState("up")}
        />
      </div>
    );
  }
);

export default RangeSlider2;
