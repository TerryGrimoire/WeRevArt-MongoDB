import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import axios from "axios";
import hide from "../../images/hide.png";
import show from "../../images/show.png";

function RegisterNow({ setLogin }) {
  const [shown, setShown] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const secret = "e4g45eh24th45rgs21hg4e";

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const passwordCurrent = watch("password", "");

  const postData = (data) => {
    axios
      .post("https://werevartserverapi.onrender.com/api/users", data)
      .then(setLoading(false))
      .then(setSubmitted(true))
      .catch((err) => console.error("Failed to log in", err));
  };

  const onSubmit = (data) => {
    if (data.password === data.confirmed_password) {
      const data2 = { ...data, secret };
      delete data2.confirmed_password;
      setLoading(true);
      postData(data2);
    }
  };

  const handleLogin = () => {
    setLogin(true);
    setSubmitted(false);
  };
  return (
    <section className="register_login_container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="type" className="field_label">
          Type
          <select
            name="type"
            id="type"
            {...register("type", { required: true })}
          >
            <option value="digital">Digital artist</option>
            <option value="traditional">Traditional artist</option>
          </select>
          {errors.type && <p> Type is required </p>}
        </label>

        <label htmlFor="email" className="field_label">
          Email address
          <input
            type="email"
            className="field_input"
            {...register("email", { required: true })}
          />
          {errors.email && <p> Email is required </p>}
        </label>
        <label htmlFor="password" className="field_label">
          Password
          <div className="flex">
            <input
              type={shown ? "text" : "password"}
              className="field_input"
              {...register("password", { minLength: 8 }, { required: true })}
            />
            <button
              type="button"
              className="no_button"
              onClick={() => setShown(!shown)}
            >
              <img
                src={shown ? show : hide}
                alt="eye that changes if password is shown or hidden"
                className="eye_icon"
              />
            </button>
          </div>
          {errors.password && <p> Password is required </p>}
        </label>
        <label htmlFor="confirmed_password" className="field_label">
          Confirm your password
          <div className="flex">
            <input
              type={shown ? "text" : "password"}
              className="field_input"
              {...register(
                "confirmed_password",
                {
                  validate: (value) =>
                    value === passwordCurrent || "The passwords do not match",
                },
                { required: true }
              )}
            />
            <button
              type="button"
              className="no_button"
              onClick={() => setShown(!shown)}
            >
              <img
                src={shown ? show : hide}
                alt="eye that changes if password is shown or hidden"
                className="eye_icon"
              />
            </button>
          </div>
          {errors.confirmed_password && (
            <p> {errors.confirmed_password.message} </p>
          )}
        </label>
        <div className="register_terms_container">
          <input
            type="checkbox"
            className="register_checkbox"
            {...register("terms", { required: true })}
          />
          <p className="register_description">
            I agree with the <Link to="/">terms and conditions </Link>
          </p>
        </div>
        {errors.terms && <p> You must accept terms and conditions </p>}

        <button type="submit" className="button_style2 empty_yellow submit">
          Register
        </button>
      </form>
      {submitted && (
        <div className="creatingUser">
          <div className="subCreatingUser">
            <img
              src="https://media4.giphy.com/media/jnqUQYdH5l9CPiGtTw/giphy.gif?cid=ecf05e47gi5wi4v6n1czlgm3nvrp6vsvezq8990lnd6x6h81&rid=giphy.gif&ct=s"
              alt="claping hands"
              className="loading"
            />
            <p>Congratulations ! </p>
            <p className="small"> Your account has been created successfully</p>
            <button
              type="button"
              className="button_style2 yellow"
              onClick={() => handleLogin()}
            >
              Login now
            </button>
          </div>
        </div>
      )}
      {loading && (
        <div className="creatingUser">
          <div className="subCreatingUser">
            <img
              src="https://media4.giphy.com/media/HiQK2oD5rHCMdq6EHX/giphy.gif?cid=ecf05e47tozp6fwxrqz5g205w0bazozuvahqeld4j2vc3vsj&rid=giphy.gif&ct=s"
              alt="loading circles"
              className="loading"
            />
            <p>Please wait while we create your account </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default RegisterNow;
