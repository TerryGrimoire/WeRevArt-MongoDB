import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../style/cardProject.css";
import NewProject from "../NewProject";
import RegisterHome from "./RegisterHome";

function CardProject() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://werevartserverapi.onrender.com/api/projects")
      .then((res) =>
        setProjects(res.data.filter((projectdata, index) => index < 3))
      )
      .catch((err) => console.error(err));
  }, []);
  return (
    <section className="cardProject_cardProject">
      <div className="cardProject_cards">
        <h2>Latest project ads</h2>
        {projects ? (
          projects.map((project) => <NewProject project={project} />)
        ) : (
          <img
            src="https://media4.giphy.com/media/HiQK2oD5rHCMdq6EHX/giphy.gif?cid=ecf05e47tozp6fwxrqz5g205w0bazozuvahqeld4j2vc3vsj&rid=giphy.gif&ct=s"
            alt="loading circles"
            className="loading"
          />
        )}
        <div className="cardProject_homeToAllCard">
          <Link to="/Project_Ads" className="cardProject_allCard">
            VIEW ALL ADS
          </Link>
        </div>
      </div>
      <RegisterHome />
    </section>
  );
}

export default CardProject;
