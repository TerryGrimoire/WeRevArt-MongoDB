import React from "react";
import { Link } from "react-router-dom";

import iterra from "../images/logo_iterra.png";
import plaines from "../images/logo_plaines_image.png";
import instagram from "../images/insta.png";
import facebook from "../images/face.png";
import discord from "../images/disc.png";

import "../style/Footer.css";

function Footer() {
  return (
    <footer>
      <section className="footer-section1">
        <p className="footer-text">
          WE REV’ART is a networking platform allowing traditional artists,
          museums, galleries, collectors and art lovers to collaborate with
          motion, 2D, 3D artists and designers to create new hybrid digital
          works from their physical artworks.
        </p>
        <div className="footer-links">
          <Link to="/">HOW IT WORKS</Link>
          <Link to="/">OUR PRICES</Link>
          <Link to="aboutus">ABOUT US</Link>
        </div>
        <div className="footer-links">
          <Link to="/">BLOG</Link>
          <Link to="/">FORUM</Link>
        </div>

        <div>
          <p>Connect with us : </p>
          <div>
            <img
              className="footer-socialmedia"
              src={instagram}
              alt="Instagram"
            />
            <img className="footer-socialmedia" src={discord} alt="Discord" />
            <img className="footer-socialmedia" src={facebook} alt="Facebook" />
          </div>
          <p>alex@werevart.com</p>
        </div>
      </section>

      <section className="footer-section2">
        <p>
          © 2022. Powered with love by WE REV&apos;ART. All copyrights reserved.
        </p>
        <ul className="footer-ul">
          <Link to="/">
            <li> Privacy Policy |</li>
          </Link>
          <Link to="/">
            <li> Terms and conditions |</li>
          </Link>
          <Link to="/">
            <li> Disclaimer </li>
          </Link>
        </ul>
        <div>
          <p>Supported by:</p>
          <img className="footer-supporters" src={plaines} alt="logo plaine" />
          <img className="footer-supporters" src={iterra} alt="logo iterra" />
        </div>
      </section>
    </footer>
  );
}

export default Footer;
