import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ExportContextUser from "../../../context/UserContext";
import ProfileInformationNav from "../../../pages/Profile/ProfileNav";

function MyProfileInformation() {
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
              <p>description: {userDisplay.description}</p>
              <section className="flex">
                <p>Skills</p>
                <ul className="flex flex-wrap">
                  {userDisplay && userDisplay.skills.length > 0 ? (
                    userDisplay.skills.map((skill) => (
                      <li> {`\u00a0${skill} |`}</li>
                    ))
                  ) : (
                    <li>No skills added</li>
                  )}
                </ul>
              </section>
              <section className="flex">
                <p>Softwares</p>
                <ul className="flex flex-wrap">
                  {userDisplay && userDisplay.softwares.length > 0 ? (
                    userDisplay.softwares.map((software) => (
                      <li>{`\u00a0${software} |`}</li>
                    ))
                  ) : (
                    <li>No softwares added</li>
                  )}
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
