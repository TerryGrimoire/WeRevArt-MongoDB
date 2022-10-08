import React from "react";
import "../style/PostAnAd.css";

function Skills({ skills, handleSkills }) {
  const mySkill = ["Motion", "VR", "3D", "Painting", "Photography"];
  return (
    <div className="postAnAd_container">
      {mySkill.map((skill) => (
        <button
          onClick={() => handleSkills(skill.id)}
          className={
            skills.includes(skill.id)
              ? "button_style_paa2 yellow"
              : "button_style_paa empty_yellow"
          }
          type="button"
          key={skill.id}
        >
          {skill}
        </button>
      ))}
    </div>
  );
}

export default Skills;
