import React, {useState} from "react";

export const Contact = (props) => {
  //   props.map((prop) => <div className="contact"> {prop}</div>);

  // if (isShown === true) {
  //   debugger;

  return (
    <div className="contact" onClick={props.handleClick}>
      {props.icon}
    </div>
  );
};
