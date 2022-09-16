import React from "react";
import ReactDOM from "react-dom";
import ExportContextUser from "./context/UserContext";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ExportContextUser.UserProvider>
      <App />
    </ExportContextUser.UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
