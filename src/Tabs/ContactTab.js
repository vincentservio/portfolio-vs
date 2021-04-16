import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileAlt, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {ContactPage} from "../Footer/ContactPage";
export const ContactTab = () => {
  const [isShown, setIsShown] = useState(false);

  const con = {
    email: {
      name: "Email Me Now!",
      icon: (
        <FontAwesomeIcon
          icon={faEnvelope}
          size="3x"
          color="rgb(219, 159, 159)"
        />
      ),
      link: "mailto:SoftwareSolutions@VincentServio.com",
    },
    linkendin: {
      name: "Connect With Me On Linkedin!",
      icon: (
        <FontAwesomeIcon
          // onClick={(window.location = "google.com")}
          icon={faLinkedin}
          size="3x"
          color="rgb(219, 159, 159)"
        />
      ),
      link: "https://www.linkedin.com/in/vincent-servio-086bbb87/",
    },
    github: {
      name: "Visit My GitHub Account ",
      icon: (
        <FontAwesomeIcon
          // onClick={(window.location = "google.com")}
          icon={faGithub}
          size="3x"
          color="rgb(219, 159, 159)"
        />
      ),
      link: "https://github.com/vincentservio",
    },
    twitter: {
      name: "Tweet Me!",
      icon: (
        <FontAwesomeIcon
          icon={faTwitter}
          size="3x"
          color="rgb(219, 159, 159)"
        />
      ),
      link: "https://twitter.com/vincentservio",
    },
    resume: {
      name: "Check Out My Resume",
      icon: (
        <FontAwesomeIcon
          icon={faFileAlt}
          size="3x"
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

    const handleMouseOver = () => {
      document.getElementById("a").innerHTML = `
      ${reach.name ? reach.name : ""}`;
    };
    return (
      <>
        <ContactPage
          key={i}
          icon={reach.icon}
          handleClick={clickHandle}
          handleMouseOver={handleMouseOver}
        />
      </>
    );
  });
  return (
    <div className="Contacts">
      {/* //   <div className="foot-text"></div>{" "} */}
      <center>
        <div id="a"></div>
        {reachme}© 2021 VincentServio.com, Copyright{" "}
      </center>
    </div>
  );
};
