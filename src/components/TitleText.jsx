import React from "react";
import "../style/TitleText.css";

function TitleText({ titleTextData }) {
  return (
    <section className="titleText-container">
      {titleTextData.map((data) => (
        <section key={data.id} className="titleText-element">
          {data.number ? (
            <p className="titleText-number"> {data.number} </p>
          ) : (
            ""
          )}
          <div>
            <h3> {data.title} </h3>
            <p className="dataText-p"> {data.text} </p>
          </div>
        </section>
      ))}
    </section>
  );
}

export default TitleText;
