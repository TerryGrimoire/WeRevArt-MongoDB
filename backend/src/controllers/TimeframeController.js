const models = require("../models");

class TimeframeController {
  static browse = (req, res) => {
    models.timeframe
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

module.exports = TimeframeController;
