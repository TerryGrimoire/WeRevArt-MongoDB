import React, { useState, useEffect } from "react";
import axios from "axios";

function Budget({ budget, handleBudget }) {
  const [budgetType, setBudgetType] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/budget`)
      .then((res) => {
        setBudgetType(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="postAnAd_container">
      {budgetType.map((budgets) => (
        <button
          onClick={() => handleBudget(budgets.id)}
          className={
            budget.includes(budgets.id)
              ? "button_style_paa2 yellow"
              : "button_style_paa empty_yellow"
          }
          type="button"
          key={budgets.id}
        >
          {budgets.budget}
        </button>
      ))}
    </div>
  );
}

export default Budget;
