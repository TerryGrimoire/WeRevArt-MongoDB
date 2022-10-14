import { Helmet } from "react-helmet-async";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MiniHeader from "../components/miniHeader";
import NewProject from "../components/NewProject";

function ProjectAds() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://werevartserverapi.onrender.com/api/projects/")
      .then((response) => setProjects(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Helmet>
        <title>We Rev&apos;Art | ProjectAds </title>
      </Helmet>
      <MiniHeader index={0} />
      {projects ? (
        <section className="cardProject_cardProject">
          <div className="cardProject_cards">
            {projects.map((project, index) => (
              /* eslint no-underscore-dangle: 0 */
              <NewProject project={project} key={project._id} index={index} />
            ))}
          </div>
        </section>
      ) : (
        <img
          src="https://media4.giphy.com/media/HiQK2oD5rHCMdq6EHX/giphy.gif?cid=ecf05e47tozp6fwxrqz5g205w0bazozuvahqeld4j2vc3vsj&rid=giphy.gif&ct=s"
          alt="loading circles"
          className="loading"
        />
      )}
    </div>
  );
}
export default ProjectAds;
