import React, { useState, useEffect } from "react";
import axios from "axios";

function Timeframe({ timeframe, handleTimeframe }) {
  const [timeframeType, setTimeframeType] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/timeframe`)
      .then((res) => {
        setTimeframeType(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="postAnAd_container">
      {timeframeType.map((timeframeTypes) => (
        <button
          onClick={() => handleTimeframe(timeframeTypes.id)}
          className={
            timeframe.includes(timeframeTypes.id)
              ? "button_style_paa2 yellow"
              : "button_style_paa empty_yellow"
          }
          type="button"
          key={timeframeTypes.id}
        >
          {timeframeTypes.timeframe}
        </button>
      ))}
    </div>
  );
}

export default Timeframe;
