import React, { useState } from "react";
import axios from "axios";
// import jwt from "jsonwebtoken";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import hide from "../../images/hide.png";
import show from "../../images/show.png";

function RegisterNow() {
  const [shown, setShown] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /* const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET, { expiresIn: "3d" });
  };

  */

  const postData = (x) => {
    axios
      .post(`https://data.mongodb-api.com/app/werevart-wcoow/endpoint/users`, x)

      // create a token
      /* eslint no-underscore-dangle: 0 */
      //  const token = createToken(user._id);
      // console.log({ x, token });
      .then((res) => {
        setSubmitted(true);
        res.status(200).send("user created successfully");
      })
      .catch((err) => {
        console.error("Failed to create a new user", err);
      });
  };

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const passwordCurrent = watch("password", "");

  const onSubmit = (data) => {
    if (data.password === data.confirmed_password) {
      const data2 = { ...data };
      delete data2.confirmed_password;
      postData(data2);
    }
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
        <div className="confirmation_message">Registration successfull</div>
      )}
    </section>
  );
}

export default RegisterNow;
