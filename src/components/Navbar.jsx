import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className="links" to={"/list"}>
        LIST
      </NavLink>
      <NavLink className="links" to={"/details"}>
        Detailed View
      </NavLink>
    </div>
  );
};

export default Navbar;
