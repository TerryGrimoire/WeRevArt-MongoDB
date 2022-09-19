import React from "react";
import Checkboxes from "../../Checkboxes";

import checkboxesData from "../../../data/checkboxesData";

function NotificationsForm() {
  return (
    <div className="myAccount_checkboxes_container">
      {checkboxesData.map((el) => (
        <Checkboxes data={el} />
      ))}
    </div>
  );
}

export default NotificationsForm;
