import { React } from "react";

function FilterOptions({ filteroptions, filter, setFilter, type }) {
  const handleClick = () => {
    const newFilter = { ...filter };
    if (!newFilter[type].includes(filteroptions.id)) {
      newFilter[type] = [...newFilter[type], filteroptions.id];
    } else {
      newFilter[type] = newFilter[type].filter((el) => el !== filteroptions.id);
    }
    setFilter(newFilter);
  };

  return (
    <button
      className={`filter_options ${
        filter[type].includes(filteroptions.id) ? "yellow" : ""
      }`}
      type="button"
      onClick={handleClick}
    >
      {filteroptions[type]}
    </button>
  );
}

export default FilterOptions;
