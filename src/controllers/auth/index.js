  const { asyncControlersWrapper } = require("../../helpers");
  const signUp = require("./signUp");
  const signIn = require("./signIn");
  const logOut = require("./logOut");

module.exports = {
    signUp: asyncControlersWrapper(signUp),
    signIn: asyncControlersWrapper(signIn),
    logOut: asyncControlersWrapper(logOut),
  };