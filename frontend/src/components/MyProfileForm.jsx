import React, { useState, useContext } from "react";
import axios from "axios";
import "../style/MyProfile.css";
import ExportContextUser from "../context/UserContext";

import Skills from "./Skills";
import SoftwareUse from "./SoftwareUse";
import UserType from "./UserType";
import ContractTypes from "./ContractTypes";
// eslint-disable-next-line import/no-extraneous-dependencies

export default function MyProfileForm() {
  const { user, handleUser } = useContext(ExportContextUser.UserContext);
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [skills, setSkills] = useState([]);
  const [soft, setSoft] = useState([]);
  const [typeOfContrat, setTypeOfContrat] = useState([]);

  const handleSkills = (id) => {
    if (skills.includes(id)) {
      setSkills(skills.filter((skill) => skill !== id));
    } else {
      setSkills([...skills, id]);
    }
  };

  const handleSoft = (id) => {
    if (soft.includes(id)) {
      setSoft(soft.filter((softwares) => softwares !== id));
    } else {
      setSoft([...soft, id]);
    }
  };

  const handleContracts = (id) => {
    if (typeOfContrat.includes(id)) {
      setTypeOfContrat(
        typeOfContrat.filter((contracttype) => contracttype !== id)
      );
    } else {
      setTypeOfContrat([...typeOfContrat, id]);
    }
  };
  const data = {
    description,
  };

  const profile = { ...data, email: user.email };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/profile`, profile)
      .then((res) => {
        handleUser(res.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className="section_form">
      <form onSubmit={handleSubmit}>
        <h3 className="profile_h3"> You are...</h3>
        <UserType type={type} setType={setType} />

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
        <h3 className="profile_h3"> Your art portofolio</h3>

        <button type="submit" value="send" className="button_form_qb yellow">
          Save
        </button>
      </form>
    </section>
  );
}
