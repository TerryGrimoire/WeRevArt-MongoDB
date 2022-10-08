import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ExportContextUser from "../../../context/UserContext";

function PersonalInformation() {
  const { user } = useContext(ExportContextUser.UserContext);
  return (
    <div>
      <h3>Personal information</h3>

      {user.firstName ? (
        <div>
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>●●●●●●●●●●●●●●●●●</p>
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
    </div>
  );
}

export default PersonalInformation;
