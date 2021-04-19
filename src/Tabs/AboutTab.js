import React from "react";
import {Link} from "react-scroll";
import {Languages} from "../Skills/Languages";

function AboutTab() {
  return (
    <div className="App">
      <Link
        to="/About"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        About
      </Link>
      {/* {document.getElementsByClassName("App").scrollIntoView()}{" "} */}
      <h1>About Vincent Servio</h1>
      As a driven, hardworking young man starting my coding career, I know that
      I can positively impact Nike's goals in the Software Engineering role. I
      graduated from Flatiron School with a certificate in Web development and
      software engineering My career goals align perfectly with your
      organization and are bound for success. I aspire to be a leader in
      technology and offer great strengths in leadership, critical thinking and
      collaborative team work. Clear and focused on progress and forward motion,
      <center>
        <Languages></Languages>
      </center>
      <div class="cardTop">
        <svg
          width="497"
          height="219"
          viewBox="0 0 497 219"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M-38.5 196C-38.5 196 34 91 133.5 91C233 91 427 159 532.5 30C638 -99 518 236 518 236L-49 246.5L-38.5 196Z"
            fill="#FF768E"
          />
        </svg>
      </div>
      <div class="timeline">
        <h3>Updates</h3>
        <label>23 in the last 7 hours</label>

        <div class="box">
          <div class="container">
            <div class="lines">
              <div class="dot"></div>
              <div class="line"></div>
              <div class="dot"></div>
              <div class="line"></div>
              <div class="dot"></div>
              <div class="line"></div>
            </div>

            <div class="cards">
              <div class="card">
                <h4>16:30</h4>
                <p>
                  Believing Is The Absence
                  <br /> Of Doubt
                </p>
              </div>
              <div class="card mid">
                <h4>15:22</h4>
                <p>Start With A Baseline</p>
              </div>
              <div class="card">
                <h4>14:15</h4>
                <p>
                  Break Through Self Doubt
                  <br /> And Fear
                </p>
              </div>
            </div>
          </div>

          <div class="bottom">
            <div class="btn">Show all updates</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutTab;
