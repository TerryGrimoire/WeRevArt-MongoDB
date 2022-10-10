import React, { useEffect, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import ExportContextUser from "../../../context/UserContext";

import "../../../style/MyAccount.css";

function PersonalForm() {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const { user, handleUser } = useContext(ExportContextUser.UserContext);
  const [userProfile, setUserProfile] = useState();

  const onSubmit = (data) => {
    const profile = { ...data };
    axios
      .patch(
        `https://werevartserverapi.onrender.com/api/profiles/${user.id}`,
        profile
      )
      .then((res) => {
        handleUser(res.data);
      })
      .then(navigate(`/profile/personal`))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios
      .get(`https://werevartserverapi.onrender.com/api/profiles/${user.id}`)
      .then((response) => setUserProfile(response.data))
      .catch((err) => console.error(err));
  }, [user]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="myAccount_container_noMiniHeader"
    >
      <div className="field_container">
        <label htmlFor="firstname" className="field_label">
          <div>
            First Name
            <span className="field_span"> (required) </span>
          </div>
          <input
            type="text"
            className="field_input"
            placeholder="Enter your first name"
            defaultValue={userProfile && userProfile.firstname}
            {...register("firstname", { required: true })}
          />
        </label>
        <label htmlFor="lastname" className="field_label">
          <div>
            Last Name
            <span className="field_span"> (required) </span>
          </div>
          <input
            type="text"
            className="field_input"
            placeholder="Enter your last name"
            defaultValue={userProfile && userProfile.lastname}
            {...register("lastname", { required: true })}
          />
        </label>
        <label htmlFor="username" className="field_label">
          <div>
            User name
            <span className="field_span"> (required) </span>
          </div>
          <input
            type="text"
            className="field_input"
            placeholder="Enter your username"
            defaultValue={userProfile && userProfile.username}
            {...register("username", { required: true })}
          />
        </label>
        <label htmlFor="address" className="field_label">
          <div>
            Address
            <span className="field_span"> (required) </span>
          </div>
          <input
            type="text"
            className="field_input solo"
            placeholder="Enter your address"
            defaultValue={userProfile && userProfile.address}
            {...register("address", { required: true })}
          />
        </label>
        <label htmlFor="postcode" className="field_label">
          <div>
            Postcode
            <span className="field_span"> (required) </span>
          </div>
          <input
            type="text"
            className="field_input"
            placeholder="Enter your postcode"
            defaultValue={userProfile && userProfile.postcode}
            {...register("postcode", { required: true })}
          />
        </label>
        <label htmlFor="city" className="field_label">
          <div>
            City
            <span className="field_span"> (required) </span>
          </div>
          <input
            type="text"
            className="field_input"
            placeholder="Enter your city"
            defaultValue={userProfile && userProfile.city}
            {...register("city", { required: true })}
          />
        </label>
        <label htmlFor="country" className="field_label">
          <div>
            Country
            <span className="field_span"> (required) </span>
          </div>
          <input
            type="text"
            className="field_input"
            placeholder="Enter your country"
            defaultValue={userProfile && userProfile.country}
            {...register("country", { required: true })}
          />
        </label>
      </div>
      <div className="register_buttons_container">
        <button type="submit" className="button-style yellow">
          Save
        </button>
      </div>
    </form>
  );
}

export default PersonalForm;
