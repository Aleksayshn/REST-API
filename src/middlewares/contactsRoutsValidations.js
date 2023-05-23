const Joi = require("joi");
const { validateBody } = require("../helpers");

const joiAddContactSchema = Joi.object({
    name: Joi.string().min(3).trim().required(),
    email: Joi.string().min(3).trim().email().required(),
    phone: Joi.string().min(6).trim().required(),
    favorite: Joi.boolean(),
  }).options({ allowUnknown: true });

const joiUpdateContactSchema = Joi.object({
    name: Joi.string().min(3).trim(),
    email: Joi.string().min(3).trim().email(),
    phone: Joi.string().min(6).trim(),
    favorite: Joi.boolean(),
  });

const joiUpdateStatusSchema = Joi.object({
    favorite: Joi.boolean().required(),
  }).options({ allowUnknown: true });

module.exports = {
  addContactValidation: validateBody(joiAddContactSchema),
  updateContactValidation: validateBody(joiUpdateContactSchema),
  updateStatusValidation: validateBody(joiUpdateStatusSchema),
};