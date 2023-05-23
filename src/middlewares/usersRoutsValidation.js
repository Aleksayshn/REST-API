const Joi = require("joi");
const { validateBody } = require("../helpers");

const joiAuthSchema = Joi.object({
  email: Joi.string().required().email({
    minDomainSegments: 2,
  }),
  password: Joi.string().min(3).required(),
});

const joiSubscriptionSchema = Joi.object({
    subscription: Joi.string().valid("starter", "pro", "business").required(),
  }).options({ allowUnknown: true });


module.exports = {
  authValidation: validateBody(joiAuthSchema),
  subscriptionValidation: validateBody(joiSubscriptionSchema),
};
