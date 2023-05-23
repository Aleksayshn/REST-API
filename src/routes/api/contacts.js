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
  .get("/:contactId", authorizationCheck, isValidId, ctrl.getById)
  .post("/", authorizationCheck, addContactValidation, ctrl.add)
  .delete("/:contactId", authorizationCheck, isValidId, ctrl.remove)
  .put(
    "/:contactId",
    authorizationCheck,
    isValidId,
    updateContactValidation,
    ctrl.update
  )
  .patch(
    "/:contactId/favorite",
    authorizationCheck,
    isValidId,
    updateStatusValidation,
    ctrl.updateStatus
  );

module.exports = router;
