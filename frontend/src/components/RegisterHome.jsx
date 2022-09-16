import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ExportContextUser from "../context/UserContext";
import Checklist from "./Checklist";

import "../style/cardProject.css";

function RegisterHome() {
  const { user } = useContext(ExportContextUser.UserContext);
  return (
    <section className="registerAlignement">
      <div className="registerHome">
        <h3>ARE YOU A DIGITAL ARTIST ?</h3>
        <br />
        <p className="registerHomeForFree">
          register for free <br /> to find animation offers
        </p>
        <br />
        <Link
          to={user !== null ? "/Post_An_Ad" : "/Register"}
          className="button-container"
        >
          <button className="cardProject_registerButton" type="button">
            CREATE YOUR PORTFOLIO
          </button>
        </Link>
        <br />
        <br />
        <h3>WHY REGISTER ?</h3>
        <div className="cardProject_checklist">
          <Checklist index={3} />
        </div>
      </div>
    </section>
  );
}

export default RegisterHome;
