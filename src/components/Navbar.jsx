import React from "react";
import Footer from "./Footer";
import Link from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="name"> -Cihat ÇOPUR- </div>
      <div className="menu">
        <ul>
          <li>
            {" "}
            <a href="About.jsx">About</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Skills</a>
          </li>
          <li>
            {" "}
            <a href="{Footer}">Projects</a>
          </li>
          <li>
            {" "}
            <a href=""></a> Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
