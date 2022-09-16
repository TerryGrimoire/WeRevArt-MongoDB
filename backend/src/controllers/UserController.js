const argon2 = require("argon2");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
/* const bodyParser = require("body-parser"); */
const models = require("../models");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (plainPassword) => {
  return argon2.hash(plainPassword, hashingOptions);
};
const verifyPassword = (plainPassword, hashedPassword) => {
  return argon2.verify(hashedPassword, plainPassword, hashingOptions);
};

class UserController {
  static signin = async (req, res) => {
    // TODO hashpassword
    try {
      const hash = await hashPassword(req.body.password);

      // TODO uuid
      const id = uuidv4();
      await models.user.insert(id, hash, req.body.email);
      await models.profil.insert(id, req.body.typeaccount_id);
      res.status(200).send("profil user created successfully");
    } catch (err) {
      console.error(err);
      res.status(500).send("error server");
    }
  };

  static login = async (req, res) => {
    verifyPassword(req.body.password, req.user[0][0].password)
      .then(async () => {
        const token = jwt.sign(
          { email: req.body.email },
          process.env.PRIVATETOKEN
        );
        const profil = await models.profil.find(req.user[0][0].id);
        res
          .status(201)
          .cookie("user_token", token, {
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
          })
          .json({
            email: req.body.email,
            typeaccount_id: profil[0].typeaccount_id,
          });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("error server");
      });
  };
}
module.exports = UserController;
