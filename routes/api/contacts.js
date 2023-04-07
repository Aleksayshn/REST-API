const express = require('express')
const Joi = require("joi");

const operations = require('../../models/operations')
const HttpError = require('../../helpers/HttpError')

const router = express.Router()

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

router.get('/', async (req, res, next) => {
  try {
    const contacts = await operations.listContacts()
    res.json({
    status: 'success',
    code: 200,
    data: {contacts,},
  });
  } catch (error) {next(error);}
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await operations.getById(contactId);
    if (!contact) {
      throw HttpError(404, `Contact with id: ${contactId} was not found`);
    // return res.status(404).json({message: "Not found"})
    }
    res.json({
    status: 'success',
    code: 200,
    data: {contact,},
    });
  } catch (error) {next(error);}
})

router.post("/", async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
  const { name, email, phone } = req.body;
    const contact = await operations.add(name, email, phone);
    res.status(201).json({
      status: 'success',
      code: 201,
      data: { contact },
    });
  } catch (error) {next(error);}
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await operations.remove(contactId);
    if (!result) {
      throw HttpError(404, `Contact with id: ${contactId} was not found`);
    }
    // res.status(204).send();
    res.json({ message: "Contact deleted" });

  } catch (error) {next(error);}
});

router.put("/:contactId", async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, "missing fields");
    }
    const { contactId } = req.params;
    // const { name, email, phone } = req.body;
    const result = await operations.updateById(contactId, req.body);
    if (!result) {
      throw HttpError(404, `Contact with id: ${contactId} was not found`);
    }
    res.json({
    status: 'success',
    code: 200,
    data: { result },
  });
  } catch (error) {next(error);}
});

router.patch("/:contactId/", async (req, res, next) => {
  try {
  
    const { contactId } = req.params;
      const { phone  } = req.body;

    const contact = await operations.changeById(contactId, phone );
    if (!contact) {
      throw HttpError(404, `Contact with id: ${contactId} was not found`);
    }
    res.json({
    status: 'success',
    code: 200,
    data: { contact },
  });
  } catch (error) {next(error);}
});

module.exports = router;
