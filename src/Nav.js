import React from "react";
import {Link} from "react-router-dom";

export const Nav = () => {
  return (
    <div className="Nav">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Projects">Projects</Link>
    </div>
  );
};
