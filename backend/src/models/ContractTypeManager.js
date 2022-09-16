const AbstractManager = require("./AbstractManager");

class ContractTypeManager extends AbstractManager {
  static table = "contracttype";

  insert(item) {
    return this.connection.query(
      `insert into ${ContractTypeManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${ContractTypeManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }

  findByProfilId(profilId) {
    return this.connection
      .query(
        `select * from profil_has_contracttype AS phc INNER JOIN contracttype AS c ON c.id = phc.contracttype_id 
    where profil_id = ?`,
        [profilId]
      )
      .then((res) => res[0]);
  }
}

module.exports = ContractTypeManager;
