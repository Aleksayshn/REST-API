  const { asyncControlersWrapper } = require("../../helpers");
  const getCurrentUser = require("./getCurrent");
  const updateSubscription = require("./updateSubscription");
  const updateAvatar = require("./updateAvatar");

module.exports = {
    getCurrentUser: asyncControlersWrapper(getCurrentUser),
    updateSubscription: asyncControlersWrapper(updateSubscription),
    updateAvatar: asyncControlersWrapper(updateAvatar),
  };