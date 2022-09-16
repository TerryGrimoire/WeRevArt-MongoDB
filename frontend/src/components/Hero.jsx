import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ExportContextUser from "../context/UserContext";
import images from "../data/HomeImagesData";

import "../style/Hero.css";

function Hero() {
  const { user } = useContext(ExportContextUser.UserContext);
  return (
    <section className="hero-container">
      <section className="hero-text">
        <h1 className="hero-h1">Find a digital artist to animate your art </h1>
        <p className="hero-p">
          Publish your project for free and work with motion, 2D, 3D, XR artists
          to give a new digital life to your physical artwork.
        </p>
        <Link
          to={user !== null ? "/Post_An_Ad" : "/Register"}
          className="button-container"
        >
          <button type="button" className="button-style yellow">
            Animate your art now
          </button>
        </Link>
      </section>
      <section className="section_carousel">
        <Carousel
          autoPlay
          infiniteLoop
          width="80%"
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval="5000"
          stopOnHover={false}
          axis="vertical"
        >
          {images.map((image) => (
            <div key={image.id}>
              <img
                src={image.src}
                alt={image.alt}
                className="hero-img"
                id="image_carousel"
              />
            </div>
          ))}
        </Carousel>
      </section>
    </section>
  );
}

export default Hero;
