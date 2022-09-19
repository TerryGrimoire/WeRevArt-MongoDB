import React from "react";
import { Helmet } from "react-helmet-async";
import HelpInfo from "../components/HelpInfo";
import MiniHeader from "../components/miniHeader";

function Help() {
  return (
    <div>
      <Helmet>
        <title>We Rev&apos;Art | Help </title>
      </Helmet>
      <MiniHeader index={3} />
      <HelpInfo />
    </div>
  );
}

export default Help;
