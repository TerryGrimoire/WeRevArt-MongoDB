import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NotificationsInformation() {
  const [NotificationsData, setNotificationsData] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.BACKEND}/profiles`)
      .then((res) => {
        setNotificationsData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h3>Notifications information</h3>
      <p>{NotificationsData.companyname}</p>
      <p>{NotificationsData.registrationnumber}</p>
      <p>{NotificationsData.address}</p>
      <p>{NotificationsData.postcode}</p>
      <button
        type="button"
        className="button-style yellow"
        onClick={useNavigate("/profile/NotificationsForm")}
      >
        Modify
      </button>
    </div>
  );
}

export default NotificationsInformation;
