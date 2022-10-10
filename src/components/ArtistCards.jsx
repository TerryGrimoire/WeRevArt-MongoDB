import React from "react";
/* CORRESPOND AU COMPONENT NEWPROJECTS */
import "../style/ArtistCard.css";
import Likebutton from "./Likebutton";

function ArtistCards({ artist }) {
  return (
    <section className="card_container" key={artist.id}>
      <div>
        <div className="card-top">
          <div className="top-container">
            <img
              className="card-img-top"
              src={`https://ui-avatars.com/api/?name=${artist.firstname}+${artist.lastname}`}
              alt={artist.alt}
            />
            <h4 className="card-title">
              {`${artist.firstname} ${artist.lastname}`}
            </h4>
            <h5>{artist.country}</h5>
          </div>
          <small>{artist.type}</small>
          <div className="card_map">
            <p className="card-body">Description :{artist.description}</p>
            <section>
              <h5>skills:</h5>
              {artist.skills.map((skill) => (
                <ul className="skills_list">
                  <li>
                    <small>{skill}</small>
                  </li>
                </ul>
              ))}
            </section>
            <section>
              <h5>sotfwares:</h5>
              {artist.softwares.map((skill) => (
                <ul className="skills_list">
                  <li>
                    <small>{skill}</small>
                  </li>
                </ul>
              ))}
            </section>
            <Likebutton />
          </div>
          <div />
        </div>
      </div>
    </section>
  );
}

export default ArtistCards;
