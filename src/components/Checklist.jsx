import React from "react";
import "../style/Lists.css";
import checklistData from "../data/ChecklistData";

function Checklist({ index }) {
  return (
    <section>
      {/* {console.log(checklistData[index])} */}
      {checklistData[index]
        ? checklistData[index].text.map((data) => <p key={data}>{data}</p>)
        : null}
    </section>
  );
}

export default Checklist;
