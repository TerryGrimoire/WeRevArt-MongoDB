import React from "react";
import { useForm } from "react-hook-form";

import Checkboxes from "./Checkboxes";
import checkboxesData2 from "../data/checkboxesData2";
import checkboxesData3 from "../data/checkboxesData3";
import fieldDataCustomerAccount from "../data/fieldDataCustomerAccount";

import download from "../images/download.png";

import "../style/MyAccount.css";
import "../style/Field.css";

function CustomerRegistration() {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    console.warn(data);
  };
  return (
    <section className="myAccount_container_noMiniHeader">
      <div className="myAccount_customer_subcontainer">
        <div className="myAccount_customer_subcontainer2">
          <h4 className="myAccount_checkboxes_container">You are ...</h4>
          <div className="myAccount_checkboxes_container2">
            {checkboxesData2.map((el) => (
              <div className="checkbox_container">
                <input type="checkbox" />
                <p>{el.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="upload_photo">
          <p>UPLOAD YOUR PHOTO (required) </p>
          <img src={download} alt="download" className="myAccount_download" />
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="myAccount_container_noMiniHeader"
      >
        <div className="field_container">
          {fieldDataCustomerAccount.map((el) => (
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
          {checkboxesData3.map((el) => (
            <Checkboxes data={el} />
          ))}
        </div>
        <div className="register_buttons_container">
          <button type="submit" className="button-style yellow">
            Register
          </button>
          <button type="button" className="button-style empty_yellow">
            Modify
          </button>
          <button type="button" className="button-style empty_blue">
            Delete
          </button>
        </div>
      </form>
    </section>
  );
}

export default CustomerRegistration;
