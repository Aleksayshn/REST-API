
const {
  setToken,
} = require("../../services/userServices/user");
const { HttpError } = require("../../helpers");

const logOut = async (req, res, _) => {
  const { _id } = req.user;
  if (!_id) {
    throw HttpError(401, "Unauthorized (invalid access token)")
    }
  await setToken(_id, { token: "" });
  res.status(204).json({ message: "Logout sucess" });
};

module.exports = logOut; 