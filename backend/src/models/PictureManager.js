const AbstractManager = require("./AbstractManager");

class PictureManager extends AbstractManager {
  static table = "picture";

  find(id) {
    return this.connection
      .query(
        `select idpicture AS idpictureDigital, image AS imageDigital, alt AS altDigital from  ${this.table} where idpicture = ?`,
        [id]
      )
      .then((res) => res[0][0]);
  }

  insert(item) {
    return this.connection.query(
      `insert into ${PictureManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${PictureManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = PictureManager;
