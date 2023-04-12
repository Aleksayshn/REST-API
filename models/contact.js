const {Schema, model} = require('mongoose');
const Joi = require("joi");

const handleSchemaValidationErrors = require('../helpers/handleMongooseError')

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
      minlength: 2,
      maxlength: 70
    },
    email: {
      type: String,
      minlength: 5,
      maxlength: 50
        },
    phone: {
      type: String,
      minlength: 5,
      maxlength: 20
    },
    favorite: {
      type: Boolean,
      default: false
    }
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post('save', handleSchemaValidationErrors)

const joiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.bool(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  joiSchema,
  updateFavoriteSchema,
}

const Contact = model("contact", contactSchema);

module.exports = { Contact, schemas };
