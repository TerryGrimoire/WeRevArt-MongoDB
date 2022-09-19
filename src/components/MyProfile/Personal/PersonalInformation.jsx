import React from "react";

function PersonalInformation({ personalData }) {
  /* useEffect(() => {
        axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/profile/personalinformation`, data)
      .then((res) => {
        setPersonalData(res.data);
        navigate("/profile/personal");
      })
      .catch((err) => console.error(err));
    }, []) */
  return (
    <div>
      <h3>Personal information</h3>
      <p>{personalData.firstname}</p>
      <p>{personalData.lastname}</p>
      <p>{personalData.username}</p>
      <p>{personalData.email}</p>
      <p>●●●●●●●●●●●●●●●●●</p>
    </div>
  );
}

export default PersonalInformation;
