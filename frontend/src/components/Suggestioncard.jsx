import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../style/SuggestionCard.css";
import titleTextData from "../data/titleTextData";
import TitleText from "./TitleText";

import gifData from "../data/gifData";

function Suggestioncard() {
  return (
    <section className="suggestioncards-container">
      <TitleText titleTextData={titleTextData} />
      <div className="suggestioncard_container">
        <h2 className="suggestioncard_title">What you can do with your art</h2>
        <Carousel
          autoPlay
          infiniteLoop
          width="100%"
          showStatus={false}
          showIndicators={false}
          stopOnHover={false}
          interval="5000"
        >
          {gifData.map((gif) => (
            <div className="giphy_container">
              <div className="flex_container">
                <iframe
                  src={gif.src}
                  width={gif.width}
                  height="400"
                  frameBorder="0"
                  className="giphy-embed"
                  allowFullScreen
                  title={gif.title}
                />
                <p className="suggestioncard_description">{gif.description}</p>
              </div>
              <div className="giphy_hide" />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Suggestioncard;
