const models = require("../models");

class BudgetController {
  static browse = (req, res) => {
    models.budget
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = BudgetController;
