import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <ul>
        <li>
          <img src={logo} alt="#" />
        </li>
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          Home
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/recipes">
          Recipes
        </Link>
      </ul>
    </div>
  );
};

export default Header;
