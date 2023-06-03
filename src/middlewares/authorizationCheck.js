const jwt = require("jsonwebtoken");
const User = require("../services/userServices/userSchemas");
const { HttpError } = require("../helpers");
const { JWT_SECRET } = process.env;

const authorizationCheck = async (req, _, next) => {
    const { authorization = "" } = req.headers;
    if (!authorization) throw HttpError(401, "Not authorized");
    const [bearer, token] = authorization.split(" ");
try {
  if (bearer !== "Bearer") throw HttpError(401, "Not authorized");

  const { id } = jwt.verify(token, JWT_SECRET);    
  if (!id) throw HttpError(401, "Not authorized");

  const user = await User.findById(
      { id },
      "email subscription token"
    );
    if (!user || !user.token || user.token !== token)
      throw HttpError(401, "Not authorized");
  
  req.user = user;
  
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authorizationCheck;
