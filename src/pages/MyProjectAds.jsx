import React from "react";
import { Helmet } from "react-helmet-async";
import MiniHeader from "../components/miniHeader";

function MyProjectAds() {
  return (
    <div>
      <Helmet>
        <title>We Rev&apos;Art | MyProjects </title>
      </Helmet>
      <MiniHeader index={6} />
      <h1>Mettre en place le formulaire de creation/update ads</h1>
    </div>
  );
}

export default MyProjectAds;
