const AbstractManager = require("./AbstractManager");

class SoftwareManager extends AbstractManager {
  static table = "softwareused";

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(item) {
    return this.connection.query(
      `insert into ${SoftwareManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${SoftwareManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = SoftwareManager;
