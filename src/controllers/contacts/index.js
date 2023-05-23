const { asyncControlersWrapper } = require("../../helpers");
const getAll = require("./getAll");
const getById = require("./getById");
const add = require("./add");
const update = require("./update");
const remove = require("./remove");
const updateStatus = require("./updateStatus");
  
module.exports = {
  getAll: asyncControlersWrapper(getAll),
  getById: asyncControlersWrapper(getById),
  add: asyncControlersWrapper(add),
  update: asyncControlersWrapper(update),
  remove: asyncControlersWrapper(remove),
  updateStatus: asyncControlersWrapper(updateStatus),
};