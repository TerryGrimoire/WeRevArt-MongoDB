import React from "react";
import "../style/cardProject.css";

function NewProject({ project }) {
  return (
    <div className="cardProject_card" key={project.description}>
      <div className="cardProject_spec">
        <h3>
          {project.title}
          <span className="cardProject_small">{project.timeframe}</span>
        </h3>
        <p className="cardProject_modalities">
          Technique :
          {project.techniques.map((tech) => (
            <p>{tech}</p>
          ))}
          Budget : {project.contract}
        </p>
        <p className="cardProject_details">
          Details of ad : {project.description}
        </p>
      </div>
      <div>
        <img
          className="cardProject_imageCardProject"
          src={project.src}
          alt={project.alt}
        />
      </div>
    </div>
  );
}

export default NewProject;
