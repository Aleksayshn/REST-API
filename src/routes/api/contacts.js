const { Router } = require("express");
const router = Router();
const { contacts: ctrl } = require('../../controllers')

const { isValidId } = require("../../middlewares");
const {
  addContactValidation,
  updateContactValidation,
  updateStatusValidation,
} = require("../../middlewares");

const { authorizationCheck } = require("../../middlewares");

router
  .get("/", authorizationCheck, ctrl.getAll)
  .get("/:id", authorizationCheck, isValidId, ctrl.getById)
  .post("/", authorizationCheck, addContactValidation, ctrl.add)
  .delete("/:id", authorizationCheck, isValidId, ctrl.remove)
  .put(
    "/:id",
    authorizationCheck,
    isValidId,
    updateContactValidation,
    ctrl.update
  )
  .patch(
    "/:id/favorite",
    authorizationCheck,
    isValidId,
    updateStatusValidation,
    ctrl.updateStatus
  );

module.exports = router;
