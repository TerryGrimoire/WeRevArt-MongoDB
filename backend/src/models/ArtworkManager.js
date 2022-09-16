const AbstractManager = require("./AbstractManager");

class ArtworkManager extends AbstractManager {
  static table = "artwork";

  // eslint-disable-next-line class-methods-use-this
  andOrWhere(sqlQueryToTest) {
    return sqlQueryToTest.includes("WHERE") ? " AND" : " WHERE";
  }

  findAll(query) {
    const { limit, contracttype, skills, usertype } = query;
    let sqlValue = [];

    let sql = `select DISTINCT p.idpicture,p.image,p.alt,
    sk.skills,
    pr.id,
    b.budget,
    t.timeframe,
    art.timeframe_id,art.budget_id,art.profil_id,art.skills_id,
    art.id,art.hashtag,art.title,art.deadline,art.details,art.date,art.offers,art.likes,
    art.picture_idpicture_original FROM  ${this.table} AS art 
    INNER JOIN picture AS p ON art.picture_idpicture_original = p.idpicture 
    INNER JOIN skills AS sk ON art.skills_id = sk.id 
    INNER JOIN profil AS pr ON art.profil_id = pr.id 
    INNER JOIN budget AS b on art.budget_id = b.id 
    INNER JOIN timeframe AS t on art.timeframe_id = t.id `;

    if (contracttype)
      sql += `INNER JOIN profil_has_contracttype AS phc ON art.profil_id = phc.profil_id `;
    if (usertype)
      sql += `INNER JOIN profil_has_usertype AS phu on art.profil_id = phu.profil_id `;

    if (skills) {
      const skillsArray = skills.split("|");
      sql += `${this.andOrWhere(sql)} ( art.skills_id = ? `;
      if (skillsArray[1]) {
        skillsArray.forEach((element, index) => {
          if (index > 0) {
            sql += `OR art.skills_id = ? `;
          }
        });
      }
      sql += `) `;
      sqlValue = [...sqlValue, ...skillsArray];
    }

    if (usertype) {
      const usertypeArray = usertype.split("|");
      sql += `${this.andOrWhere(sql)} ( phu.usertype_id = ? `;
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
      sql += `${this.andOrWhere(sql)} ( phc.contracttype_id = ? `;
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
    // console.log(sql);
    return this.connection.query(sql, sqlValue).then((res) => res[0]);
  }

  insert(item) {
    return this.connection.query(
      `insert into ${ArtworkManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${ArtworkManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = ArtworkManager;
