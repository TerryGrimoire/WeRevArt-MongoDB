import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/MyProfile.css";

function ContractTypes({ typeOfContrat, handleContracts }) {
  const [myContractType, setContractType] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/contracttype `)
      .then((res) => {
        setContractType(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="postAnAd_container">
      {myContractType.map((contracttypes) => (
        <button
          onClick={() => handleContracts(contracttypes.id)}
          className={
            typeOfContrat.includes(contracttypes.id)
              ? "button_style_paa2 yellow"
              : "button_style_paa empty_yellow"
          }
          type="button"
          key={contracttypes.id}
        >
          {contracttypes.contracttype}
        </button>
      ))}
    </div>
  );
}

export default ContractTypes;
