import React from "react";
import creationsData from "../data/Creations";

import "../style/CreationCards.css";

function CreationCards() {
  return (
    <div className="card-group2">
      {creationsData.map((creation) => (
        <div className="card">
          <div className="flex">
            <img
              className="card-img-top"
              src={creation.traditionalprofil}
              alt="traditional art"
            />
            <img
              className="card-img-top img-top2"
              src={creation.digitalprofil}
              alt="traditional art"
            />
          </div>

          <div className="card-body">
            <h5 className="card-creation-title">{creation.title}</h5>
            <div className="card_footer_img">
              <img
                className="card_footer_img"
                src={creation.creation}
                alt="traditional art"
              />
            </div>
            <p className="card-creation-text">{creation.text}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              Last updated {creation.update} ago
            </small>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CreationCards;
