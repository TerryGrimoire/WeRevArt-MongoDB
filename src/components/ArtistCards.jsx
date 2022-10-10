import React from "react";
/* CORRESPOND AU COMPONENT NEWPROJECTS */
import "../style/ArtistCard.css";
import Likebutton from "./Likebutton";

function ArtistCards({ artist }) {
  return (
    <section className="card_container" key={artist.id}>
      <div>
        <div className="card-top">
          <img
            className="card-img-top"
            src={`https://ui-avatars.com/api/?name=${artist.firstname}+${artist.lastname}`}
            alt={artist.alt}
          />
          <div className="card-identity">
            <h4 className="card-title">
              {`${artist.firstname} ${artist.lastname}`}
            </h4>
            <h5>{artist.type}</h5>
          </div>
          <p className="card-text">{artist.country}</p>
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
