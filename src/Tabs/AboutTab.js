import React from "react";
import "../port.scss";
// import "./App.css";
import {Link} from "react-scroll";
import {Languages} from "../Skills/Languages";
import Timeline from "./Timeline";

function AboutTab() {
  return (
    <div className="App">
      {/* About */}

      {/* {document.getElementsByClassName("App").scrollIntoView()}{" "} */}
      {/* <h1>About Vincent Servio</h1>
      As a driven, hardworking young man starting my coding career, I know that
      I can positively impact Nike's goals in the Software Engineering role. I
      graduated from Flatiron School with a certificate in Web development and
      software engineering My career goals align perfectly with your
      organization and are bound for success. I aspire to be a leader in
      technology and offer great strengths in leadership, critical thinking and
      collaborative team work. Clear and focused on progress and forward motion,
      <center> */}
      {/* <Languages></Languages> */}
      <Timeline></Timeline>
      {/* <Timeline></Timeline> */}
      {/* </center> */}
    </div>
  );
}
export default AboutTab;
