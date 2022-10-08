import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../style/MyProfile.css";
import ExportContextUser from "../../../context/UserContext";
// eslint-disable-next-line import/no-extraneous-dependencies

export default function MyProfileForm() {
  const { user, handleUser } = useContext(ExportContextUser.UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(
        `https://werevartserverapi.onrender.com/api/profiles/${user.id}`,
        profile
      )
      .then((res) => {
        handleUser(res.data);
      })
      .then(useNavigate("/profile/description"))
      .catch((err) => console.error(err));
  };
  const skills = ["Motion", "VR", "3D", "Painting", "Photography"];
  const software = ["Motion", "VR", "3D", "Painting", "Photography"];
  typeOfContrat = ["free", "paid"];
  return (
    <section className="section_form">
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <label htmlFor="type">
            <select name="type" id="select">
              <option value="digital">Digital Artist</option>
              <option value="traditional">Traditional Artist</option>
            </select>
          </label>
        </div>

        <label className="profiledescription " htmlFor="messageInput">
          Your public presentation
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="profiledescription"
            name="descriptionInput"
          />
        </label>
        <h3 className="profile_h3"> Your skills</h3>
        <Skills skills={skills} handleSkills={handleSkills} />
        <h3 className="profile_h3"> Software used</h3>
        <SoftwareUse soft={soft} handleSoft={handleSoft} />
        <h3 className="profile_h3"> Your prefered type of contract</h3>
        <ContractTypes
          typeOfContrat={typeOfContrat}
          handleContracts={handleContracts}
        />

        <button type="submit" value="send" className="button_form_qb yellow">
          Save
        </button>
      </form>
    </section>
  );
}
