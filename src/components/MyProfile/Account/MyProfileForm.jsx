import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Select from "react-select";
import "../../../style/MyProfile.css";
import ExportContextUser from "../../../context/UserContext";
// eslint-disable-next-line import/no-extraneous-dependencies

export default function MyProfileForm() {
  const { user, handleUser } = useContext(ExportContextUser.UserContext);
  const [description, setDescription] = useState();
  const [selectedSkills, setSelectedSkills] = useState();
  const [selectedSoftwares, setSelectedSoftwares] = useState();
  const [userProfile, setUserProfile] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      description,
      skills: selectedSkills,
      softwares: selectedSoftwares,
    };
    axios
      .patch(
        `https://werevartserverapi.onrender.com/api/profiles/${user.id}`,
        data
      )
      .then((res) => {
        handleUser(res.data);
      })
      .then(navigate("/profile/description"))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios
      .get(`https://werevartserverapi.onrender.com/api/profiles/${user.id}`)
      .then((response) => setUserProfile(response.data))
      .catch((err) => console.error(err));
  }, [user]);

  const skills = [
    { value: "Motion", label: "Motion" },
    { value: "Virtual Reality", label: "Virtual Reality" },
    { value: "3D", label: "3D" },
    { value: "Painting", label: "Painting" },
    { value: "Photographie", label: "Photographie" },
  ];
  const software = [
    { value: "Adobe Photoshop", label: "Adobe Photoshop" },
    { value: "Procreate", label: "Procreate" },
    { value: "Corel Painter", label: "Corel Painter" },
    { value: "Adobe Fresco", label: "Adobe Fresco" },
    { value: "Adobe Illustrator", label: "Adobe Illustrator" },
    { value: "Affinity Photo", label: "Affinity Photo" },
    { value: "Rebelle 4", label: "Rebelle 4" },
    { value: "Krita", label: "Krita" },
    { value: "CorelDRAW", label: "CorelDRAW" },
    { value: "GIMP", label: "GIMP" },
    { value: "Clip Studio Paint Pro", label: "Clip Studio Paint Pro" },
    { value: "MediBang Paint Pro", label: "MediBang Paint Pro" },
    { value: "PaintStorm Studio", label: "PaintStorm Studio" },
    { value: "IbisPaint", label: "IbisPaint" },
    { value: "ArtRage", label: "ArtRage" },
  ];

  const handleSkills = (selectedOptions) => {
    setSelectedSkills(selectedOptions.map((skill) => skill.label));
  };
  const handleSoftwares = (selectedOptions) => {
    setSelectedSoftwares(selectedOptions.map((skill) => skill.label));
  };

  return (
    <section className="myProfileForm_container">
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <label htmlFor="type">
            <select name="type" id="select">
              <option value="digital">Digital Artist</option>
              <option value="traditional">Traditional Artist</option>
            </select>
          </label>
        </div>

        <div className="MyProfileForm-form-container">
          <label className="profiledescription " htmlFor="messageInput">
            Your public presentation
            <textarea
              defaultValue={userProfile && userProfile.description}
              onChange={(e) => setDescription(e.target.value)}
              className="profiledescription"
              name="descriptionInput"
            />
          </label>
          <Select
            options={skills}
            isMulti
            onChange={handleSkills}
            defautValue={
              userProfile && userProfile.skills.map((skill) => skill)
            }
          />
          <Select options={software} isMulti onChange={handleSoftwares} />
        </div>

        <button type="submit" value="send" className="button_form_qb yellow">
          Save
        </button>
      </form>
    </section>
  );
}
