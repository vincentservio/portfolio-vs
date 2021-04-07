import React from "react";
import {Link} from "react-router-dom";
// import {Link} from "react-scroll";

export const Nav = () => {
  return (
    <div className="Nav">
      <Link
        to="/"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Home
      </Link>
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
      <Link
        to="/Contact"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Contact
      </Link>
      <Link
        to="/Projects"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Projects
      </Link>
    </div>
  );
};
