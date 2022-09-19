import React from "react";
/* CORRESPOND AU COMPONENT NEWPROJECTS */
import "../style/ArtistCard.css";
import Likebutton from "./Likebutton";

function ArtistCards({ artist }) {
  return (
    <section className="card_container" key={artist.id}>
      <div>
        <div className="card-top">
          <img className="card-img-top" src={artist.src} alt={artist.alt} />
          <div className="card-identity">
            <h4 className="card-title">
              {`${artist.firstName} ${artist.lastName}`}
            </h4>
            <h5>{artist.type}</h5>
          </div>
          <p className="card-text">{artist.country}</p>
          <div className="card_map">
            {artist.skills.map((skill) => (
              <ul className="skills_list">
                <li className="list-group-item">{skill}</li>
              </ul>
            ))}
            <p className="card-body">Description :{artist.description}</p>
            <Likebutton />
          </div>
          <div />
        </div>
      </div>
    </section>
  );
}

export default ArtistCards;
