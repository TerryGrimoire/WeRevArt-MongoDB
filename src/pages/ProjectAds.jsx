import * as Realm from "realm-web";
import { Helmet } from "react-helmet-async";
import React, { useState, useEffect } from "react";
import MiniHeader from "../components/miniHeader";
import NewProject from "../components/NewProject";

function ProjectAds() {
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    const app = new Realm.App({ id: "werevart-wcoow" });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const allProjects = await user.functions.getAllProjects();
      setProjects(allProjects);
    } catch (err) {
      console.error("Failed to log in", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>We Rev&apos;Art | ProjectAds </title>
      </Helmet>
      <MiniHeader index={0} />

      <section className="cardProject_cardProject">
        <div className="cardProject_cards">
          {projects.map((project) => (
            <NewProject project={project} key={project.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
export default ProjectAds;
