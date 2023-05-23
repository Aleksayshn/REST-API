const {
  getAllContacts,
} = require("../../services/contactServices/contact");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;

  const { page = 1, limit = 10, favorite } = req.query;
  const skip = (page - 1) * limit;
  const paginationParams = { skip, limit };

  const filter = !favorite ? { owner } : { owner, favorite };

  const contacts = await getAllContacts(filter, paginationParams);

  res.status(200).json(contacts);
};

module.exports = getAll;