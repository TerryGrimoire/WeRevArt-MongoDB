import { React } from "react";
import ProjectAdsFilterData from "../../../data/ProjectAdsFilterData";
import "../../../style/ProjectAdsFilter.css";
import ProjectFilterOption from "../ProjectFilterOption";

function ProjectAdsFilter({ filter, setFilter }) {
  return (
    <div className="projectad_container">
      <div className="buttonlist_map">
        {ProjectAdsFilterData.map((data) => (
          <ProjectFilterOption
            list={data}
            filter={filter}
            setFilter={setFilter}
            key={data.type}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectAdsFilter;
