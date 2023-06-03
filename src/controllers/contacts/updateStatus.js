const {
  updateContact,
} = require("../../services/contactServices/contact");
const { HttpError} = require("../../helpers");

const updateStatus = async (req, res) => {
  const id = req.params.id;
  const updatedContact = await updateContact(id, req.body);
  if (!updatedContact) throw HttpError(404, "Not found");
  res.status(200).json(updatedContact);
};

module.exports = updateStatus;