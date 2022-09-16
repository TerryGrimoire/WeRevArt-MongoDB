import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/PostAnAd.css";

function Skills({ skills, handleSkills }) {
  const [mySkill, setMySkill] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/skills `)
      .then((res) => {
        setMySkill(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
          {skill.skills}
        </button>
      ))}
    </div>
  );
}

export default Skills;
