const models = require("../models");

class ProfilController {
  static browse = async (req, res) => {
    try {
      const profils = await models.profil.findAll(req.query);
      if (profils[0]) {
        const skills = await Promise.all(
          profils.map((profil) => models.skills.findByProfilId(profil.id))
        );
        const contracttype = await Promise.all(
          profils.map((profil) => models.contracttype.findByProfilId(profil.id))
        );
        const usertype = await Promise.all(
          profils.map((profil) => models.usertype.findByProfilId(profil.id))
        );
        profils.forEach((profil, index) => {
          // eslint-disable-next-line no-param-reassign
          profil.skills = skills[index];
          // eslint-disable-next-line no-param-reassign
          profil.contracttype = contracttype[index];
          // eslint-disable-next-line no-param-reassign
          profil.usertype = usertype[index];
        });
      }
      res.status(200).json(profils);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };

  static read = (req, res) => {
    models.profil
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const personalform = req.body;
    const { email } = personalform;
    delete personalform.email;
    // TODO validations (length, format...)

    models.profil
      .update(personalform, email)
      .then(() => {
        res.status(201).json(req.body);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.profil
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ProfilController;
