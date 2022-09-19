import React from "react";

function BillingInformation({ billingData }) {
  /* useEffect(() => {
        axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/profile/billinginformation`, data)
      .then((res) => {
        setbillingData(res.data);
        navigate("/profile/billing");
      })
      .catch((err) => console.error(err));
    }, []) */
  return (
    <div>
      <h3>Billing information</h3>
      <p>{billingData.companyname}</p>
      <p>{billingData.registrationnumber}</p>
      <p>{billingData.address}</p>
      <p>{billingData.postcode}</p>
    </div>
  );
}

export default BillingInformation;
