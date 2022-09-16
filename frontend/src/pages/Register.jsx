import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import MiniHeader from "../components/miniHeader";
import RegisterNow from "../components/RegisterNow";
import LoginNow from "../components/LoginNow";

import "../style/register.css";
import "../style/Field.css";

function Register() {
  const [login, setLogin] = useState(false);
  return (
    <section className="register_container">
      <Helmet>
        <title>We Rev&apos;Art | Register-Login </title>
      </Helmet>
      <MiniHeader index={4} />
      <section className="register_loginVsResgister_container">
        <button
          type="button"
          className="button_style"
          onClick={() => setLogin(!login)}
        >
          <div className={login ? "" : "button_register"}>Register</div>
          <div className={login ? "button_login" : ""}>Login</div>
        </button>
        {login ? <LoginNow /> : <RegisterNow />}
      </section>
    </section>
  );
}
export default Register;
