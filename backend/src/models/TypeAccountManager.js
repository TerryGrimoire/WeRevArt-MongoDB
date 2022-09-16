const AbstractManager = require("./AbstractManager");

class TypeAccountManager extends AbstractManager {
  static table = "typeaccount";

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }
}

module.exports = TypeAccountManager;
