import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileAlt, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {Contact} from "../Footer/Contact";

export default function ContactTab() {
  return (
    <div className="App">
      <li>Email</li>
      <FontAwesomeIcon icon={faEnvelope} size="1x" color="rgb(219, 159, 159)" />
      <li>linkedin</li>
      <FontAwesomeIcon
        // onClick={(window.location = "google.com")}
        icon={faLinkedin}
        size="1x"
        color="rgb(219, 159, 159)"
      />
      <li>github</li>
      <FontAwesomeIcon
        // onClick={(window.location = "google.com")}
        icon={faGithub}
        size="1x"
        color="rgb(219, 159, 159)"
      />
      <li>Instagram</li>
      <li>Resume</li>
      <FontAwesomeIcon icon={faFileAlt} size="1x" color="rgb(219, 159, 159)" />
      <Contact />
    </div>
  );
}
