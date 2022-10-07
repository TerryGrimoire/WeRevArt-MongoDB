import { Helmet } from "react-helmet-async";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MiniHeader from "../components/miniHeader";
import NewProject from "../components/NewProject";

function ProjectAds() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/projects/")
      .then((response) => setProjects(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Helmet>
        <title>We Rev&apos;Art | ProjectAds </title>
      </Helmet>
      <MiniHeader index={0} />

      <section className="cardProject_cardProject">
        <div className="cardProject_cards">
          {projects.map((project, index) => (
            /* eslint no-underscore-dangle: 0 */
            <NewProject project={project} key={project._id} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
export default ProjectAds;
