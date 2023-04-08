const express = require('express')
const ctrl = require('../../controllers/contacts')

const { validateBody } = require('../../middlewares')
const schemas = require('../../schemas/contacts')

const router = express.Router()

router.get('/', ctrl.getAll)

router.get('/:contactId', ctrl.getById)

router.post("/", validateBody(schemas.contactAddSchema), ctrl.add);

router.put("/:contactId", validateBody(schemas.contactAddSchema), ctrl.updateById);

router.patch("/:contactId/", ctrl.changeById);

router.delete("/:contactId", ctrl.remove);


module.exports = router;
