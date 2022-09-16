import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import ExportContextUser from "../../../context/UserContext";

import "../../../style/MyAccount.css";

function PersonalForm() {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const { user, handleUser } = useContext(ExportContextUser.UserContext);
  const onSubmit = (data) => {
    const profile = { ...data, email: user.email };
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/profile`, profile)
      .then((res) => {
        handleUser(res.data);
        navigate("/MyProfile/");
      })
      .catch((err) => console.error(err));
  };
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
            placeholder="Enter your first user name"
            {...register("username", { required: true })}
          />
        </label>
        <label htmlFor="adress" className="field_label">
          <div>
            Address
            <span className="field_span"> (required) </span>
          </div>
          <input
            type="text"
            className="field_input solo"
            placeholder="Enter your address"
            {...register("adress", { required: true })}
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
