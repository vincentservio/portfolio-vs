import React, {useState} from "react";

export const ContactPage = (props) => {
  //   props.map((prop) => <div className="contact"> {prop}</div>);

  // if (isShown === true) {
  //   debugger;

  return (
    <div className="contactTab" onClick={props.handleClick}>
      {props.icon}
    </div>
  );
};
