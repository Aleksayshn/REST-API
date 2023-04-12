const { isValidObjectId } = require('mongoose');
const {HttpError} = require("../helpers")

const isValidId = (req, _, next) => {
    const { id } = req.params;
    const isCorrectId = isValidObjectId(id);
    if (!isCorrectId) {
        const error = HttpError(404, `Invalid id`)
        next(error);
    }
    next();
}

module.exports = isValidId;