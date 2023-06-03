const {
  deleteContact,
} = require("../../services/contactServices/contact");
const { HttpError } = require("../../helpers");

const remove = async (req, res) => {
  const id = req.params.id;
  const result = await deleteContact(id);
  if (!result) throw HttpError(404, "Not found");
  res.status(200).json({ message: "Contact deleted." });
};

module.exports = remove;