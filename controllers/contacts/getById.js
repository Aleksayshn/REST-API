const {Contact} = require('../../models')
const { HttpError } = require('../../helpers/HttpError')


const getById = async (req, res) => {
    const { id } = req.params;
            console.log(req.params);

    const result = await Contact.findById(id);

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

module.exports = getById;