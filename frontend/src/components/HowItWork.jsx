import React, { useState } from "react";
import TitleText from "./TitleText";
import titleTextData2 from "../data/titleTextData2";
import titleTextData3 from "../data/titleTextData3";

import "../style/register.css";

function HowItWork() {
  const [work, setWork] = useState(false);
  return (
    <section className="flex_container_column">
      <button
        type="button"
        className="button_style"
        onClick={() => setWork(!work)}
      >
        <div className={work ? "" : "button_register"}>How does it work?</div>
        <div className={work ? "button_login" : ""}>What Are the benefits?</div>
      </button>
      {!work ? (
        <TitleText titleTextData={titleTextData2} />
      ) : (
        <TitleText titleTextData={titleTextData3} />
      )}
    </section>
  );
}

export default HowItWork;
