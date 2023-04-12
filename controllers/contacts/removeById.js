const {Contact} = require('../../models')
const { HttpError } = require('../../helpers/HttpError')

const removeById = async (req, res) => {
    const { id } = req.params;
    const result = await Contact.findByIdAndRemove(id);
    if (!result) {
        throw HttpError(404, `Product with id=${id} not found`);
    }
    res.json({
        status: "success",
        code: 200,
        message: "product deleted",
        data: {
            result
        }
    })
}

module.exports = removeById;