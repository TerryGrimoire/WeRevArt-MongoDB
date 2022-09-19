import React from "react";
import { useForm } from "react-hook-form";

import Checkboxes from "./Checkboxes";

import checkboxesData from "../data/checkboxesData";
import fieldDataArtistAccount from "../data/fieldDataArtistAccount";

import "../style/MyAccount.css";

function ArtistRegistration() {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    console.warn(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="myAccount_container_noMiniHeader"
    >
      <div className="field_container">
        {fieldDataArtistAccount.map((el) => (
          <label htmlFor={el.label} className="field_label">
            <div>
              {el.label}
              {el.required ? (
                <span className="field_span"> (required) </span>
              ) : (
                ""
              )}
            </div>
            <input
              type="text"
              className={`field_input ${el.style}`}
              placeholder={`Enter your ${el.label.toLowerCase()}`}
              {...register(el.label, { required: el.required })}
            />
          </label>
        ))}
      </div>

      <div className="myAccount_checkboxes_container">
        {checkboxesData.map((el) => (
          <Checkboxes data={el} />
        ))}
      </div>
      <div className="register_buttons_container">
        <button type="button" className="button-style empty_yellow">
          Modify
        </button>
        <button type="submit" className="button-style yellow">
          Save
        </button>
      </div>
    </form>
  );
}

export default ArtistRegistration;
