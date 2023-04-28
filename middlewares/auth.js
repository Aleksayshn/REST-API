const {User} = require("../models");
const {Unauthorized} = require("http-errors");
const jwt = require("jsonwebtoken");

const {SECRET_KEY} = process.env;

const auth = async (req, res, next) => {
    // Извлекает токен из заголовка
    const { authorization = "" } = req.headers;
        // Делим токен на 2 слова
    const [bearer, token] = authorization.split(" ");
    try {
        // Проверям находится ли в первом слове нужное значение
        if (bearer !== "Bearer") {
            throw new Unauthorized("Not authorized")
        }
        // Если токен валиден - извлечь из него id и 
        // проверить валидность второго слова(токен) - верификация
        const { id } = jwt.verify(token, SECRET_KEY);
        // найти пользователя в базе с таким id
        const user = await User.findById(id);
        if (!user || !user.token) {
            throw new Unauthorized("Not authorized");
        }
//     прикрепить пользователя с id к запросу(объект req).
        req.user = user;
        next();
    } catch (error) {
        if(error.message === "invalid sugnature"){
            error.status = 401;
        }
        next(error);
    }    
}

module.exports = auth;