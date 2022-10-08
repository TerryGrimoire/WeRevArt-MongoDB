import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import ExportContextUser from "../../context/UserContext";

import hide from "../../images/hide.png";
import show from "../../images/show.png";

function LoginNow() {
  const { user, setUser } = useContext(ExportContextUser.UserContext);
  const [shown, setShown] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setError(null);
    axios
      .post("https://werevartserverapi.onrender.com/api/users/login", data)
      .then((res) => setUser(res.data))
      .then(localStorage.setItem("user", JSON.stringify(user)))
      .then(user && navigate("/profile/personal"))
      .catch((err) => setError(err));
  };
  return (
    <section className="register_login_container">
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
              {...register("password", { required: true }, { minLength: 8 })}
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

        <button type="submit" className="button_style2 empty_yellow submit">
          Login
        </button>
        {error && <div> {error.response.data.error} </div>}
      </form>
    </section>
  );
}

export default LoginNow;
