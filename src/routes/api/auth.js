const { Router } = require("express");
const router = Router();
const {auth: ctrl} = require('../../controllers')

const {
  authValidation,
  authorizationCheck,
} = require("../../middlewares");


router
  .post("/register", authValidation, ctrl.signUp)
  .post("/login", authValidation, ctrl.signIn)
  .post("/logout", authorizationCheck, ctrl.logOut)

module.exports = router;
