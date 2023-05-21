const mongoose = require("mongoose");
const { HttpError } = require("../helpers");

const isValidId = (req, _, next) => {
  const id = req.params.contactId;

  if (!id || !mongoose.isValidObjectId(id)) throw HttpError(404, "Not found");

  next();
};

module.exports = isValidId;
