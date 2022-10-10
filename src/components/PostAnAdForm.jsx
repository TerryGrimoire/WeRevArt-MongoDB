import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import ExportContextUser from "../context/UserContext";

function PostAnAdForm() {
  const { user } = useContext(ExportContextUser.UserContext);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [techniques, setTechniques] = useState([]);
  const [contracts, setContracts] = useState([]);
  const [timeframe, setTimeframe] = useState([]);
  const [image, setImage] = useState([]);
  const [userProfile, setUserProfile] = useState();
  const navigate = useNavigate();
  // Techniques
  const techniquesOptions = [
    { value: "Motion", label: "Motion" },
    { value: "Virtual Reality", label: "Virtual Reality" },
    { value: "3D", label: "3D" },
    { value: "Painting", label: "Painting" },
    { value: "Photographie", label: "Photographie" },
  ];

  const handleTechniques = (selectedOptions) => {
    setTechniques(selectedOptions.map((technique) => technique.label));
  };

  // Contracts
  const contractsOptions = [
    { value: "Paid Contract", label: "Paid Contract" },
    { value: "Free Collaboration", label: "Free Collaboration" },
  ];

  const handleContracts = (selectedOptions) => {
    setContracts(selectedOptions);
  };

  // Timeframe
  const timeframeOptions = [
    { value: "Urgent", label: "Urgent" },
    { value: "As soon as possible", label: "As soon as possible" },
    { value: "Not urgent", label: "Not urgent" },
  ];

  const handleTimeframe = (selectedOptions) => {
    setTimeframe(selectedOptions);
  };

  // useEffect to get information from the user
  useEffect(() => {
    axios
      .get(`https://werevartserverapi.onrender.com/api/profiles/${user.id}`)
      .then((response) => setUserProfile(response.data))
      .catch((err) => console.error(err));
  }, [user]);

  // Submit function

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      contract: contracts.value,
      timeframe: timeframe.value,
      src: image,
      alt: title,
      title,
      description,
      techniques,
      artiste: {
        profileId: user.id,
        username: userProfile.username,
      },
    };

    // sending data to the server and db
    axios
      .post("https://werevartserverapi.onrender.com/api/projects", data)
      .then((res) => res.status(200).json(res))
      .then(navigate("/Project_Ads"))
      .catch((err) => console.error(err));
  };

  return (
    <form className="section_form" onSubmit={(e) => handleSubmit(e)}>
      <div className="flex-column">
        <label className="profiledescription" htmlFor="messageInput">
          Name of the project
          <input
            onChange={(e) => setTitle(e.target.value)}
            className="field_input"
          />
        </label>
        <label className="profiledescription" htmlFor="Image">
          Link to image
          <input
            onChange={(e) => setImage(e.target.value)}
            className="field_input"
          />
        </label>
        <label className="profiledescription " htmlFor="messageInput">
          Details about your needs
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            className="textarea"
            name="descriptionInput"
          />
        </label>
        <div>
          <h3>Desired technology</h3>
          <Select
            options={techniquesOptions}
            isMulti
            onChange={handleTechniques}
          />
        </div>
        <div>
          <h3>Type of Contract</h3>
          <Select options={contractsOptions} onChange={handleContracts} />
        </div>
        <div>
          <h3>Timeframe</h3>
          <Select options={timeframeOptions} onChange={handleTimeframe} />
        </div>
      </div>
      <button type="submit" className="button-style yellow">
        Submit
      </button>
    </form>
  );
}
export default PostAnAdForm;
