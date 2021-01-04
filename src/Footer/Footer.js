import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileAlt, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {Contact} from "./Contact";
export const Footer = () => {
  const [isShown, setIsShown] = useState(false);

  const con = {
    email: {
      icon: (
        <FontAwesomeIcon
          icon={faEnvelope}
          size="1x"
          color="rgb(219, 159, 159)"
        />
      ),
      link: "mailto:SoftwareSolutions@VincentServio.com",
    },
    linkendin: {
      icon: (
        <FontAwesomeIcon
          // onClick={(window.location = "google.com")}
          icon={faLinkedin}
          size="1x"
          color="rgb(219, 159, 159)"
        />
      ),
      link: "https://www.linkedin.com/in/vincent-servio-086bbb87/",
    },
    github: {
      icon: (
        <FontAwesomeIcon
          // onClick={(window.location = "google.com")}
          icon={faGithub}
          size="1x"
          color="rgb(219, 159, 159)"
        />
      ),
      link: "https://github.com/vincentservio",
    },
    twitter: {
      icon: (
        <FontAwesomeIcon
          icon={faTwitter}
          size="1x"
          color="rgb(219, 159, 159)"
        />
      ),
      link: "https://twitter.com/vincentservio",
    },
    resume: {
      icon: (
        <FontAwesomeIcon
          icon={faFileAlt}
          size="1x"
          color="rgb(219, 159, 159)"
        />
      ),
      link:
        "https://docs.google.com/document/d/1RhKaGjnxk97lfxkYpvTgEz-WrPU0vWapb02ltBDO-ng/edit?usp=sharing",
    },
  };

  const info = Object.values(con);
  const reachme = info.map((reach, i) => {
    const clickHandle = () => {
      return (
        <div
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          {window.open(reach.link, "_blank")}
        </div>
      );
    };
    return (
      <>
        <Contact key={i} icon={reach.icon} handleClick={clickHandle} />
      </>
    );
  });
  return (
    <div className="Footer">
      <div className="foot-text">{reachme}</div>{" "}
      <center className="copy">© 2021 VincentServio.com, Copyright </center>
    </div>
  );
};
