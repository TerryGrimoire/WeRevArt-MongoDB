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
        {artists ? (
          artists.map((artist) => (
            <ArtistCards artist={artist} key={artist.id} />
          ))
        ) : (
          <img
            src="https://media4.giphy.com/media/HiQK2oD5rHCMdq6EHX/giphy.gif?cid=ecf05e47tozp6fwxrqz5g205w0bazozuvahqeld4j2vc3vsj&rid=giphy.gif&ct=s"
            alt="loading circles"
            className="loading"
          />
        )}
      </div>
    </div>
  );
}

export default Artists;
