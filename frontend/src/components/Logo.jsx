import React from "react";
import logo from "../images/logo.png";
import "../style/Logo.css";

function Logo() {
  return (
    <div>
      <img className="logo-img" src={logo} alt="logo" />
    </div>
  );
}

export default Logo;
