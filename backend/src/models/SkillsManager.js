const AbstractManager = require("./AbstractManager");

class SkillsManager extends AbstractManager {
  static table = "skills";

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(skills) {
    return this.connection.query(
      `insert into ${SkillsManager.table} (skills) values (?)`,
      [skills.skills]
    );
  }

  update(skills) {
    return this.connection.query(
      `update ${SkillsManager.table} set skills = ? where id = ?`,
      [skills.skills, skills.id]
    );
  }

  findByProfilId(profilId) {
    return this.connection
      .query(
        `select * from profil_has_skills AS p INNER JOIN skills AS s ON s.id = p.skills_id 
    where profil_id = ?`,
        [profilId]
      )
      .then((res) => res[0]);
  }
}

module.exports = SkillsManager;
