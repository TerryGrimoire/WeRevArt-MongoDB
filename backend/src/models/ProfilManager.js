const AbstractManager = require("./AbstractManager");

class ProfilManager extends AbstractManager {
  static table = "profil";

  // eslint-disable-next-line camelcase
  insert(id, typeaccount_id) {
    return this.connection.query(
      `insert into ${ProfilManager.table} (id, user_id, typeaccount_id) values (?,?,?)`,
      // eslint-disable-next-line camelcase
      [id, id, typeaccount_id]
    );
  }

  find(id) {
    return this.connection
      .query(`select * from  ${this.table} where user_id = ?`, [id])
      .then((res) => res[0]);
  }

  findAll(query) {
    const { limit, contracttype, skills, usertype } = query;
    let sqlValue = [];

    let sql = `select * from  ${this.table} AS p 
    LEFT JOIN picture AS img ON img.idpicture = p.picture_idpicture `;

    if (contracttype)
      sql += `INNER JOIN profil_has_contracttype AS phc ON p.id = phc.profil_id `;
    if (usertype)
      sql += `INNER JOIN profil_has_usertype AS phu on p.id = phu.profil_id `;
    if (skills)
      sql += `INNER JOIN profil_has_skills AS phs ON p.id = phs.profil_id `;

    sql += `WHERE p.typeaccount_id = 1 `;

    if (skills) {
      const skillsArray = skills.split("|");
      sql += `AND ( phs.skills_id = ? `;
      if (skillsArray[1]) {
        skillsArray.forEach((element, index) => {
          if (index > 0) {
            sql += `OR phs.skills_id = ? `;
          }
        });
      }
      sql += `) `;
      sqlValue = [...sqlValue, ...skillsArray];
    }

    if (usertype) {
      const usertypeArray = usertype.split("|");
      sql += `AND ( phu.usertype_id = ? `;
      if (usertypeArray[1]) {
        usertypeArray.forEach((element, index) => {
          if (index > 0) {
            sql += `OR phu.usertype_id = ? `;
          }
        });
      }
      sql += `) `;
      sqlValue = [...sqlValue, ...usertypeArray];
    }

    if (contracttype) {
      const contracttypeArray = contracttype.split("|");
      sql += `AND ( phc.contracttype_id = ? `;
      if (contracttypeArray[1]) {
        contracttypeArray.forEach((element, index) => {
          if (index > 0) {
            sql += `OR phc.contracttype_id = ? `;
          }
        });
      }
      sql += `) `;
      sqlValue = [...sqlValue, ...contracttypeArray];
    }

    if (limit && limit < 25) {
      sql += `LIMIT ${limit}`;
    } else {
      sql += `LIMIT 25`;
    }
    return this.connection.query(sql, sqlValue).then((res) => res[0]);
  }

  update(profile, email) {
    return this.connection.query(
      `UPDATE ${ProfilManager.table} INNER JOIN user ON profil.user_id = user.id 
      INNER JOIN profil_has_skills AS phs ON phs.profil_id = profil.id 
      INNER JOIN skills ON skills.id = phs.skills_id SET  ? WHERE email = ?`,
      [profile, email]
    );
  }
}

module.exports = ProfilManager;
