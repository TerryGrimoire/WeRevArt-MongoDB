import React from "react";

import "../style/button.css";

function Button({ buttonData }) {
  const cls = `${buttonData.style} button-style`;
  return (
    <button type="button" className={cls}>
      {buttonData.content}
    </button>
  );
}

export default Button;
