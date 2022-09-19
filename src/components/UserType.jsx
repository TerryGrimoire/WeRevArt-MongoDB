import React, { useState, useEffect } from "react";
import axios from "axios";

import "../style/MyProfile.css";

function UserType({ type, setType }) {
  const [userTypes, setUserTypes] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/usertype `)
      .then((res) => {
        setUserTypes(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      <div className="checkbox_container flex">
        {userTypes.map((user) => (
          <label htmlFor={user.usertype} key={user.id}>
            {user.usertype}
            <input
              onChange={() => setType(user.id)}
              checked={user.id === type}
              id={user.usertype}
              type="checkbox"
            />
          </label>
        ))}
      </div>
    </div>
  );
}

export default UserType;
