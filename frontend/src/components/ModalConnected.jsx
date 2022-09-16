import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ExportContextUser from "../context/UserContext";

function ModalConnected({ setModal }) {
  const { user } = useContext(ExportContextUser.UserContext);
  const customer = [
    { label: "My account", link: "/MyAccount" },
    { label: "My profile", link: "/MyProfile" },
    { label: "My project ads", link: "/" },
    { label: "My favourite artists", link: "/" },
  ];

  const artist = [
    { label: "My account", link: "/MyAccount" },
    { label: "My profile", link: "/MyProfile" },
    { label: "My subscription", link: "/" },
    { label: "My creations", link: "/" },
  ];

  const typeAccount = user.usertypeaccount_id === 1 ? customer : artist;

  return (
    <ul className="modal_connected">
      {typeAccount.map((el) => (
        <Link to={el.link} className="modal_li" onClick={() => setModal(false)}>
          <button type="button" className="no_button">
            <li> {el.label}</li>
          </button>
        </Link>
      ))}
    </ul>
  );
}

export default ModalConnected;
