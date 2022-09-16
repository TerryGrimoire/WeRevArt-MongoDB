import React from "react";
import "../style/button.css";
import MyCreationUpload from "./MyCreationUpload";

function MyCreationsModal() {
  return (
    <div>
      <h1>My Creations On werevart</h1>
      <div className="" />
      <MyCreationUpload />
      <div className="my_creation_allbtn">
        <button type="button" className="my_creation_savebtn">
          SAVE
        </button>
        <button type="button" className="my_creation_modifybtn">
          REMOVE
        </button>
      </div>
    </div>
  );
}

export default MyCreationsModal;
