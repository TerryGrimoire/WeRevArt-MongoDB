import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

import hide from "../images/hide.png";
import show from "../images/show.png";

function RegisterNow() {
  const [shown, setShown] = useState(false);
  const [registerButton, setRegisterButton] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/typeaccount `)
      .then((res) => {
        const typeAccount = res.data.map((type) => ({
          ...type,
          active: false,
        }));
        setRegisterButton(typeAccount);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const passwordCurrent = watch("password", "");

  const handleClick = (index) => {
    const provisoirRegisterButton = registerButton.map((button) => ({
      ...button,
      active: false,
    }));
    provisoirRegisterButton[index].active = true;
    setRegisterButton(provisoirRegisterButton);
  };

  const onSubmit = (data) => {
    if (data.password === data.confirmed_password) {
      const data2 = { ...data };
      const activeButton = registerButton.find((el) => el.active);
      data2.typeaccount_id = activeButton.id;
      delete data2.confirmed_password;
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/user/signin`, data2)
        .then(() => {
          console.warn("User signin successful");
        })
        .catch((err) => console.error(err));
      setSubmitted(true);
    }
    //  else {
    // }
  };
  return (
    <section className="register_login_container">
      <section className="register_buttons_container">
        {registerButton.map((btn, index) => (
          <div key={btn.id}>
            <button
              type="button"
              className={
                btn.active
                  ? "button_style2 yellow"
                  : "button_style2 empty_yellow"
              }
              onClick={() => handleClick(index)}
            >
              {btn.type}
            </button>
            {btn.id === 1 ? (
              <p className="register_description">
                I am looking for physical artworks to animate
              </p>
            ) : (
              <p className="register_description">
                I am looking for digital artists to animate my art
              </p>
            )}
          </div>
        ))}
      </section>

      <form onSubmit={handleSubmit(onSubmit)}>
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
