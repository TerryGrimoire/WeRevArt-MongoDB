import React from "react";

import "../style/MyProfile.css";

function SoftwareUse({ soft, handleSoft }) {
  const mysoftwareUse = [
    "Harmony",
    "Maya",
    "TvPaint",
    "Blender",
    "Animate",
    "After Effects",
    "Lightroom",
    "Photoshop",
  ];
  return (
    <div className="postAnAd_container">
      {mysoftwareUse.map((softwares) => (
        <button
          onClick={() => handleSoft(softwares.id)}
          className={
            soft.includes(softwares.id)
              ? "button_style_paa2 yellow"
              : "button_style_paa empty_yellow"
          }
          type="button"
          key={softwares.id}
        >
          {softwares.software}
        </button>
      ))}
    </div>
  );
}

export default SoftwareUse;
