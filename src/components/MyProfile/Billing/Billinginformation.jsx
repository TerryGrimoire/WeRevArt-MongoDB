import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExportContextUser from "../../../context/UserContext";
import ProfileInformationNav from "../../../pages/Profile/ProfileNav";

function BillingInformation() {
  const { user, handleUser } = useContext(ExportContextUser.UserContext);
  const [userDisplay, setUserDisplay] = useState();

  useEffect(() => {
    if (user.id) {
      axios
        .get(`https://werevartserverapi.onrender.com/api/profiles/${user.id}`)
        .then((res) => setUserDisplay(res.data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  useEffect(() => {
    if (userDisplay) {
      handleUser(userDisplay);
    }
  }, []);

  return (
    <section className="flex">
      <ProfileInformationNav />
      <div>
        <h3>Billing information</h3>
        {userDisplay && userDisplay.company ? (
          <div>
            <p> Company name: {userDisplay.company.companyname}</p>
            <p>
              Company registration number:
              {userDisplay.company.companyregistrationnumber}
            </p>
            <p>
              Company country: {userDisplay.company.companyregistrationcountry}
            </p>
            <p> Company address: {userDisplay.company.companyaddress}</p>
            <p> Company post code: {userDisplay.company.companypostcode}</p>
            <p> Company city: {userDisplay.company.companypostcity}</p>
            <Link to="/profile/billingForm">
              <button type="button" className="button-style2 yellow">
                Edit Information
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <h3>No company information</h3>
            <Link to="/profile/billingForm">
              <button type="button" className="button-style2 yellow">
                Add now
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default BillingInformation;
