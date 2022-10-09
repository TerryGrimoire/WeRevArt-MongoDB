import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function BillingInformation() {
  const [billingData, setBillingData] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/profiles`)
      .then((res) => {
        setBillingData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h3>Billing information</h3>
      <p>{billingData.companyname}</p>
      <p>{billingData.companyregistrationnumber}</p>
      <p>{billingData.companyregistrationcountry}</p>
      <p>{billingData.companyaddress}</p>
      <p>{billingData.companypostcode}</p>
      <p>{billingData.companycity}</p>
      <button
        type="button"
        className="button-style yellow"
        onClick={useNavigate("/profile/billingForm")}
      >
        Modify
      </button>
    </div>
  );
}

export default BillingInformation;
