import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ExportContextUser from "../../../context/UserContext";
import ProfileInformationNav from "../../../pages/Profile/ProfileNav";

function PersonalInformation() {
  const { user, handleUser } = useContext(ExportContextUser.UserContext);

  useEffect(() => {
    axios
      .get(`https://werevartserverapi.onrender.com/api/profiles/${user.id}`)
      .then((res) => handleUser(res.data))
      .catch((err) => console.error(err));
  }, [user]);

  return (
    <div className="container2">
      <section className="flex">
        <ProfileInformationNav />

        {user ? (
          <div className="personal-information-container">
            <h2> Personal Information </h2>
            <section>
              <p>firstname: {user.firstName}</p>
              <p>lastname: {user.lastName}</p>
              <p>username: {user.username}</p>
              <p>email address: {user.email}</p>
              <p>city: {user.city}</p>
              <p>postcode: {user.postcode}</p>
              <p>address: {user.adress}</p>
              <p>country: {user.country}</p>
            </section>
            <Link to="/MyProfile">
              <button type="button" className="button-style2 yellow">
                Edit Information
              </button>
            </Link>
          </div>
        ) : (
          <Link to="/MyProfile">
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
