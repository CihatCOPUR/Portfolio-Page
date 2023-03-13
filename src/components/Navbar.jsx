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
            <a href="#">About</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">Skills</a>
          </li>
          <li>
            {" "}
            <a href="#">Projects</a>
          </li>
          <li>
            {" "}
            <a href="#"></a> Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
