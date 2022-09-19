import React from "react";
import Button from "./Button";
import buttonData from "../data/buttonData";

function Buttons({ min, max }) {
  return (
    <div className="myAccount_buttons_container">
      {buttonData
        .filter((el) => el.id >= min && el.id <= max)
        .map((el) => (
          <Button buttonData={el} />
        ))}
    </div>
  );
}

export default Buttons;
