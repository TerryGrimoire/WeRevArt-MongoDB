/* eslint-disable react/no-array-index-key */
import { React, useState, useEffect } from "react";
import axios from "axios";
import FilterOptions from "./FilterOptions";

function ProjectFilterOption({ list, filter, setFilter }) {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/filters/${list.type}`)
      .then((res) => {
        setOptions(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  function handleClick() {
    setButtonClicked(!buttonClicked);
  }

  return (
    <section className="list_map">
      <button className="filter_selection" type="button" onClick={handleClick}>
        {list.filter}
      </button>

      <ul className="list_map">
        {buttonClicked &&
          options.map((filteroptions, index) => (
            <FilterOptions
              filteroptions={filteroptions}
              filter={filter}
              setFilter={setFilter}
              type={list.type}
              key={index}
            />
          ))}
      </ul>
    </section>
  );
}

export default ProjectFilterOption;
