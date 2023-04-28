const express = require('express')
const router = express.Router()
const {auth: ctrl} = require('../../controllers')
const {auth} = require("../../middlewares")

const {ctrlWrapper} = require("../../helpers")
const {validateBody} = require("../../middlewares")
const { schemasUser } = require('../../models')

router.post("/register",
    validateBody(schemasUser.joiRegisterSchema),
    ctrlWrapper(ctrl.register));

router.post("/login",
    validateBody(schemasUser.joiLoginSchema),
    ctrlWrapper(ctrl.login));

router.get("/logout", auth,
    ctrlWrapper(ctrl.logout));

module.exports = router;
