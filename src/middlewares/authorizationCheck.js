const jwt = require("jsonwebtoken");
const User = require("../services/userServices/userSchemas");
const { HttpError } = require("../helpers");
const { JWT_SECRET } = process.env;

const authorizationCheck = async (req, _, next) => {
    // Извлекает токен из заголовка
    const { authorization = "" } = req.headers;
    if (!authorization) throw HttpError(401, "Not authorized");
        // Делим токен
    const [bearer, token] = authorization.split(" ");
try {
  if (bearer !== "Bearer") throw HttpError(401, "Not authorized");
    // Если токен валиден - извлечь из него id и 
    // проверить валидность второго слова(токен) - верификация
  const { _id } = jwt.verify(token, JWT_SECRET);    
  if (!_id) throw HttpError(401, "Not authorized");

  // найти пользователя в базе с таким id
  const user = await User.findById(
      { _id: _id },
      "email subscription token"
    );
    if (!user || !user.token || user.token !== token)
      throw HttpError(401, "Not authorized");
  
  //     прикрепить пользователя с id к запросу(объект req).
  req.user = user;
  
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authorizationCheck;
