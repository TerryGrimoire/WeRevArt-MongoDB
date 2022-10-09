import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ExportContextUser from "../../../context/UserContext";

import "../../../style/MyAccount.css";

function BillingForm() {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const { user, handleUser } = useContext(ExportContextUser.UserContext);

  const onSubmit = async (data) => {
    const profile = { ...data };
    await axios
      .patch(
        `https://werevartserverapi.onrender.com/api/profiles/${user.id}`,
        profile
      )
      .then((res) => {
        handleUser(res.data);
      })
      .then(navigate("/profile/billing"))
      .catch((err) => console.error(err));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="myAccount_container_noMiniHeader"
    >
      <div className="field_container">
        <label htmlFor="companyname" className="field_label">
          <div>
            Name of company
            <span className="field_span"> (required) </span>
          </div>
          <input
            type="text"
            className="field_input"
            defaultValue={user.company && user.company.companyname}
            placeholder="Enter your company name"
            {...register("companyname", { required: true })}
          />
        </label>
        <label htmlFor="companyregistrationnumber" className="field_label">
          <div>
            Company registration number
            <span className="field_span"> (required) </span>
          </div>
          <input
            type="text"
            className="field_input"
            defaultValue={
              user.company && user.company.companyregistrationnumber
            }
            placeholder="Enter your registration number"
            {...register("companyregistrationnumber", { required: true })}
          />
        </label>
        <label htmlFor="companyregistrationcountry" className="field_label">
          <div>
            Country of registration
            <span className="field_span"> (required) </span>
          </div>
          <input
            type="text"
            className="field_input duo"
            defaultValue={
              user.company && user.company.companyregistrationcountry
            }
            placeholder="Enter your registration country"
            {...register("companyregistrationcountry", { required: true })}
          />
        </label>
        <label htmlFor="companyaddress" className="field_label">
          <div>
            Address
            <span className="field_span"> (required) </span>
          </div>
          <input
            type="text"
            className="field_input duo"
            defaultValue={user.company && user.company.companyaddress}
            placeholder="Enter your first user name"
            {...register("companyaddress", { required: true })}
          />
        </label>
        <label htmlFor="companypostcode" className="field_label">
          <div>
            Postcode
            <span className="field_span"> (required) </span>
          </div>
          <input
            type="text"
            className="field_input duo"
            placeholder="Enter your company postcode"
            defaultValue={user.company && user.company.companypostcode}
            {...register("companypostcode", { required: true })}
          />
        </label>
        <label htmlFor="companycity" className="field_label">
          <div>
            City
            <span className="field_span"> (required) </span>
          </div>
          <input
            type="text"
            className="field_input duo"
            placeholder="Enter your company city"
            defaultValue={user.company && user.company.companypostcity}
            {...register("companypostcity", { required: true })}
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

export default BillingForm;
