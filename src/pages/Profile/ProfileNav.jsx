import React from "react";
import { Link } from "react-router-dom";

function ProfileInformationNav() {
  return (
    <div className="flex">
      <section className="Links_container">
        <Link to="/profile/personal" className="Link_style3">
          Personal information
        </Link>
        <Link to="/Profile/description" className="Link_style3">
          Account description
        </Link>
        <Link to="/Profile/billing" className="Link_style3">
          Billing information
        </Link>
        <Link to="/Profile/notifications" className="Link_style3">
          Notifications
        </Link>
      </section>
    </div>
  );
}

export default ProfileInformationNav;
