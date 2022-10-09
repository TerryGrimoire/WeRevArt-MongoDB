import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ExportContextUser from "../../../context/UserContext";
import ProfileInformationNav from "../../../pages/Profile/ProfileNav";

function BillingInformation() {
  const { user, handleUser } = useContext(ExportContextUser.UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://werevartserverapi.onrender.com/api/profiles/${user.id}`)
      .then((res) => handleUser(res.data))
      .catch((err) => console.error(err));
    if (!user.company) {
      navigate("/Register");
    }
  }, [user]);

  return (
    <section className="flex">
      <ProfileInformationNav />
      <div>
        <h3>Billing information</h3>
        {user.company ? (
          <div>
            <p>{user.companyname}</p>
            <p>{user.companyregistrationnumber}</p>
            <p>{user.companyregistrationcountry}</p>
            <p>{user.companyaddress}</p>
            <p>{user.companypostcode}</p>
            <p>{user.companycity}</p>
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
