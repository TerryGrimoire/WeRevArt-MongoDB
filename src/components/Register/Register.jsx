/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ExportContextUser from "../../context/UserContext";

import userAvatar from "../../images/user.png";
import ModalConnected from "../ModalConnected";

function Register() {
  const [modal, setModal] = useState(false);
  const { user } = useContext(ExportContextUser.UserContext);
  const [userDisplay, setUserDisplay] = useState();

  useEffect(() => {
    if (user) {
      axios
        .get(`https://werevartserverapi.onrender.com/api/profiles/${user.id}`)
        .then((response) => setUserDisplay(response.data))
        .catch((err) => console.error(err));
    }
  }, [user]);

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
                src={
                  user &&
                  userDisplay &&
                  userDisplay.firstname &&
                  userDisplay.lastname
                    ? `https://ui-avatars.com/api/?name=${userDisplay.firstname}+${userDisplay.lastname}`
                    : userAvatar
                }
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
