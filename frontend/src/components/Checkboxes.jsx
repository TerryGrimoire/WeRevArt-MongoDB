import React from "react";

function Checkboxes({ data }) {
  return (
    <div className="checkbox_container">
      <input type="checkbox" />
      <p>{data.text}</p>
    </div>
  );
}

export default Checkboxes;
