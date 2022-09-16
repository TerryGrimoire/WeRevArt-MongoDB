/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ExportContextUser from "../context/UserContext";

import userAvatar from "../images/user.png";
import ModalConnected from "./ModalConnected";

function Register() {
  const [modal, setModal] = useState(false);
  const { user } = useContext(ExportContextUser.UserContext);

  return (
    <section>
      <ul className="ul_container">
        {user === null ? (
          <Link to="/Register" className="register_link">
            <li className="register_header_right">
              Register <br /> Log in
            </li>
          </Link>
        ) : (
          <li>
            <button
              type="button"
              className="no_button"
              onClick={() => setModal(!modal)}
            >
              <img
                src={userAvatar}
                alt="avatar of a user"
                className="user_avatar_img"
              />
            </button>
          </li>
        )}
      </ul>
      {modal && <ModalConnected setModal={setModal} />}
    </section>
  );
}

export default Register;
