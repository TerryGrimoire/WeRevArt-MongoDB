import React, { useState, useEffect } from "react";
import * as Realm from "realm-web";
import { Link } from "react-router-dom";
import "../style/cardProject.css";
import NewProject from "./NewProject";
import RegisterHome from "./RegisterHome";

function CardProject() {
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    const app = new Realm.App({ id: "werevart-wcoow" });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const allProjects = await user.functions.getLastProjects();
      setProjects(allProjects);
    } catch (err) {
      console.error("Failed to log in", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="cardProject_cardProject">
      <div className="cardProject_cards">
        <h2>Latest project ads</h2>
        {projects &&
          projects.map((project) => <NewProject project={project} />)}
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
