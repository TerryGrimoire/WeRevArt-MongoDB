const Joi = require("joi");

const validateSignin = (req, res, next) => {
  const { error } = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2 }).presence("required"),
    password: Joi.string().min(8).max(24).presence("required"),
    typeaccount_id: Joi.number().max(2).presence("required"),
    terms: Joi.boolean().truthy("true").presence("required"),
  }).validate(req.body, { abortEarly: false });

  if (!error) {
    next();
  } else {
    res.status(400).json(error); // TODO a changer l'error
  }
};

module.exports = { validateSignin };
