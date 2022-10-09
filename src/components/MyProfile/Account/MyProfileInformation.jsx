import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ExportContextUser from "../../../context/UserContext";
import ProfileInformationNav from "../../../pages/Profile/ProfileNav";

function MyProfileInformation() {
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
              <p>description: {user.description}</p>
              <section className="flex">
                <p>Skills</p>
                <ul>
                  {user && user.skills.length > 0 ? (
                    user.skills.map((skill) => <li>{skill}</li>)
                  ) : (
                    <li>No skills added</li>
                  )}
                </ul>
              </section>
              <section className="flex">
                <p>Softwares</p>
                <ul>
                  {/* user && user.softwares.length > 0 ? (
                    user.softwares.map((software) => <li>{software}</li>)
                  ) : (
                    <li>No softwares added</li>
                  ) */}
                  404
                </ul>
              </section>
            </section>
            <Link to="/profile/ProfileForm">
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

export default MyProfileInformation;
