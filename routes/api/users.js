const express = require('express')
const router = express.Router()
const {users: ctrl} = require('../../controllers')

const {ctrlWrapper} = require("../../helpers")
const {auth} = require("../../middlewares")

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

module.exports = router;