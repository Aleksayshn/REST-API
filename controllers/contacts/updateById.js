const {Contact} = require('../../models')
const { HttpError } = require('../../helpers/HttpError')

const updateById = async (req, res) => {
    const { id } = req.params;
    const result = await Contact
        .findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
        throw HttpError(404, `Product with id=${id} not found`);
    }
    res.json({
        status: "success",
        code: 200,
        data: {
            result
        }
    })
}


module.exports = updateById;