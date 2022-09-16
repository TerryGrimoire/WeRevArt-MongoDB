const AbstractManager = require("./AbstractManager");

class UserTypeManager extends AbstractManager {
  static table = "usertype";

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(item) {
    return this.connection.query(
      `insert into ${UserTypeManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${UserTypeManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }

  findByProfilId(profilId) {
    return this.connection
      .query(
        `select * from profil_has_usertype AS phu INNER JOIN usertype AS u ON u.id = phu.usertype_id 
    where profil_id = ?`,
        [profilId]
      )
      .then((res) => res[0]);
  }
}

module.exports = UserTypeManager;
