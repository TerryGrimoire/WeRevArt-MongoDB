import React from "react";
import { Link } from "react-router-dom";

function ProfileInformationNav() {
  return (
    <div className="flex">
      <section className="buttons_container">
        <Link to="/profile/personal" className="button_style3">
          Personal information
        </Link>
        <Link to="/Profile/description" className="button_style3">
          Account description
        </Link>
        <Link to="/Profile/billing" className="button_style3">
          Billing information
        </Link>
        <Link to="/Profile/settings" className="button_style3">
          Settings
        </Link>
      </section>
    </div>
  );
}

export default ProfileInformationNav;
