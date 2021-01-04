import React, {Component} from "react";
import "./portfolio.css";
export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="Header">
          Vincent Servio
          <br />
          <div style={{fontSize: "3vw", color: "white", border: "0px"}}>
            Full Stack Engineer
          </div>
          <br />
        </div>
        <img
          style={{fontSize: "1px"}}
          src="https://imgur.com/0k0zGVe.jpg"
          alt="avi"
          className="avi"
        />
      </header>
    );
  }
}
