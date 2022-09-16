import React from "react";
/* CORRESPOND AU COMPONENT NEWPROJECTS */
import "../style/ArtistCard.css";
import Likebutton from "./Likebutton";

function ArtistCards({ ArtistCardView }) {
  return (
    <section className="card_container" key={ArtistCardView.id}>
      <div>
        <div className="card-top">
          <img
            className="card-img-top"
            src={ArtistCardView.image}
            alt={ArtistCardView.alt}
          />
          <div className="card-identity">
            <h4 className="card-title">
              {ArtistCardView.firstname && ArtistCardView.firstname}
              {ArtistCardView.lastname && ArtistCardView.lastname}
            </h4>
          </div>
          <p className="card-text">
            {ArtistCardView.country && ArtistCardView.country}
          </p>
          <div className="card_map">
            {ArtistCardView.skills.map((skill) => (
              <ul className="skills_list" key={skill.id}>
                <li className="list-group-item">
                  {skill.skills && skill.skills}
                </li>
              </ul>
            ))}
            {ArtistCardView.contracttype.map((contract) => (
              <ul className="contracttype_list" key={contract.contracttype_id}>
                <li className="list-group-item">
                  {contract.contracttype && contract.contracttype}
                </li>
              </ul>
            ))}
            {ArtistCardView.usertype.map((usertypes) => (
              <ul className="contracttype_list" key={usertypes.usertype_id}>
                <li className="list-group-item">
                  {usertypes.usertype && usertypes.usertype}
                </li>
              </ul>
            ))}

            <p className="card-body">
              {" "}
              Description :
              {ArtistCardView.description && ArtistCardView.description}
            </p>
            <Likebutton />
          </div>
          <div />
        </div>
      </div>
    </section>
  );
}

export default ArtistCards;
