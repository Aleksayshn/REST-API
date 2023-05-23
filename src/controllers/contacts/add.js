const {
  addContact,
} = require("../../services/contactServices/contact");

const add = async (req, res) => {
  const { _id: owner } = req.user;
  const contact = await addContact({ ...req.body, owner });

  res.status(201).json(contact);
};
module.exports = add;