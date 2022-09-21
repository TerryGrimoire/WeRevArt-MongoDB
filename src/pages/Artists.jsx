import React, { useState, useEffect } from "react";
import * as Realm from "realm-web";
import { Helmet } from "react-helmet-async";
import ArtistCards from "../components/ArtistCards";
import MiniHeader from "../components/miniHeader";
/* CORRESPOND AU COMPONENT PROJECTAD */
function Artists() {
  const [artists, setArtists] = useState([]);

  const getAll = async () => {
    const app = new Realm.App({ id: "werevart-wcoow" });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const allArtists = await user.functions.getAllArtists();
      setArtists(allArtists);
    } catch (err) {
      console.error("Failed to log in", err);
    }
  };

  useEffect(() => {
    getAll();
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
