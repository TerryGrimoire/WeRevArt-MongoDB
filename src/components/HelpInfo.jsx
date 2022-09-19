import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import data from "../data/helpInfoData";
import "../style/FAQ.css";

function HelpInfo() {
  const [rows, setRowsOption] = useState(null);

  useEffect(() => {
    if (rows) {
      setTimeout(() => {
        rows[0].expand();
      }, 2500);

      setTimeout(() => {
        rows[0].close();
      }, 5000);

      setTimeout(() => {
        rows[0].scrollIntoView();
        // rows[0].scrollIntoView(true);
      }, 10000);
    }
  }, [rows]);
  const styles = {
    // bgColor: 'white',
    // titleTextColor: "blue",
    // rowContentColor: 'grey',
    arrowColor: "#E5735C",
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };

  return (
    <div className="faq_container">
      <Faq
        data={data}
        styles={styles}
        config={config}
        getRowOptions={setRowsOption}
      />
    </div>
  );
}

export default HelpInfo;
