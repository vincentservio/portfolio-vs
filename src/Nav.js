import React from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
export const Nav = () => {
  return (
    <div className="Nav">
      <Link to="/">Home</Link>
      <HashLink
        to="/About"
        activeClassName="selected"
        scroll={(el) => el.scrollIntoView({behavior: "instant", block: "end"})}
      >
        About
      </HashLink>
      <Link to="/Contact">Contact</Link>
      <Link to="/Projects">Projects</Link>
    </div>
  );
};
