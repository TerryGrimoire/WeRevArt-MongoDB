const models = require("../models");

class FilterController {
  static browse = (req, res) => {
    models[req.params.table]
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

module.exports = FilterController;
