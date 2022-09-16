const AbstractManager = require("./AbstractManager");

class BudgetManager extends AbstractManager {
  static table = "budget";

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }
}

module.exports = BudgetManager;
