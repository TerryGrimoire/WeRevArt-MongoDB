/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

import Mail from "../images/mail.png";

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav_ul">
        <Link className="nav_link" to="/Project_Ads">
          Project Ads
        </Link>
        <Link className="nav_link" to="/Artists">
          Artists
        </Link>
        <Link className="nav_link" to="/Creations">
          Creations
        </Link>
        <Link className="nav_link" to="/Help">
          Help
        </Link>
        <Link to="/Contact_us">
          <img className="navMail" src={Mail} alt="logo mail" />
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
