import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ExportContextUser from "../context/UserContext";
import Logo from "../images/logo.png";
import Nav from "./Nav";
import Register from "./Register";
import Button from "./Button";
import buttonData from "../data/buttonData";
import "../style/Header.css";
import "../style/Logo.css";

function Header() {
  const { user } = useContext(ExportContextUser.UserContext);

  return (
    <section className="header-container">
      <Link to="/">
        <img className="logo" src={Logo} alt="logo" />
      </Link>
      <Nav />
      <Link
        to={user !== null ? "/Post_An_Ad" : "/Register"}
        className="button-container"
      >
        <Button buttonData={buttonData[0]} />
      </Link>
      <Register />
    </section>
  );
}

export default Header;
