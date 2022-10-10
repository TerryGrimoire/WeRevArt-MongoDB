import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExportContextUser from "../../../context/UserContext";
import ProfileInformationNav from "../../../pages/Profile/ProfileNav";

function PersonalInformation() {
  const { user, handleUser } = useContext(ExportContextUser.UserContext);
  const [userDisplay, setUserDisplay] = useState();

  const getData = () => {
    axios
      .get(`https://werevartserverapi.onrender.com/api/profiles/${user.id}`)
      .then((response) => setUserDisplay(response.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getData();
  }, [user]);

  useEffect(() => {
    handleUser(userDisplay);
  }, []);

  return (
    <div className="container2">
      <section className="flex">
        <ProfileInformationNav />

        {userDisplay ? (
          <div className="personal-information-container">
            <h2> Personal Information </h2>
            <section>
              <p>firstname: {userDisplay.firstname}</p>
              <p>lastname: {userDisplay.lastname}</p>
              <p>username: {userDisplay.username}</p>
              <p>email address: {userDisplay.email}</p>
              <p>city: {userDisplay.city}</p>
              <p>postcode: {userDisplay.postcode}</p>
              <p>address: {userDisplay.address}</p>
              <p>country: {userDisplay.country}</p>
            </section>
            <Link to="/profile/personalForm">
              <button type="button" className="button-style2 yellow">
                Edit Information
              </button>
            </Link>
          </div>
        ) : (
          <Link to="/profile/personalForm">
            <button type="button" className="button-style3 yellow">
              Complete your profile
            </button>
          </Link>
        )}
      </section>
    </div>
  );
}

export default PersonalInformation;
