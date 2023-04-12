const {Contact} = require('../../models')
const { HttpError } = require('../../helpers/HttpError')

const updateFavorite = async (req, res) => {
    const { id } = req.params;
    const {favorite} = req.body;
    const result = await Contact.findByIdAndUpdate(id, {favorite}, {new: true});
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

module.exports = updateFavorite;