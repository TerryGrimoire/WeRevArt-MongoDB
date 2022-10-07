import React from "react";
import "../style/cardProject.css";

function NewProject({ project }) {
  return (
    <div className="cardProject_card">
      <div className="cardProject_spec">
        <h3>
          {project.title}
          <span className="cardProject_small">{project.timeframe}</span>
        </h3>
        <p className="cardProject_modalities">
          Technique :
          {project.techniques.map((tech, index) => (
            <span key={project.techniques[index]}>{tech}</span>
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
