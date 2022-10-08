import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MyProfileInformation() {
  const [MyProfileData, setMyProfileData] = useState();

  useEffect(() => {
    axios
      .patch(`${import.meta.env.BACKEND}/profiles`)
      .then((res) => {
        setMyProfileData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h3>MyProfile information</h3>
      <p>{MyProfileData.companyname}</p>
      <p>{MyProfileData.registrationnumber}</p>
      <p>{MyProfileData.address}</p>
      <p>{MyProfileData.postcode}</p>
      <button
        type="button"
        className="button-style yellow"
        onClick={useNavigate("/profile/MyProfileForm")}
      >
        Modify
      </button>
    </div>
  );
}

export default MyProfileInformation;
