
const operations = require('../models/operations')
const HttpError = require('../helpers/HttpError')
const ctrlWrapper = require('../helpers/ctrlWrapper')



const getAll = async (req, res) => {
    const contacts = await operations.listContacts()
    res.json({
    status: 'success',
    code: 200,
    data: {contacts,},
  });
}

const getById = async (req, res) => {
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
}

const add = async (req, res) => {
    
  const { name, email, phone } = req.body;
    const contact = await operations.add(name, email, phone);
    res.status(201).json({
      status: 'success',
      code: 201,
      data: { contact },
    });
}

const remove = async (req, res) => {
    const { contactId } = req.params;
    const result = await operations.remove(contactId);
    if (!result) {
      throw HttpError(404, `Contact with id: ${contactId} was not found`);
    }
    // res.status(204).send();
    res.json({ message: "Contact deleted" });
}
const updateById = async (req, res) => {
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
}
    
const changeById = async (req, res) => {  
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
}

module.exports = {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    add: ctrlWrapper(add),
    remove: ctrlWrapper(remove),
    updateById: ctrlWrapper(updateById),
    changeById: ctrlWrapper(changeById),
};