import React from "react";
import { Helmet } from "react-helmet-async";
import CreationCards from "../components/CreationCards";
import MiniHeader from "../components/miniHeader";

function Creations() {
  return (
    <div>
      <Helmet>
        <title>We Rev&apos;Art | Creations </title>
      </Helmet>
      <MiniHeader index={2} />
      <CreationCards />
    </div>
  );
}

export default Creations;
