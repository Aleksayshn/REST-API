const { Router } = require("express");
const router = Router();
const {users: ctrl} = require('../../controllers')

const {
  subscriptionValidation,
  authorizationCheck,
  upload,
} = require("../../middlewares");


router
  .get("/current", authorizationCheck, ctrl.getCurrentUser)
  .patch("/", authorizationCheck, subscriptionValidation, ctrl.updateSubscription)
  .patch("/avatars", authorizationCheck, upload.single("avatar"), ctrl.updateAvatar);

module.exports = router;
