const AbstractManager = require("./AbstractManager");

class TimeframeManager extends AbstractManager {
  static table = "timeframe";

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }
}

module.exports = TimeframeManager;
