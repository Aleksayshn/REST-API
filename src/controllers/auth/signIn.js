// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {
  logInUser,
  setToken,
} = require("../../services/userServices/user");
const { HttpError } = require("../../helpers");

require('dotenv').config();
const { JWT_SECRET } = process.env;

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await logInUser({ email });

    if (!user || !user.comparePassword(password)) {
        throw HttpError(401, "Email or password is wrong");
    }
    // const passCompare = bcrypt.compareSync(password, user.password)
    // if (!user || !passCompare) {
    //     throw new Unauthorized("Email or password is wrong");
    // }
    // if (!user) {
    //     throw new Unauthorized();
    // }
    // const passCompare = bcrypt.compareSync(password, user.password)
    // if (!passCompare) {
    //     throw new Unauthorized('Password wrong');
    // }

    const payload = {
        id: user._id
    }

  const { _id, subscription } = user;

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "5h" });
  await setToken(_id, { token });

  res.status(200).json({
        status: "success",
        code: 200, 
        data: {
          token,
          user: { email: user.email, subscription },
      }
    });
};

module.exports = signIn; 