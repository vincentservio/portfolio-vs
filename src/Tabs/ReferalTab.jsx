import React from "react";
import classes from "./WaitList.module.css";
// import styled from "styled-components/native";

// const View = styled.View`
//   flex: 1;
//   background-color: white;
//   align-items: center;
//   justify-content: center;
// `;
// const Text = styled.Text`
//   font-size: 18px;
//   color: blue;
//   font-weight: 500;
// `;

export const ReferalTab = () => {
  return (
    <>
      <div className={classes.waitlist}>
        <div className={classes.container}>
          <div className={classes.heading}>Hello, Welcome to Vinc3nt</div>
          <div className={classes.content}></div>

          <form>
            <label>
              <input type="text" name="name" placeholder="Enter Your Email" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>

      <div className={classes.icons}>
        <img
          className={classes.icon}
          onClick={() =>
            window.open("https://twitter.com/uvuewofficial", "_blank")
          }
          src="/img/twitter-white.png"
          alt="twitter"
        ></img>
        <img
          className={classes.icon}
          src="/img/linkedin.png"
          alt="facebook"
        ></img>
      </div>
    </>
  );
};

export default ReferalTab;
