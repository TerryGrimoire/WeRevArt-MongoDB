import React, { useState } from "react";

import Skills from "./Skills";
import ContractTypes from "./ContractTypes";
import Budget from "./Budget";
import Timeframe from "./Timeframe";
import MyCreationUpload from "./MyCreationUpload";

function PostAnAdForm() {
  const [description, setDescription] = useState("");
  const [detail, setDetail] = useState("");
  const [skills, setSkills] = useState([]);
  const [typeOfContrat, setContractTypes] = useState([]);
  const [budget, setBudget] = useState([]);
  const [timeframe, setTimeframe] = useState([]);

  const handleSkills = (id) => {
    if (skills.includes(id)) {
      setSkills(skills.filter((skill) => skill !== id));
    } else {
      setSkills([...skills, id]);
    }
  };

  const handleContracts = (id) => {
    if (typeOfContrat.includes(id)) {
      setContractTypes(
        typeOfContrat.filter((contracttype) => contracttype !== id)
      );
    } else {
      setContractTypes([...typeOfContrat, id]);
    }
  };

  const handleBudget = (id) => {
    if (budget.includes(id)) {
      setBudget(budget.filter((budgets) => budgets !== id));
    } else {
      setBudget([...budget, id]);
    }
  };

  const handleTimeframe = (id) => {
    if (timeframe.includes(id)) {
      setTimeframe(timeframe.filter((timeframes) => timeframes !== id));
    } else {
      setTimeframe([...timeframe, id]);
    }
  };

  return (
    <section className="section_form">
      <div className="profile_picture_upload">
        <MyCreationUpload />
      </div>
      <div className="flex-column">
        <label className="profiledescription" htmlFor="messageInput">
          Name of the project
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="field_input"
            name="descriptionInput"
          />
        </label>
        <label className="profiledescription " htmlFor="messageInput">
          Details about your needs
          <textarea
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            className="textarea"
            name="descriptionInput"
          />
        </label>
      </div>
      <div className="paa_subcontainer">
        <h3 className="profile_h3">Choose an animation technique</h3>
        <Skills skills={skills} handleSkills={handleSkills} />
      </div>
      <div className="flex paa_subcontainer">
        <h3 className="profile_h3">What type of contract ?</h3>
        <ContractTypes
          typeOfContrat={typeOfContrat}
          handleContracts={handleContracts}
        />
      </div>
      <div className="flex paa_subcontainer">
        <h3 className="profile_h3">What is your budget ?</h3>
        <Budget budget={budget} handleBudget={handleBudget} />
      </div>
      <div className="flex paa_subcontainer">
        <h3 className="profile_h3">What is the timeframe of your project ?</h3>
        <Timeframe timeframe={timeframe} handleTimeframe={handleTimeframe} />
      </div>
      <button type="submit" className="button-style yellow absolute_right">
        Submit
      </button>
    </section>
  );
}
export default PostAnAdForm;
