import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import ArtistCards from "../components/ArtistCards";
import ArtistFilter from "../components/Filters/Artists/ArtistFilter";
import MiniHeader from "../components/miniHeader";
/* CORRESPOND AU COMPONENT PROJECTAD */
function Artists() {
  const [filter, setFilter] = useState({
    likes: [],
    usertype: [],
    contracttype: [],
    skills: [],
  });

  const [ArtistCardViews, setArtistCardViews] = useState([]);

  useEffect(() => {
    let url = `${import.meta.env.VITE_BACKEND_URL}/digitalartists?limit=25`;
    if (filter.skills[0]) {
      url += `&skills=${filter.skills.join("|")}`;
    }
    if (filter.contracttype[0]) {
      url += `&contracttype=${filter.contracttype.join("|")}`;
    }
    if (filter.usertype[0]) {
      url += `&usertype=${filter.usertype.join("|")}`;
    }
    axios
      .get(url)
      .then((res) => {
        setArtistCardViews(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [filter]);

  return (
    <div>
      <Helmet>
        <title>We Rev&apos;Art | Artist </title>
      </Helmet>
      <MiniHeader index={1} />
      <ArtistFilter filter={filter} setFilter={setFilter} />
      <div className="artist_container_tot">
        {ArtistCardViews.map((ArtistCardView) => (
          <ArtistCards
            ArtistCardView={ArtistCardView}
            key={ArtistCardView.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Artists;
