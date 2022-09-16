const models = require("../models");
/* const jwt = require("jsonwebtoken"); */
require("dotenv").config();

const checkedForEmail = (req, res, next) => {
  models.user
    .findOne(req.body.email)
    .then((result) => {
      if (result) {
        req.user = result;
        next();
      } else {
        res.status(401).send("wrong credentials, try again");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Servor Error");
    });
};

/* const checkAuth = (req, res, next) => {
  if (req.cookies) {
    jwt.verify(req.cookies.user_token, process.env.PRIVATETOKEN, (err) => {
      if (err) {
        console.log(err);
        res.status(401).send("You don t have the correct rights");
      } else next();
    });
  } else {
    res.status(401).send("You don t have the correct rights");
  }
}; */

module.exports = { checkedForEmail /* checkAuth */ };
