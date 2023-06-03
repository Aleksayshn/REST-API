const {
  getContactById,
} = require("../../services/contactServices/contact");
const { HttpError } = require("../../helpers");


const getById = async (req, res) => {
  const { id } = req.params;

  const contact = await getContactById(id);

  if (!contact) throw HttpError(404, "Not found");

  res.status(200).json(contact);
};

module.exports = getById;