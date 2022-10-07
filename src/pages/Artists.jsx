import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import ArtistCards from "../components/ArtistCards";
import MiniHeader from "../components/miniHeader";
/* CORRESPOND AU COMPONENT PROJECTAD */
function Artists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios
      .get("https://werevartserverapi.onrender.com/api/profiles")
      .then((response) => setArtists(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Helmet>
        <title>We Rev&apos;Art | Artist </title>
      </Helmet>
      <MiniHeader index={1} />
      <div className="artist_container_tot">
        {artists.map((artist) => (
          <ArtistCards artist={artist} key={artist.id} />
        ))}
      </div>
    </div>
  );
}

export default Artists;
