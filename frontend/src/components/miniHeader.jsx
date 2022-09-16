import React from "react";
import miniHeaderData from "../data/miniHeaderData";
import "../style/miniHeader.css";

function MiniHeader({ index }) {
  return (
    <section className="miniHeader-container">
      <h2> {miniHeaderData[index].title} </h2>
      {miniHeaderData[index].text ? <p> {miniHeaderData[index].text} </p> : ""}
    </section>
  );
}

export default MiniHeader;
