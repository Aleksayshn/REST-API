const { isValidObjectId } = require('mongoose');
const { HttpError } = require("../helpers");

const isValidId = (req, _, next) => {
  const id = req.params.contactId;

  if (!id || !isValidObjectId(id))  
  {
    const error = HttpError(404, `Invalid id`)
    next(error);
    }
  next();
};

module.exports = isValidId;
