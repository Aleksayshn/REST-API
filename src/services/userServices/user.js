const User = require("./userSchemas");

const checkingDoesEmailInUse = (email) => User.findOne({ email });

const registerUser = (credentials) => User.create(credentials);

const logInUser = (credentials) => User.findOne(credentials);

const setToken = (id, { token }) => User.findByIdAndUpdate(id, { token });

const changeSubscription = (id, { subscription }) =>
  User.findByIdAndUpdate(
    { id },
    { subscription },
    { returnDocument: "after" }
  );

const setNewAvatar = (id, avatarURL) =>
  User.findByIdAndUpdate(id, { avatarURL });

module.exports = {
  checkingDoesEmailInUse,
  registerUser,
  logInUser,
  setToken,
  changeSubscription,
  setNewAvatar,
};
