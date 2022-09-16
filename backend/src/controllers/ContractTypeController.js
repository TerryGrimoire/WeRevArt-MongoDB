const models = require("../models");

class ContractTypeController {
  static browse = (req, res) => {
    models.contracttype
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

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

module.exports = ContractTypeController;
