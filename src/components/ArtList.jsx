import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ExportContextUser from "../context/UserContext";
import Button from "./Button";
import Checklist from "./Checklist";
import buttonData from "../data/buttonData";

function ArtList() {
  const { user } = useContext(ExportContextUser.UserContext);
  return (
    <section className="list-container2">
      <Checklist index={2} />
      <Link
        to={user !== null ? "/Post_An_Ad" : "/Register"}
        className="button-container"
      >
        <Button className="button-artlist" buttonData={buttonData[1]} />
      </Link>
    </section>
  );
}

export default ArtList;
